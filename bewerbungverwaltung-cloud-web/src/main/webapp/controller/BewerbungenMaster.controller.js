sap.ui.define([
	"de/fis/bewerbungverwaltung/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"de/fis/bewerbungverwaltung/model/filter",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(BaseController, UIComponent, Sorter, Filter, FilterOperator, JSONModel, filter,
	formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungenMaster", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods, etc.                                     */
		/* =========================================================== */

		onInit: function() {
			var oViewModel = this._createViewModel();
			this.getView().setModel(oViewModel, "masterView");

			this._oList = this.getView().byId("listBewerbungen");

			// Enthält alle Filter und Suchzustände
			this._oFilterSearchState = {
				aFilter: [],
				aSearch: []
			};
		},
		_createViewModel: function() {
			return new JSONModel({
				isFilterBarVisible: false,
				isPullToRefreshVisible: false,
				filterBarLabel: "",
				delay: 0,
				title: this.getResourceBundle().getText("MasterTitleWithCount", [0]),
				noDataText: this.getResourceBundle().getText("MasterListNoDataText"),
				filterStellen: [],
				sortBy: "EingetragenAm"
			});
		},
		onExit: function() {},
		onAfterRendering: function() {},
		onBeforeRendering: function() {},

		onAddPressed: function() {	// test
			var oModel = this.getModel("newModel");
			var oProperties = {
				Name: "Testname"
			};
			var oEntry = oModel.createEntry("Tests", {properties: oProperties});
			oModel.submitChanges();
		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Navigates to the detail view of the chosen application
		 * 
		 * @handler "press" event of BewerbungListItem
		 * @param oEvent: The press event
		 * @public
		 */
		onListItemPressed: function(oEvent) {
			var bindingContext = oEvent.getSource().getBindingContextPath();

			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("BewerbungDetail", {
				Bewerbung: bindingContext.substr(1)
			});
		},

		/**
		 * Updates the title of the page with the number of items in the list
		 * 
		 * @handler "updateFinished" event of the List
		 * @param oEvent: The updateFinished event
		 * @public
		 */
		onUpdateFinished: function(oEvent) {
			var totalItems = oEvent.getParameter("total");

			if (this._oList.getBinding("items").isLengthFinal()) { // Wenn die Länge der geladenen Items "final" ist, 
				var sTitle = this.getResourceBundle().getText("MasterTitleWithCount", [totalItems]); // aktualisiere die Itemanzahl
				this.getModel("masterView").setProperty("/title", sTitle); // im Titel der Page
			}
		},

		/**
		 * Determines the search query string and creates a corresponding filter
		 * 
		 * @handler "search" event of SearchField
		 * @handler "liveChange" event of SearchField
		 * @param oEvent: The search or liveChange event
		 * @public
		 */
		onSearch: function(oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("newValue"); // Parameter "newValue" enthält den Suchstring beim "liveChange"-Event
			if (sQuery == null) {
				sQuery = oEvent.getParameter("query"); // Falls es den nicht gibt, hole den vom "search"-Event
			}

			if (sQuery !== "") { // Wenn etwas im SearchField steht,
				aFilter.push( // dann erstelle Filter für Vor- und Nachname
					new Filter("BewerberDetails/Vorname", FilterOperator.Contains, sQuery),
					new Filter("BewerberDetails/Nachname", FilterOperator.Contains, sQuery)
				);
				this._oFilterSearchState.aSearch = [new Filter(aFilter, false)]; // Füge die Filter mit 'OR' zusammen
			} else {
				this._oFilterSearchState.aSearch = []; // Lösche die Suchfilter wenn SearchField leer ist, 
			} // um wieder alle Ergebnisse anzuzeigen

			this._applyFilterSearch(); // Filter anwenden
		},

		/**
		 * Opens the ViewSettingsDialog at the filter tab
		 * 
		 * @handler "press" event of FilterAction
		 * @param oEvent: The press event
		 * @public
		 */
		onFilterPressed: function(oEvent) {
			var oDialog = this._getViewSettingsDialog();
			oDialog.open("filter");
		},
		/**
		 * Opens the ViewSettingsDialog at the sort tab
		 * 
		 * @handler "press" event of SortAction
		 * @param oEvent: The press event
		 * @public
		 */
		onSortPressed: function(oEvent) {
			var oDialog = this._getViewSettingsDialog();
			oDialog.open("sort");
		},
		/**
		 * Gets the filter- and sort-options and calls methods 
		 * which create and eventually apply the corresponding filters/sorters
		 * 
		 * @handler "confirm" event of ViewSettingsDialog
		 * @param oEvent: The confirm event
		 * @public
		 */
		onConfirmViewSettingsDialog: function(oEvent) {
			var aFilterItems = oEvent.getParameters().filterItems,
				oSortItem = oEvent.getParameters().sortItem,
				bSortDescending = oEvent.getParameters().sortDescending;

			this._handleSorting(oSortItem, bSortDescending);
			this._handleFiltering(aFilterItems);
		},

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		/**
		 * Creates the ViewSettingsDialog if not already created
		 * (onFilterPressed --> _getViewSettingsDialog)
		 * (onSortPressed	--> _getViewSettingsDialog)
		 * 
		 * @return {sap.ui.xmlfragment} viewSettingsDialog
		 * @private
		 */
		_getViewSettingsDialog: function() {
			// Gibt den ViewSettingsDialog zurück und
			// erstellt ihn vorher, wenn nötig
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("de.fis.bewerbungverwaltung.view.fragment.ViewSettingsDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},

		/**
		 * Handles the creation of the sorter
		 * (onConfirmViewSettingsDialog --> _handleSorting)
		 * 
		 * @param oSortItem: The SortItem as received from the ViewSettingsDialog
		 * @param bDescending: Wether the sorting should be descending or ascending
		 * @private
		 */
		_handleSorting: function(oSortItem, bDescending) {
			if (oSortItem === undefined) {
				return;
			}
			if (bDescending === undefined) {
				bDescending = false;
			}
			
			var sKey = oSortItem.mProperties.key;
			var aSorters = [new Sorter(sKey, bDescending)];

			this._applySort(aSorters);
		},
		/**
		 * Handles the creation of the filters and text for the FilterBar 
		 * (onConfirmViewSettingsDialog --> _handleFiltering)
		 * 
		 * @param aFilterItems: The array of FilterItems as received from the ViewSettingsDialog
		 * @private
		 */
		_handleFiltering: function(aFilterItems) {
			if (aFilterItems === undefined) {
				return;
			}
			var aFilters = [], // Temporärer Array für die erstellten Filter
				aCaptions = [], // Temporärer Array für den Text, der in der FilterBar angezeigt wird
				aFilterStellen = [], // Temporärer Array für die IDs der Stellen, nach denen gefiltert wird
				sText = "";

			// Alle FilterItems durchgehen und erstellte Filter
			// bzw. die ID der gefilterten Stellen temporär speichern
			aFilterItems.forEach(function(oItem) {
				switch (oItem.oParent.mProperties.key) { // Der Key der Gruppe (Status oder Stelle)
					case "Status": // Aus Status können direkt die Filter gebaut werden, weil die Bewerbung den Status direkt kennt
						aFilters.push(new Filter("StatusDetails/StatusId", FilterOperator.EQ, oItem.getKey()));
						aCaptions.push(oItem.getText()); // Den Anzeigetext für die FilterBar zusammenbauen
						break;
					case "Stelle": // Aus Stelle können nicht direkt die Filter gebaut werden, weil die Bewerbung einen Array von Stellen hat
						aFilterStellen.push(oItem.getKey()); // Temporär die ID der gefilterten Stellen speichern
						break;
				}
			});

			sText = aCaptions.join(", ");

			if (aFilterStellen.length > 0) { // Wenn nach Stellen gefiltert wird,
				aFilters.push(new sap.ui.model.Filter({ // übergib den
					path: "BewerbungStelleDetails/results", // Array mit den Stellen der Bewerbung
					test: filter.fnFilterStellen.bind(this) // an eine eigene Filterfunktion
				})); // (überprüft, ob der Array eine der gefilterten Stellen enthält)

				if (sText !== "") {
					sText += " und ";
				}
				sText += aFilterStellen.length.toString() + " Stellen";
			}

			// Speichere die gefilterten Stellen in einer Instanzvariable, dass die eigene Filterfunktion später darauf zugreifen kann
			this.getModel("masterView").setProperty("/filterStellen", aFilterStellen);

			this._oFilterSearchState.aFilter = aFilters;
			this._updateFilterBar(sText); // Text in der FilterBar anzeigen
			this._applyFilterSearch();
		},
		/**
		 * Updates the visibility and the text of the FilterBar
		 * (onConfirmViewSettingsDialog --> _handleFiltering --> _updateFilterBar)
		 * 
		 * @param oSortItem: The SortItem as received from the ViewSettingsDialog
		 * @param bDescending: Wether the sorting should be descending or ascending
		 * @private
		 */
		_updateFilterBar: function(sFilterBarText) {
			var oViewModel = this.getModel("masterView");
			oViewModel.setProperty("/isFilterBarVisible", (this._oFilterSearchState.aFilter.length > 0));
			oViewModel.setProperty("/filterBarLabel", this.getResourceBundle().getText("MasterFilterBarText", [sFilterBarText]));
		},
		/**
		 * Applys the filters and the search to the Lists "item" binding (because both are Filter objects)
		 * (onConfirmViewSettingsDialog --> _handleFiltering --> _applyFilterSearch)
		 * (onSearch --> _applyFilterSearch)
		 * 
		 * @private
		 */
		_applyFilterSearch: function() {
			var aFilters = this._oFilterSearchState.aSearch.concat(this._oFilterSearchState.aFilter),
				oViewModel = this.getModel("masterView");

			this._oList.getBinding("items").filter(aFilters, "Application");
			// Ändert den noDataText der List je nachdem, ob Filter angewendet werden oder nicht
			if (aFilters.length !== 0) {
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("MasterListNoDataWithFilterOrSearchText"));
			} else if (this._oFilterSearchState.aSearch.length > 0) {
				// only reset the no data text to default when no new search was triggered
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("MasterListNoDataText"));
			}
		},
		/**
		 * Applys the sorters to the Lists "item" binding
		 * (onConfirmViewSettingsDialog --> _handleSorting --> _applySort)
		 * 
		 * @param aSorters: The array of Sorters as created by _handleSorting
		 * @private
		 */
		_applySort: function(aSorters) {
			this._oList.getBinding("items").sort(aSorters);
		}

	});

});
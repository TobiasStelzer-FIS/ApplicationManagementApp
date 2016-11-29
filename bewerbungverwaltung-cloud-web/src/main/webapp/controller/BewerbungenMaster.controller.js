sap.ui.define([
	"de/fis/bewerbungverwaltung/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/m/GroupHeaderListItem",
	"de/fis/bewerbungverwaltung/model/GroupSortState",
	"de/fis/bewerbungverwaltung/model/grouper",
	"de/fis/bewerbungverwaltung/model/filter",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(BaseController, UIComponent, Filter, FilterOperator, JSONModel, GroupHeaderListItem, GroupSortState, grouper, filter,
	formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungenMaster", {

		formatter: formatter,

		onInit: function() {
			var oViewModel = this._createViewModel();
			this.getView().setModel(oViewModel, "masterView");

			this._oGroupSortState = new GroupSortState(oViewModel);

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
				title: this.getResourceBundle().getText("masterTitleCount", [0]),
				noDataText: this.getResourceBundle().getText("masterListNoDataText"),
				filterStellen: [],
				sortBy: "EingetragenAm",
				groupBy: "None"
			});
		},
		onExit: function() {},
		onAfterRendering: function() {},
		onBeforeRendering: function() {},
		onUpdateFinished: function(oEvent) {
			// EventHandler für "updateFinished"-Event der Bewerbungen-Liste
			var totalItems = oEvent.getParameter("total");

			if (this._oList.getBinding("items").isLengthFinal()) { // Wenn die Länge der geladenen Items "final" ist, 
				var sTitle = this.getResourceBundle().getText("TitleWithCount", [totalItems]); // aktualisiere die Itemanzahl
				this.getModel("masterView").setProperty("/title", sTitle); // im Titel der Page
			}

			/* // PullToRefresh verstecken
			this.byId("pullToRefresh").hide();
			this.getModel("masterView").setProperty("/isPullToRefreshVisible", false);
			*/
		},
		onRefresh: function(oEvent) {
			// EventHandler für "refresh"-Event vom PullToRefresh-Control
			this._oList.getBinding("items").refresh();
		},
		_getViewSettingsDialog: function() {
			// Gibt den ViewSettingsDialog zurück und
			// erstellt ihn vorher, wenn nötig
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("de.fis.bewerbungverwaltung.view.fragment.ViewSettingsDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onListItemPressed: function(oEvent) {
			// EventHandler für das "press"-Event der CustomListItems für die einzelnen Bewerbungen
			var bindingContext = oEvent.getSource().getBindingContextPath();

			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("BewerbungDetail", {
				Bewerbung: bindingContext.substr(12)
			});
		},
		onSort: function(oEvent) {
			// EventHandler für das "change"-Event der SortSelection (anstatt ViewSettingsDialog)
			var sKey = oEvent.getSource().getSelectedItem().getKey(),
				aSorters = this._oGroupSortState.sort(sKey);

			this._applyGroupSort(aSorters);
		},
		onGroup: function(oEvent) {
			// EventHandler für das "change"-Event der GroupSelection (anstatt ViewSettingsDialog)
			var sKey = oEvent.getSource().getSelectedItem().getKey(),
				aSorters = this._oGroupSortState.group(sKey);

			this._applyGroupSort(aSorters);
		},
		onSearch: function(oEvent) {
			// EventHandler für "search"-Event und "liveChange"-Event des SearchFields
			var aFilter = [];
			var sQuery = oEvent.getParameter("newValue"); // Parameter "newValue" enthält den Suchstring beim "liveChange"-Event
			if (sQuery == null) {
				sQuery = oEvent.getParameter("query"); // Falls es den nicht gibt, hole den vom "search"-Event (Parameter "query")
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
		onFilterPressed: function(oEvent) {
			// EventHandler für "press"-Event der FilterAction
			var oDialog = this._getViewSettingsDialog();
			oDialog.open("filter");
		},
		onSortPressed: function(oEvent) {
			// EventHandler für "press"-Event der SortAction
			var oDialog = this._getViewSettingsDialog();
			oDialog.open("sort");
		},
		onGroupPressed: function(oEvent) {
			// EventHandler für "press"-Event der GroupAction
			var oDialog = this._getViewSettingsDialog();
			oDialog.open("group");
		},
		onConfirmViewSettingsDialog: function(oEvent) {
			var aFilterItems = oEvent.getParameters().filterItems,
				oSortItem = oEvent.getParameters().sortItem,
				oGroupItem = oEvent.getParameters().groupItem,
				bSortDescending = oEvent.getParameters().sortDescending,
				bGroupDescending = oEvent.getParameters().groupDescending;

			this.handleSorting(oSortItem, bSortDescending);
			this.handleGrouping(oGroupItem, bGroupDescending);
			this.handleFiltering(aFilterItems);
		},
		handleSorting: function(oSortItem, bDescending) {
			if (oSortItem === undefined) {
				return;
			}
			var sKey = oSortItem.mProperties.key,
				aSorters = this._oGroupSortState.sort(sKey, bDescending);

			this._applyGroupSort(aSorters);
		},
		handleGrouping: function(oGroupItem, bDescending) {
			if (oGroupItem === undefined) {
				return;
			}
			var sKey = oGroupItem.mProperties.key,
				aSorters = this._oGroupSortState.group(sKey, bDescending);

			this._applyGroupSort(aSorters);
		},
		handleFiltering: function(aFilterItems) {
			if (aFilterItems === undefined) {
				return;
			}
			var aFilters = [],			// Temporärer Array für die erstellten Filter
				aCaptions = [], 		// Temporärer Array für den Text, der in der FilterBar angezeigt wird
				aFilterStellen = [],	// Temporärer Array für die IDs der Stellen, nach denen gefiltert wird
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

			this._oFilterSearchState.aFilter = aFilters; //
			this._updateFilterBar(sText); // Text in der FilterBar anzeigen
			this._applyFilterSearch();
		},
		createGroupHeader: function(oGroup) {
			jQuery.sap.log.error("CreateGroupHeader");
			return new GroupHeaderListItem({
				title: oGroup.text,
				upperCase: false
			});
		},
		_updateFilterBar: function(sFilterBarText) {
			var oViewModel = this.getModel("masterView");
			oViewModel.setProperty("/isFilterBarVisible", (this._oFilterSearchState.aFilter.length > 0));
			oViewModel.setProperty("/filterBarLabel", this.getResourceBundle().getText("FilterBarText", [sFilterBarText]));
		},
		/**
		 * Wendet die Filter und Search an (weil beide Filter-Objekte sind)
		 */
		_applyFilterSearch: function() {
			var aFilters = this._oFilterSearchState.aSearch.concat(this._oFilterSearchState.aFilter),
				oViewModel = this.getModel("masterView");

			this._oList.getBinding("items").filter(aFilters, "Application");
			// Ändert den noDataText der List je nachdem, ob Filter angewendet werden oder nicht
			if (aFilters.length !== 0) {
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("ListNoDataWithFilterOrSearchText"));
			} else if (this._oFilterSearchState.aSearch.length > 0) {
				// only reset the no data text to default when no new search was triggered
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("ListNoDataText"));
			}
		},
		/**
		 * Wendet die Grouper und Sorter an (weil beide Sorter-Objekte sind)
		 */
		_applyGroupSort: function(aSorters) {
			this._oList.getBinding("items").sort(aSorters);
		}

	});

});
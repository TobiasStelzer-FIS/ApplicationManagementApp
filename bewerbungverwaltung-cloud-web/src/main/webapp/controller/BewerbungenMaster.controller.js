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
], function(BaseController, UIComponent, Filter, FilterOperator, JSONModel, GroupHeaderListItem, GroupSortState, grouper, filter, formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungenMaster", {

		formatter: formatter,

		onInit: function() {
			var oViewModel = this._createViewModel();
			this.getView().setModel(oViewModel, "masterView");

			this._oGroupSortState = new GroupSortState(oViewModel, grouper.groupStatus);

			this._oList = this.getView().byId("listBewerbungen");
			// keeps the filter and search state
			this._oListFilterState = {
				aFilter: [],
				aSearch: []
			};
		},
		onExit: function() {

		},
		onAfterRendering: function() {

		},
		onBeforeRendering: function() {

		},
		onUpdateFinished: function(oEvent) {
			// update the master list object counter after new data is loaded
			this._updateListItemCount(oEvent.getParameter("total"));
			// hide pull to refresh if necessary
			this.byId("pullToRefresh").hide();
		},
		onRefresh: function(oEvent) {
			this._oList.getBinding("items").refresh();
		},
		_getDialog: function() {
			if (!this._oDialog) {
				jQuery.sap.log.error("!this._oDialog");
				this._oDialog = sap.ui.xmlfragment("de.fis.bewerbungverwaltung.view.fragment.ViewSettingsDialog", this);
				this.getView().addDependent(this._oDialog);
				jQuery.sap.log.error("_getDialog (_oDialog): " + this._oDialog);
			}
			return this._oDialog;
		},
		onListItemPressed: function(oEvent) {
			var bindingContext = oEvent.getSource().getBindingContextPath();
			sap.m.MessageToast.show(bindingContext);

			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("BewerbungDetail", {
				Bewerbung: bindingContext.substr(12)
			});
		},
		/**
		 * Event handler for the sorter selection.
		 * @param {sap.ui.base.Event} oEvent the select event
		 * @public
		 */
		onSort: function(oEvent) {
			var sKey = oEvent.getSource().getSelectedItem().getKey(),
				aSorters = this._oGroupSortState.sort(sKey);

			this._applyGroupSort(aSorters);
		},
		/**
		 * Event handler for the grouper selection.
		 * @param {sap.ui.base.Event} oEvent the search field event
		 * @public
		 */
		onGroup: function(oEvent) {
			var sKey = oEvent.getSource().getSelectedItem().getKey(),
				aSorters = this._oGroupSortState.group(sKey);

			this._applyGroupSort(aSorters);
		},
		onSearch: function(oEvent) {
			var aFilter = [];
			this._oListFilterState.aSearch = [];
			var sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push(
					new Filter("BewerberDetails/Vorname", FilterOperator.Contains, sQuery),
					new Filter("BewerberDetails/Nachname", FilterOperator.Contains, sQuery)
				);

				this._oListFilterState.aSearch.push(new Filter(aFilter, false)); // Filter by 'OR'
			}

			this._applyFilterSearch();
		},
		onFilterPressed: function(oEvent) {
			jQuery.sap.log.error("onFilterPressed");
			var oDialog = this._getDialog();
			jQuery.sap.log.error("onFilterPressed (oDialog): " + oDialog);
			oDialog.open("filter");
		},
		onConfirmViewSettingsDialog: function(oEvent) {
			var aFilterItems = oEvent.getParameters().filterItems,
				aFilters = [],
				aCaptions = [],
				aFilterStellen = [];

			// update filter state:
			// combine the filter array and the filter string
			aFilterItems.forEach(function(oItem) {
				switch (oItem.oParent.mProperties.key) { // Der key des ViewSettingsFilterItem
					case "Status":
						aFilters.push(new Filter("StatusDetails/StatusId", FilterOperator.EQ, oItem.getKey()));
						break;
					case "Stelle":
						aFilterStellen.push(oItem.getKey());
						break;
				}
				aCaptions.push(oItem.getText());
			});

			if (aFilterStellen.length > 0) {
				aFilters.push(new sap.ui.model.Filter({
					path: "BewerbungStelleDetails/results",
					test: filter.fnFilterStellen.bind(this)
				}));
			}

			this.getModel("masterView").setProperty("/filterStellen", aFilterStellen);
			this._oListFilterState.aFilter = aFilters;
			this._updateFilterBar(aCaptions.join(", "));
			this._applyFilterSearch();
		},
		/**
		 * Used to create GroupHeaders with non-capitalized caption.
		 * These headers are inserted into the master list to
		 * group the master list's items.
		 * @param {Object} oGroup group whose text is to be displayed
		 * @public
		 * @returns {sap.m.GroupHeaderListItem} group header with non-capitalized caption.
		 */
		createGroupHeader: function(oGroup) {
			jQuery.sap.log.error("CreateGroupHeader");
			return new GroupHeaderListItem({
				title: oGroup.text,
				upperCase: false
			});
		},
		_updateListItemCount: function(iTotalItems) {
			var sTitle;
			// only update the counter if the length is final
			if (this._oList.getBinding("items").isLengthFinal()) {
				sTitle = this.getResourceBundle().getText("masterTitleCount", [iTotalItems]);
				this.getModel("masterView").setProperty("/title", sTitle);
			}
		},
		_createViewModel: function() {
			return new JSONModel({
				isFilterBarVisible: false,
				filterBarLabel: "",
				delay: 0,
				title: this.getResourceBundle().getText("masterTitleCount", [0]),
				noDataText: this.getResourceBundle().getText("masterListNoDataText"),
				filterStellen: [],
				sortBy: "EingetragenAm",
				groupBy: "None"
			});
		},
		/**
		 * Internal helper method that sets the filter bar visibility property and the label's caption to be shown
		 * @param {string} sFilterBarText the selected filter value
		 * @private
		 */
		_updateFilterBar: function(sFilterBarText) {
			var oViewModel = this.getModel("masterView");
			oViewModel.setProperty("/isFilterBarVisible", (this._oListFilterState.aFilter.length > 0));
			oViewModel.setProperty("/filterBarLabel", this.getResourceBundle().getText("masterFilterBarText", [sFilterBarText]));
		},
		/**
		 * Internal helper method to apply both filter and search state together on the list binding
		 * @private
		 */
		_applyFilterSearch: function() {
			var aFilters = this._oListFilterState.aSearch.concat(this._oListFilterState.aFilter),
				oViewModel = this.getModel("masterView");
			jQuery.sap.log.error("Filters: " + JSON.stringify(aFilters));
			this._oList.getBinding("items").filter(aFilters, "Application");
			// changes the noDataText of the list in case there are no filter results
			if (aFilters.length !== 0) {
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("masterListNoDataWithFilterOrSearchText"));
			} else if (this._oListFilterState.aSearch.length > 0) {
				// only reset the no data text to default when no new search was triggered
				oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("masterListNoDataText"));
			}
		},
		/**
		 * Internal helper method to apply both group and sort state together on the list binding
		 * @param {sap.ui.model.Sorter[]} aSorters an array of sorters
		 * @private
		 */
		_applyGroupSort: function(aSorters) {
			jQuery.sap.log.error("Sorter: " + JSON.stringify(aSorters));
			this._oList.getBinding("items").sort(aSorters);
		}

	});

});
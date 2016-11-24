sap.ui.define([
	"de/fis/bewerbungverwaltung/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(BaseController, UIComponent, Filter, FilterOperator, JSONModel, formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungenMaster", {

		formatter: formatter,

		onInit: function() {
			this._oList = this.getView().byId("listBewerbungen");
			// keeps the filter and search state
			this._oListFilterState = {
				aFilter: [],
				aSearch: []
			};

			var oViewModel = this._createViewModel();
			this.getView().setModel(oViewModel, "masterView");
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
		onSemanticSelectChange: function() {
			sap.m.MessageToast.show("onSemanticSelectChange");
		},
		onSemanticButtonPress: function() {
			sap.m.MessageToast.show("onSemanticButtonPress");
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
					test: this._fnFilterStellen.bind(this)
				}));
			}
			
			this.getModel("masterView").setProperty("/filterStellen", aFilterStellen);
			this._oListFilterState.aFilter = aFilters;
			this._updateFilterBar(aCaptions.join(", "));
			this._applyFilterSearch();
		},
		_fnFilterStellen: function(oPath) {
			jQuery.sap.log.error("---- _fnFilterStellen ----");
			var aFilterStellen = this.getModel("masterView").getProperty("/filterStellen");
			var i = 0;
			/*
			jQuery.sap.log.error(" Stellen:");
			for(i = 0; i < oPath.length; i++) {
				jQuery.sap.log.error("   " + oPath[i].Stelle);
			}
			jQuery.sap.log.error(" filterStellen:");
			for(i = 0; i < aFilterStellen.length; i++) {
				jQuery.sap.log.error("   " + aFilterStellen[i]);
			}
			*/
			for (i = 0; i < oPath.length; i++) { // Enthält aFilterStellen eine der Stellen des Items ?
				var j = 0;
				for (j = 0; j < aFilterStellen.length; j++) {
					jQuery.sap.log.error("  " + aFilterStellen[j] + " == " + oPath[i].Stelle);
					if (aFilterStellen[j] == oPath[i].Stelle) {
						return true;
					}
				}
			}
			return false;
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
			this._oList.getBinding("items").sort(aSorters);
		}

	});

});
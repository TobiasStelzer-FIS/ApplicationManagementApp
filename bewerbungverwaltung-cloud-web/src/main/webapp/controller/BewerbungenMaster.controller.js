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
			var searchFilter;
			var sQuery = oEvent.getParameter("query");
			var oList = this.getView().byId("listBewerbungen");
			jQuery.sap.log.error("list: " + oList);
			var oBinding = oList.getBinding("items");
			jQuery.sap.log.error("Test " + sQuery);

			if (sQuery) {
				aFilter.push(
					new Filter("BewerberDetails/Vorname", FilterOperator.Contains, sQuery),
					new Filter("BewerberDetails/Nachname", FilterOperator.Contains, sQuery)
				);

				searchFilter = new Filter(aFilter, false); // Filter by 'OR'
			}

			oBinding.filter(searchFilter);
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
				aCaptions = [];

			// update filter state:
			// combine the filter array and the filter string
			aFilterItems.forEach(function(oItem) {
				switch (oItem.getKey()) {
					case "Filter1":
						aFilters.push(new Filter("Price", FilterOperator.LE, 100));
						break;
					case "Filter2":
						aFilters.push(new Filter("Price", FilterOperator.GT, 100));
						break;
					default:
						break;
				}
				aCaptions.push(oItem.getText());
			});

			this._oListFilterState.aFilter = aFilters;
			this._updateFilterBar(aCaptions.join(", "));
			this._applyFilterSearch();
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
		}

	});

});
sap.ui.define([
	"de/fis/bewerbungverwaltung/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(BaseController, UIComponent, JSONModel, formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungDetail", {

		formatter: formatter,

		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
/*
			var oModel = new JSONModel({
				fragments: []
			});
			this.getView().setModel(oModel, "sectionModel");
*/
			oRouter.getRoute("BewerbungDetail").attachPatternMatched(this._handleRouteMatched, this);
		},
		_handleRouteMatched: function(oEvent) {
			var sBindingEntity = "testModel>/Bewerbungs/" + oEvent.getParameter("arguments").Bewerbung;

			this._bindView(sBindingEntity);
		},
		_bindView: function(sObjectPath) {
			this.getView().bindElement({
				path: sObjectPath,
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function() {},
					dataReceived: function() {}
				}
			});
		},
		_onBindingChange: function() {
			var oElementBinding = this.getView().getElementBinding("testModel");
			this.getView().getModel("testModel").updateBindings();

			// No data for the binding
			if (!oElementBinding) {
//				this.getRouter().getTargets().display("DetailObjectNotFound");
				this.getRouter().navTo("DetailObjectNotFound");
			}
		},
		onNavButtonPressed: function(oEvent) {
			this.getRouter().navTo("BewerbungenMaster");
		},
		onExit: function() {

		},
		onAfterRendering: function() {

		},
		onBeforeRendering: function() {

		}
/*		
		onBearbeiten: function(oEvent) {
			jQuery.sap.log.error("onBearbeiten");
			var btnId = oEvent.getSource().getId();
			var oView = this.getView();
			var btnId2 = oView.byId("btnDetailsBearbeiten");
			
			jQuery.sap.log.error("oEvent.getSource.getId(): " + btnId);
			jQuery.sap.log.error("btnId2: " + btnId2);
			btnId = "btnDetailsBearbeiten";
			
			switch (btnId) {
				case "btnDetailsBearbeiten":
					var container = oView.byId("containerDetails");
					// Content aus dem container entfernen
					// Fragment "DetailsBearbeiten" zum container hinzufügen
					// btnDetailsEdit unsichtbar machen
					oView.byId("btnDetailsEdit").setVisible(false);
					// btnDetailsSave sichtbar machen
					oView.byId("btnDetailsSave").setVisible(true);
					// btnDetailsCancel sichtbar machen
					oView.byId("btnDetailsCancel").setVisible(true);
					break;
				case "btnKommentareBearbeiten":
					
					break;
				case "btnUnterlagenBearbeiten":
					
					break;
				case "btnUmlaufBearbeiten":
					
					break;
			}

			var oSectionDetails = this.getView().byId("sectionDetails");

			var oBlockAlt = oSectionDetails.getBlocks()[0];
			var oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "de.fis.bewerbungverwaltung.view.fragment." + "DetailsBearbeiten");
			oSectionDetails.addBlock(oFormFragment);

			oSectionDetails.removeBlock(oBlockAlt);

		},
		onSave: function(oEvent) {
			
		},
		onCancel: function(oEvent) {
			
		}
*/
	});

});
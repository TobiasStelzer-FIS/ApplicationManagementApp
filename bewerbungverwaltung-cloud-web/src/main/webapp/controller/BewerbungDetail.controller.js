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

			var oModel = new JSONModel({
				fragments: []
			});
			this.getView().setModel(oModel, "sectionModel");

			oRouter.getRoute("BewerbungDetail").attachPatternMatched(this._handleRouteMatched, this);
		},
		_handleRouteMatched: function(oEvent) {
			var sBindingEntity = "testModel>/Bewerbungs/" + oEvent.getParameter("arguments").Bewerbung;

			this._bindView(sBindingEntity);
		},
		/**
		 * Binds the view to the object path. Makes sure that detail view displays
		 * a busy indicator while data for the corresponding element binding is loaded.
		 * @function
		 * @param {string} sObjectPath path to the object to be bound to the view.
		 * @private
		 */
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
			jQuery.sap.log.error("oElementBinding: " + oElementBinding);
			// No data for the binding
			if (!oElementBinding) {
				this.getRouter().getTargets().display("detailObjectNotFound");
			}
		},
		onNavButtonPressed: function(oEvent) {
			UIComponent.getRouterFor(this).navTo("BewerbungenMaster");
		},
		onExit: function() {

		},
		onAfterRendering: function() {

		},
		onBeforeRendering: function() {

		},
		onSemanticButtonPress: function(oEvent) {
			sap.m.MessageToast.show("onSemanticButtonPress");
		},
		onMessagesButtonPress: function(oEvent) {
			sap.m.MessageToast.show("onMessagesButtonPress");
		},
		/*
				onPositionChange: function(oEvent) {
					var newPosition = oEvent.getParameter("newPosition");
					sap.m.MessageToast.show("Positioned changed to " + newPosition);

					this.getModel("testModel").read("/Bewerbungs/$count", {
						async: true,
						success: function(oData, response) {
							console.log(response.body); //Its a string
							if (newPosition > parseInt(response.body)) {
								newPosition = 0;
							}

							this.getRouter().navTo("BewerbungDetail", {
								Bewerbung: bindingContext.substr(12)
							});
						}
					});
				},
		*/
		onPress: function(oEvent) {
			sap.m.MessageToast.show("onPress");
		},
		onKommentareBearbeiten: function(oEvent) {

		},
		onBearbeiten: function(oEvent) {
			jQuery.sap.log.error("onBearbeiten");
			var btnId = oEvent.getSource().getId();

			switch (btnId) {
				case "btnDetailsBearbeiten":
					
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
		}

	});

});
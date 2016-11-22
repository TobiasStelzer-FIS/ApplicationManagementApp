sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";
	
	return Controller.extend("de.fis.bewerbungverwaltung.controller.BewerbungDetail", {
		
		onInit:function()
		{
			var oRouter = UIComponent.getRouterFor(this);

			oRouter.getRoute("BewerbungDetail").attachPatternMatched(this._handleRouteMatched, this);
		},
		_handleRouteMatched: function (oEvent) {
			var sBindingEntity = "testModel>/Bewerbungs/" + oEvent.getParameter("arguments").Bewerbung;

			this.getView().bindElement(sBindingEntity);
//			this.getView().getModel("testModel").updateBindings(true);
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
		onPositionChange: function(oEvent) {
			sap.m.MessageToast.show("Positioned changed to " + oEvent.getParameter("newPosition"));
		},
		onPress: function(oEvent) {
			sap.m.MessageToast.show("onPress");
		}
		
	});
	
});
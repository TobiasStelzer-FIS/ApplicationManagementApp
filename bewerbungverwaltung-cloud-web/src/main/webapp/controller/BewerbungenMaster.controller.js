sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(Controller, formatter) {
	"use strict";
	
	return Controller.extend("de.fis.bewerbungverwaltung.controller.BewerbungenMaster", {
		
		formatter: formatter,
		
		onInit : function() {

		},
		onExit : function() {

		},
		onAfterRendering : function() {

		},
		onBeforeRendering : function() {

		},
		onBewerbungPressed: function(oEvent) {
			var bindingContext = oEvent.getSource().getBindingContextPath();
			sap.m.MessageToast.show(bindingContext);

			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("BewerbungDetail", {Bewerbung:bindingContext.substr(1)});
		},
		onSemanticSelectChange: function() {
			sap.m.MessageToast.show("onSemanticSelectChange");
		},
		onSemanticButtonPress: function() {
			sap.m.MessageToast.show("onSemanticButtonPress");
		},
		onMultiSelectPress: function() {
			sap.m.MessageToast.show("onMultiSelectPress");
		}
		
	});
	
});
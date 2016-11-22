sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("de.fis.bewerbungverwaltung.controller.BewerbungDetail", {
		
		onInit: function() {
			
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
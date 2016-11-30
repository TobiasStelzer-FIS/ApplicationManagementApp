sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"de/fis/bewerbungverwaltung/model/models",
	"de/fis/bewerbungverwaltung/model/models2"
], function(UIComponent, Device, models, models2) {
	"use strict";

	return UIComponent.extend("de.fis.bewerbungverwaltung.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.setModel(models2.createTestModel(), "testModel");
			
			// initialize router
			this.getRouter().initialize();
		}
	});

});
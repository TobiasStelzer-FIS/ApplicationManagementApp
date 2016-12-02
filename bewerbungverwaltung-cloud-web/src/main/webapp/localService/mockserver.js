sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "https://trial.apim1.hanatrial.ondemand.com:443/p1942281469trial/v1/fis/bewerbungservice/"
			});
			var oUriParameters = jQuery.sap.getUriParameters();
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			// simulate
			var sPath = jQuery.sap.getModulePath("de.fis.bewerbungverwaltung.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			// start
			oMockServer.start();
		}
	};
});
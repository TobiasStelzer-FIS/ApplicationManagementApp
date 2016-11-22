sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createTestModel: function() {
			var oModel = new JSONModel(
					{
						Bewerbers: [
							{
								Vorname: "Ali",
								Nachname: "Ak",
								Postleitzahl: "97493",
								Ort: "Bergrheinfeld",
								Bewerbung: {
									Stellen: [
										{
											Bezeichnung: "Consultant oder Senior Consultant SAP LES/WM (m/w)"
										}, {
											Bezeichnung: "(Junior) Inhouse Consultant für Integrationsprozesse in der IT (m/w)"
										}										
									],
									Status: {
										Bezeichnung: "Offen"
									},
									Datum: "16.11.2016",
									Tage: "5"
								}
							}, {
								Vorname: "Matthias",
								Nachname: "Matrix",
								Postleitzahl: "98377",
								Ort: "Bikini Bottom",
								Bewerbung: {
									Stellen: [
										{
											Bezeichnung: "Inhouse Consultant für Stammdatenlösungen im SAP-Umfeld (m/w)"
										}, {
											Bezeichnung: "Web-Entwickler (m/w)"
										}, {
											Bezeichnung: "SAP-Software-Entwickler/ABAP (m/w)"
										}
									],
									Status: {
										Bezeichnung: "Offen"
									},
									Datum: "01.06.2016",
									Tage: "150"
								}
							}
						]
					});
			
			return oModel;
		}

	};

});
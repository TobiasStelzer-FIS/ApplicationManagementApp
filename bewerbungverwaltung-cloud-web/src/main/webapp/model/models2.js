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
			var oModel = new JSONModel({
				Bewerbungs: 
				[
				{
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 13,
					"BewerbungId": 13,
					"EingetragenAm": "/Date(1479772740000)/",
					"EingetragenVon": "Emil Hermann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 13,
						"Email": "Julian.Schröder@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(605660400000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 188 812777318",
						"Nachname": "Schröder",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "90987",
						"StrasseHnr": "Gabelsbergerstraße 22",
						"Telefonnummer": "0983 6326365",
						"Vorname": "Julian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Abgelehnt",
						"StatusId": 4,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 13,
								"BewerbungStelleId": 17,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(7)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(7)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Stammdatenlösungen im SAP-Umfeld (m/w)",
									"StelleId": 7,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(7)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 13,
								"BewerbungStelleId": 15,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Senior Consultant für SAP MM oder FI mit Projektmanagementerfahrung (m/w)",
									"StelleId": 3,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 13,
								"BewerbungStelleId": 16,
								"Stelle": 6,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(6)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(6)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant für Stammdatenlösungen im SAP-Umfeld (m/w)",
									"StelleId": 6,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(6)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(69)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(69)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 69,
					"BewerbungId": 69,
					"EingetragenAm": "/Date(1450306800000)/",
					"EingetragenVon": "Katrin Hermann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(69)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(69)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 69,
						"Email": "Mia.Koch@gmx.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(454111200000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 176 181124689",
						"Nachname": "Koch",
						"Ort": "Nürnberg",
						"Postleitzahl": "98755",
						"StrasseHnr": "Gabelsbergerstraße 139",
						"Telefonnummer": "0937 103934",
						"Vorname": "Mia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(69)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(69)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(69)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Abgelehnt",
						"StatusId": 4,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(58)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(58)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 58,
					"BewerbungId": 58,
					"EingetragenAm": "/Date(1441317600000)/",
					"EingetragenVon": "Amelie Schröder",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(58)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(58)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 58,
						"Email": "Mia.König@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-99104400000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 148 681589675",
						"Nachname": "König",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "98721",
						"StrasseHnr": "Adenauerring 121",
						"Telefonnummer": "0889 5907045",
						"Vorname": "Mia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(58)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(58)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(58)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Eingeladen",
						"StatusId": 2,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(93)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(93)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 58,
								"BewerbungStelleId": 93,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(93)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Senior Consultant für SAP MM oder FI mit Projektmanagementerfahrung (m/w)",
									"StelleId": 3,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(94)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(94)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 58,
								"BewerbungStelleId": 94,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(94)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Junior Consultant SAP FI (m/w)",
									"StelleId": 13,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(95)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(95)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 58,
								"BewerbungStelleId": 95,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(95)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(18)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(18)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Solution Architect/Presales Consultant für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 18,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(18)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(77)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(77)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 77,
					"BewerbungId": 77,
					"EingetragenAm": "/Date(1443304800000)/",
					"EingetragenVon": "Jonas Mueller",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(77)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(77)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 77,
						"Email": "Amelie.Hartmann@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(483141600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 149 132708285",
						"Nachname": "Hartmann",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "93569",
						"StrasseHnr": "Dehmelstraße 142",
						"Telefonnummer": "0957 1495616",
						"Vorname": "Amelie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(77)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(77)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(77)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(3)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(3)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Eingestellt",
						"StatusId": 3,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(3)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(122)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(122)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 77,
								"BewerbungStelleId": 122,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(122)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "(Junior) Inhouse Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 10,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(123)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(123)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 77,
								"BewerbungStelleId": 123,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(123)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(14)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(14)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant oder Senior Consultant SAP LES/WM (m/w)",
									"StelleId": 14,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(14)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(29)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(29)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 29,
					"BewerbungId": 29,
					"EingetragenAm": "/Date(1425164400000)/",
					"EingetragenVon": "Lina Schneider",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(29)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(29)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 29,
						"Email": "Maximilian.Schneider@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(599353200000)/",
						"Geschlecht": "m",
						"Handynummer": "+47 156 891236990",
						"Nachname": "Schneider",
						"Ort": "Köln",
						"Postleitzahl": "93555",
						"StrasseHnr": "Bayerstraße 48",
						"Telefonnummer": "0882 6329889",
						"Vorname": "Maximilian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(29)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(29)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(29)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Eingeladen",
						"StatusId": 2,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(43)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(43)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 29,
								"BewerbungStelleId": 43,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(43)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Senior Consultant für SAP MM oder FI mit Projektmanagementerfahrung (m/w)",
									"StelleId": 3,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(3)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(44)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(44)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 29,
								"BewerbungStelleId": 44,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(44)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Junior Consultant SAP FI (m/w)",
									"StelleId": 13,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(13)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(98)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(98)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 98,
					"BewerbungId": 98,
					"EingetragenAm": "/Date(1429567200000)/",
					"EingetragenVon": "Sophie Meyer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(98)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(98)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 98,
						"Email": "Marie.Lange@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(32914800000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 144 278960249",
						"Nachname": "Lange",
						"Ort": "Stuttgart",
						"Postleitzahl": "96836",
						"StrasseHnr": "Am Langen Graben 145",
						"Telefonnummer": "0962 633119",
						"Vorname": "Marie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(98)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(98)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(98)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Abgelehnt",
						"StatusId": 4,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(81)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(81)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 81,
					"BewerbungId": 81,
					"EingetragenAm": "/Date(1463608800000)/",
					"EingetragenVon": "Moritz Mustermann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(81)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(81)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 81,
						"Email": "Anna.Lange@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(1017957600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 186 500086562",
						"Nachname": "Lange",
						"Ort": "Hassfurt",
						"Postleitzahl": "82067",
						"StrasseHnr": "Am Langen Graben 110",
						"Telefonnummer": "0887 4184544",
						"Vorname": "Anna",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(81)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(81)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(81)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(1)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(1)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Offen",
						"StatusId": 1,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(1)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(132)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(132)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 81,
								"BewerbungStelleId": 132,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(132)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(19)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(19)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Presales Consultant für SAP-Lösungserweiterungen (m/w)",
									"StelleId": 19,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(19)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(131)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(131)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 81,
								"BewerbungStelleId": 131,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(131)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(1)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(1)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Senior Account Manager Neukundenvertrieb DACH (m/w)",
									"StelleId": 1,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(1)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(35)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(35)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 35,
					"BewerbungId": 35,
					"EingetragenAm": "/Date(1433196000000)/",
					"EingetragenVon": "Noah Jung",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(35)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(35)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 35,
						"Email": "Maximilian.Jung@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(862783200000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 188 379527329",
						"Nachname": "Jung",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "85718",
						"StrasseHnr": "Eglofstraße 55",
						"Telefonnummer": "0852 3150202",
						"Vorname": "Maximilian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(35)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(35)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(35)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Eingeladen",
						"StatusId": 2,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(2)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(28)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(28)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 28,
					"BewerbungId": 28,
					"EingetragenAm": "/Date(1448146800000)/",
					"EingetragenVon": "Lena Schmidt",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(28)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(28)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 28,
						"Email": "Mila.Lehrmann@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(755564400000)/",
						"Geschlecht": "w",
						"Handynummer": "+47 150 979702112",
						"Nachname": "Lehrmann",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "93327",
						"StrasseHnr": "Bayerstraße 7",
						"Telefonnummer": "0856 3800488",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(28)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(28)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(28)/KommentarDetails"
						}
					},
					"StatusDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)",
							"type": "de.fis.bewerbungtest.model.Status"
						},
						"Bezeichnung": "Abgelehnt",
						"StatusId": 4,
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Statuss(4)/BewerbungDetails"
							}
						}
					},
					"BewerbungStelleDetails": {
						"results": [{
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(41)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(41)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 28,
								"BewerbungStelleId": 41,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(41)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "(Junior) Inhouse Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 10,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(10)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(42)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(42)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 28,
								"BewerbungStelleId": 42,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(42)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(12)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(12)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP FI für Grafenrheinfeld, Leonberg oder Offenbach (m/w)",
									"StelleId": 12,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(12)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}
				]
			});
			
			return oModel;
		}
	
	
	
	
	};
	
});
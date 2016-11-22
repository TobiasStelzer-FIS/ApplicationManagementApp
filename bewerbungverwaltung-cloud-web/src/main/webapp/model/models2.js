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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(57)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(57)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 57,
					"BewerbungId": 57,
					"EingetragenAm": "/Date(1446332400000)/",
					"EingetragenVon": "Tom Werner",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(57)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(57)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 57,
						"Email": "Jonas.Schmidt@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-180234000000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 174 686941243",
						"Nachname": "Schmidt",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "93952",
						"StrasseHnr": "Ellingerweg 86",
						"Telefonnummer": "0967 9108266",
						"Vorname": "Jonas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(57)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(57)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(57)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(90)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(90)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 57,
								"BewerbungStelleId": 90,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(90)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(91)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(91)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 57,
								"BewerbungStelleId": 91,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(91)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(92)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(92)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 57,
								"BewerbungStelleId": 92,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(92)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(52)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(52)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 52,
					"BewerbungId": 52,
					"EingetragenAm": "/Date(1432936800000)/",
					"EingetragenVon": "Lea Hartmann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(52)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(52)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 52,
						"Email": "Hannah.Schröder@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(781052400000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 175 229895028",
						"Nachname": "Schröder",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "84648",
						"StrasseHnr": "Baumgartnerstraße 5",
						"Telefonnummer": "0943 3538765",
						"Vorname": "Hannah",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(52)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(52)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(52)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(83)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(83)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 52,
								"BewerbungStelleId": 83,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(83)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(84)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(84)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 52,
								"BewerbungStelleId": 84,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(84)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(82)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(82)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 52,
								"BewerbungStelleId": 82,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(82)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 3,
					"BewerbungId": 3,
					"EingetragenAm": "/Date(1442008800000)/",
					"EingetragenVon": "Theo Schröder",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 3,
						"Email": "Mila.Mueller@aol.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(994024800000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 128 584120176",
						"Nachname": "Mueller",
						"Ort": "München",
						"Postleitzahl": "83094",
						"StrasseHnr": "Goldnesselweg 57",
						"Telefonnummer": "0815 3739480",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 3,
								"BewerbungStelleId": 3,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(66)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(66)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 66,
					"BewerbungId": 66,
					"EingetragenAm": "/Date(1475445600000)/",
					"EingetragenVon": "Moritz Walter",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(66)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(66)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 66,
						"Email": "Tom.Hermann@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(268614000000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 129 879353805",
						"Nachname": "Hermann",
						"Ort": "Würzburg",
						"Postleitzahl": "94923",
						"StrasseHnr": "Gabelsbergerstraße 20",
						"Telefonnummer": "0752 9355514",
						"Vorname": "Tom",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(66)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(66)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(66)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(110)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(110)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 66,
								"BewerbungStelleId": 110,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(110)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 4,
					"BewerbungId": 4,
					"EingetragenAm": "/Date(1429221600000)/",
					"EingetragenVon": "Leon Fischer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 4,
						"Email": "Emma.Hermann@gmx.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(524613600000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 189 433718070",
						"Nachname": "Hermann",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "97589",
						"StrasseHnr": "Hermannstraße 78",
						"Telefonnummer": "0984 9465205",
						"Vorname": "Emma",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 4,
								"BewerbungStelleId": 4,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 4,
								"BewerbungStelleId": 5,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 4,
								"BewerbungStelleId": 6,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(86)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(86)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 86,
					"BewerbungId": 86,
					"EingetragenAm": "/Date(1420758000000)/",
					"EingetragenVon": "Emily Meyer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(86)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(86)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 86,
						"Email": "Jonas.Mueller@gmx.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(726274800000)/",
						"Geschlecht": "m",
						"Handynummer": "+43 168 629714922",
						"Nachname": "Mueller",
						"Ort": "Garstadt",
						"Postleitzahl": "97588",
						"StrasseHnr": "Am Olympiapark 50",
						"Telefonnummer": "0744 9198811",
						"Vorname": "Jonas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(86)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(86)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(86)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(142)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(142)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 86,
								"BewerbungStelleId": 142,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(142)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(141)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(141)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 86,
								"BewerbungStelleId": 141,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(141)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(140)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(140)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 86,
								"BewerbungStelleId": 140,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(140)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(49)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(49)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 49,
					"BewerbungId": 49,
					"EingetragenAm": "/Date(1441663200000)/",
					"EingetragenVon": "Carolin Fischer",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(49)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(49)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 49,
						"Email": "Lukas.Schröder@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(400975200000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 170 205991626",
						"Nachname": "Schröder",
						"Ort": "Hamburg",
						"Postleitzahl": "81319",
						"StrasseHnr": "Havelstraße 110",
						"Telefonnummer": "0716 8804671",
						"Vorname": "Lukas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(49)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(49)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(49)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(78)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(78)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 78,
					"BewerbungId": 78,
					"EingetragenAm": "/Date(1477087200000)/",
					"EingetragenVon": "Tom Mustermann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(78)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(78)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 78,
						"Email": "Lina.Fischer@gmx.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(465084000000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 150 193149717",
						"Nachname": "Fischer",
						"Ort": "Hassfurt",
						"Postleitzahl": "81556",
						"StrasseHnr": "Birkenweg 106",
						"Telefonnummer": "0911 3030400",
						"Vorname": "Lina",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(78)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(78)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(78)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(125)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(125)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 78,
								"BewerbungStelleId": 125,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(125)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(124)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(124)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 78,
								"BewerbungStelleId": 124,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(124)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(126)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(126)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 78,
								"BewerbungStelleId": 126,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(126)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(97)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(97)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 97,
					"BewerbungId": 97,
					"EingetragenAm": "/Date(1467583200000)/",
					"EingetragenVon": "Noah Lange",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(97)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(97)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 97,
						"Email": "Carolin.Zimmermann@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(37839600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 127 485858574",
						"Nachname": "Zimmermann",
						"Ort": "München",
						"Postleitzahl": "89381",
						"StrasseHnr": "Artilleriestraße 29",
						"Telefonnummer": "0948 120642",
						"Vorname": "Carolin",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(97)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(97)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(97)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(156)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(156)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 97,
								"BewerbungStelleId": 156,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(156)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(158)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(158)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 97,
								"BewerbungStelleId": 158,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(158)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(157)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(157)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 97,
								"BewerbungStelleId": 157,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(157)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 10,
					"BewerbungId": 10,
					"EingetragenAm": "/Date(1469570400000)/",
					"EingetragenVon": "Emily Meyer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 10,
						"Email": "Maximilian.Mustermann@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(306284400000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 145 261894026",
						"Nachname": "Mustermann",
						"Ort": "Berlin",
						"Postleitzahl": "84347",
						"StrasseHnr": "Bayerstraße 17",
						"Telefonnummer": "0740 2714364",
						"Vorname": "Maximilian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(89)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(89)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 89,
					"BewerbungId": 89,
					"EingetragenAm": "/Date(1428703200000)/",
					"EingetragenVon": "Emma Walter",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(89)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(89)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 89,
						"Email": "Emma.Koch@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(886806000000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 180 414900522",
						"Nachname": "Koch",
						"Ort": "Berlin",
						"Postleitzahl": "93089",
						"StrasseHnr": "Am Langen Graben 56",
						"Telefonnummer": "0921 7711963",
						"Vorname": "Emma",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(89)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(89)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(89)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 11,
					"BewerbungId": 11,
					"EingetragenAm": "/Date(1438380000000)/",
					"EingetragenVon": "Lia Hartmann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 11,
						"Email": "Leon.Hermann@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-16074000000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 194 484112337",
						"Nachname": "Hermann",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "91176",
						"StrasseHnr": "Artilleriestraße 87",
						"Telefonnummer": "0721 1799499",
						"Vorname": "Leon",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 11,
								"BewerbungStelleId": 14,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 11,
								"BewerbungStelleId": 13,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(67)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(67)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 67,
					"BewerbungId": 67,
					"EingetragenAm": "/Date(1452121200000)/",
					"EingetragenVon": "Julian Lange",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(67)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(67)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 67,
						"Email": "Mila.Zimmermann@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(688258800000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 141 217100458",
						"Nachname": "Zimmermann",
						"Ort": "Hamburg",
						"Postleitzahl": "96972",
						"StrasseHnr": "Dehmelstraße 131",
						"Telefonnummer": "0841 3374271",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(67)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(67)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(67)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(111)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(111)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 67,
								"BewerbungStelleId": 111,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(111)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(46)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(46)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 46,
					"BewerbungId": 46,
					"EingetragenAm": "/Date(1420239600000)/",
					"EingetragenVon": "Carolin Werner",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(46)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(46)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 46,
						"Email": "Maximilian.Schmidt@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(356997600000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 187 117995750",
						"Nachname": "Schmidt",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "93001",
						"StrasseHnr": "Bayerstraße 52",
						"Telefonnummer": "0740 2195433",
						"Vorname": "Maximilian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(46)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(46)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(46)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(72)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(72)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 72,
					"BewerbungId": 72,
					"EingetragenAm": "/Date(1443304800000)/",
					"EingetragenVon": "Elisabeth Mustermann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(72)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(72)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 72,
						"Email": "Noah.Koch@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(808092000000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 136 64965757",
						"Nachname": "Koch",
						"Ort": "Hergolshausen",
						"Postleitzahl": "91621",
						"StrasseHnr": "Adenauerring 91",
						"Telefonnummer": "0953 3058000",
						"Vorname": "Noah",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(72)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(72)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(72)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(116)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(116)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 72,
								"BewerbungStelleId": 116,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(116)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(117)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(117)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 72,
								"BewerbungStelleId": 117,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(117)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(88)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(88)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 88,
					"BewerbungId": 88,
					"EingetragenAm": "/Date(1473804000000)/",
					"EingetragenVon": "Amelie Hartmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(88)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(88)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 88,
						"Email": "Maximilian.Meyer@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(644364000000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 164 778917884",
						"Nachname": "Meyer",
						"Ort": "Heidelberg",
						"Postleitzahl": "94131",
						"StrasseHnr": "Am Langen Graben 124",
						"Telefonnummer": "0941 7581399",
						"Vorname": "Maximilian",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(88)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(88)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(88)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(143)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(143)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 88,
								"BewerbungStelleId": 143,
								"Stelle": 6,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(143)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(73)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(73)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 73,
					"BewerbungId": 73,
					"EingetragenAm": "/Date(1471730400000)/",
					"EingetragenVon": "Lia König",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(73)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(73)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 73,
						"Email": "Leon.Hartmann@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(667004400000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 141 87616630",
						"Nachname": "Hartmann",
						"Ort": "Hassfurt",
						"Postleitzahl": "89970",
						"StrasseHnr": "Eglofstraße 77",
						"Telefonnummer": "0780 2413248",
						"Vorname": "Leon",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(73)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(73)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(73)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(118)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(118)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 73,
								"BewerbungStelleId": 118,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(118)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(91)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(91)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 91,
					"BewerbungId": 91,
					"EingetragenAm": "/Date(1470520800000)/",
					"EingetragenVon": "Lia Schneider",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(91)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(91)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 91,
						"Email": "Elisabeth.Schmidt@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-99104400000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 139 443706533",
						"Nachname": "Schmidt",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "83062",
						"StrasseHnr": "Havelstraße 64",
						"Telefonnummer": "0811 3409385",
						"Vorname": "Elisabeth",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(91)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(91)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(91)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(148)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(148)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 91,
								"BewerbungStelleId": 148,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(148)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(147)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(147)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 91,
								"BewerbungStelleId": 147,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(147)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(146)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(146)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 91,
								"BewerbungStelleId": 146,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(146)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(27)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(27)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 27,
					"BewerbungId": 27,
					"EingetragenAm": "/Date(1453417200000)/",
					"EingetragenVon": "Leonie Mueller",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(27)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(27)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 27,
						"Email": "Anna.Lange@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(661474800000)/",
						"Geschlecht": "w",
						"Handynummer": "+47 172 839066083",
						"Nachname": "Lange",
						"Ort": "Berlin",
						"Postleitzahl": "91716",
						"StrasseHnr": "Hermannstraße 28",
						"Telefonnummer": "0715 857267",
						"Vorname": "Anna",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(27)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(27)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(27)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(40)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(40)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 27,
								"BewerbungStelleId": 40,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(40)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(39)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(39)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 27,
								"BewerbungStelleId": 39,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(39)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(38)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(38)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 27,
								"BewerbungStelleId": 38,
								"Stelle": 6,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(38)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(34)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(34)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 34,
					"BewerbungId": 34,
					"EingetragenAm": "/Date(1443132000000)/",
					"EingetragenVon": "Lena Schröder",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(34)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(34)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 34,
						"Email": "Alexander.Jung@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(35766000000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 137 77748613",
						"Nachname": "Jung",
						"Ort": "Hamburg",
						"Postleitzahl": "85606",
						"StrasseHnr": "Havelstraße 37",
						"Telefonnummer": "0722 4439233",
						"Vorname": "Alexander",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(34)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(34)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(34)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(52)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(52)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 34,
								"BewerbungStelleId": 52,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(52)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(53)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(53)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 34,
								"BewerbungStelleId": 53,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(53)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(96)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(96)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 96,
					"BewerbungId": 96,
					"EingetragenAm": "/Date(1468706400000)/",
					"EingetragenVon": "Maximilian Mustermann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(96)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(96)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 96,
						"Email": "Lara.Lehrmann@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(970869600000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 131 411519665",
						"Nachname": "Lehrmann",
						"Ort": "Hamburg",
						"Postleitzahl": "93185",
						"StrasseHnr": "Birkenweg 49",
						"Telefonnummer": "0962 735694",
						"Vorname": "Lara",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(96)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(96)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(96)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(153)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(153)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 96,
								"BewerbungStelleId": 153,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(153)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(155)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(155)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 96,
								"BewerbungStelleId": 155,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(155)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(154)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(154)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 96,
								"BewerbungStelleId": 154,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(154)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(93)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(93)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 93,
					"BewerbungId": 93,
					"EingetragenAm": "/Date(1433973600000)/",
					"EingetragenVon": "Katrin Schröder",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(93)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(93)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 93,
						"Email": "Theo.Hofmann@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(180572400000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 193 630673326",
						"Nachname": "Hofmann",
						"Ort": "München",
						"Postleitzahl": "94424",
						"StrasseHnr": "Aachener Straße 113",
						"Telefonnummer": "0852 2452950",
						"Vorname": "Theo",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(93)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(93)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(93)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(149)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(149)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 93,
								"BewerbungStelleId": 149,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(149)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 15,
					"BewerbungId": 15,
					"EingetragenAm": "/Date(1469052000000)/",
					"EingetragenVon": "Sophia Hartmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 15,
						"Email": "Emily.Jung@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(553471200000)/",
						"Geschlecht": "w",
						"Handynummer": "+47 126 738497409",
						"Nachname": "Jung",
						"Ort": "Hamburg",
						"Postleitzahl": "90270",
						"StrasseHnr": "Birkenweg 138",
						"Telefonnummer": "0916 5600271",
						"Vorname": "Emily",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 15,
								"BewerbungStelleId": 18,
								"Stelle": 4,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP CO (m/w)",
									"StelleId": 4,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 15,
								"BewerbungStelleId": 19,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 15,
								"BewerbungStelleId": 20,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(56)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(56)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 56,
					"BewerbungId": 56,
					"EingetragenAm": "/Date(1470520800000)/",
					"EingetragenVon": "Sophia Mustermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(56)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(56)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 56,
						"Email": "Carolin.Hermann@gmx.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-217386000000)/",
						"Geschlecht": "w",
						"Handynummer": "+43 180 167576861",
						"Nachname": "Hermann",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "95837",
						"StrasseHnr": "Eglofstraße 102",
						"Telefonnummer": "0719 4724449",
						"Vorname": "Carolin",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(56)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(56)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(56)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(89)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(89)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 56,
								"BewerbungStelleId": 89,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(89)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(88)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(88)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 56,
								"BewerbungStelleId": 88,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(88)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(74)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(74)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 74,
					"BewerbungId": 74,
					"EingetragenAm": "/Date(1451775600000)/",
					"EingetragenVon": "Hannah Hofmann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(74)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(74)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 74,
						"Email": "Anton.Mustermann@gmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(514072800000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 153 752441030",
						"Nachname": "Mustermann",
						"Ort": "Hassfurt",
						"Postleitzahl": "93181",
						"StrasseHnr": "Hermannstraße 14",
						"Telefonnummer": "0963 8290074",
						"Vorname": "Anton",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(74)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(74)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(74)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(119)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(119)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 74,
								"BewerbungStelleId": 119,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(119)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(120)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(120)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 74,
								"BewerbungStelleId": 120,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(120)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(50)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(50)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 50,
					"BewerbungId": 50,
					"EingetragenAm": "/Date(1434060000000)/",
					"EingetragenVon": "Mia Hofmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(50)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(50)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 50,
						"Email": "Finn.Schröder@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-222051600000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 169 787162353",
						"Nachname": "Schröder",
						"Ort": "Schweinfurt",
						"Postleitzahl": "88248",
						"StrasseHnr": "Ellingerweg 91",
						"Telefonnummer": "0971 8356675",
						"Vorname": "Finn",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(50)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(50)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(50)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(77)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(77)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 50,
								"BewerbungStelleId": 77,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(77)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(76)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(76)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 50,
								"BewerbungStelleId": 76,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(76)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(78)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(78)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 50,
								"BewerbungStelleId": 78,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(78)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 12,
					"BewerbungId": 12,
					"EingetragenAm": "/Date(1465164000000)/",
					"EingetragenVon": "Luisa Hermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 12,
						"Email": "Tom.Meyer@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(807400800000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 138 541106075",
						"Nachname": "Meyer",
						"Ort": "Garstadt",
						"Postleitzahl": "96459",
						"StrasseHnr": "Ellingerweg 59",
						"Telefonnummer": "0900 7483483",
						"Vorname": "Tom",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(90)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(90)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 90,
					"BewerbungId": 90,
					"EingetragenAm": "/Date(1435442400000)/",
					"EingetragenVon": "Finn Koch",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(90)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(90)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 90,
						"Email": "Katrin.Walter@gmx.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(629161200000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 147 464756296",
						"Nachname": "Walter",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "89525",
						"StrasseHnr": "Havelstraße 60",
						"Telefonnummer": "0890 3487835",
						"Vorname": "Katrin",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(90)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(90)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(90)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(145)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(145)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 90,
								"BewerbungStelleId": 145,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(145)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(144)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(144)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 90,
								"BewerbungStelleId": 144,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(144)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(48)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(48)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 48,
					"BewerbungId": 48,
					"EingetragenAm": "/Date(1421967600000)/",
					"EingetragenVon": "Lea Schröder",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(48)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(48)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 48,
						"Email": "Jonas.Meyer@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-118717200000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 194 616722993",
						"Nachname": "Meyer",
						"Ort": "Würzburg",
						"Postleitzahl": "89001",
						"StrasseHnr": "Dehmelstraße 141",
						"Telefonnummer": "0883 8187208",
						"Vorname": "Jonas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(48)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(48)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(48)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(75)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(75)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 48,
								"BewerbungStelleId": 75,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(75)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(33)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(33)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 33,
					"BewerbungId": 33,
					"EingetragenAm": "/Date(1469138400000)/",
					"EingetragenVon": "Lina Meyer",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(33)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(33)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 33,
						"Email": "Mila.Zimmermann@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-188701200000)/",
						"Geschlecht": "w",
						"Handynummer": "+43 194 915795985",
						"Nachname": "Zimmermann",
						"Ort": "Hamburg",
						"Postleitzahl": "96477",
						"StrasseHnr": "Canalettostraße 9",
						"Telefonnummer": "0874 7016878",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(33)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(33)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(33)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(51)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(51)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 33,
								"BewerbungStelleId": 51,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(51)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(50)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(50)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 33,
								"BewerbungStelleId": 50,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(50)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(21)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(21)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 21,
					"BewerbungId": 21,
					"EingetragenAm": "/Date(1434924000000)/",
					"EingetragenVon": "Anton Jung",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(21)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(21)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 21,
						"Email": "Emma.Fischer@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-298256400000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 125 689841786",
						"Nachname": "Fischer",
						"Ort": "Hassfurt",
						"Postleitzahl": "82277",
						"StrasseHnr": "Bayerstraße 9",
						"Telefonnummer": "0975 1059072",
						"Vorname": "Emma",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(21)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(21)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(21)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(30)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(30)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 21,
								"BewerbungStelleId": 30,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(30)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 9,
					"BewerbungId": 9,
					"EingetragenAm": "/Date(1455490800000)/",
					"EingetragenVon": "Amelie Koch",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 9,
						"Email": "Noah.Walter@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(878684400000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 185 920221232",
						"Nachname": "Walter",
						"Ort": "Stuttgart",
						"Postleitzahl": "84715",
						"StrasseHnr": "Dehmelstraße 121",
						"Telefonnummer": "0966 2891167",
						"Vorname": "Noah",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 9,
								"BewerbungStelleId": 12,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 9,
								"BewerbungStelleId": 10,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 9,
								"BewerbungStelleId": 11,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(75)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(75)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 75,
					"BewerbungId": 75,
					"EingetragenAm": "/Date(1429048800000)/",
					"EingetragenVon": "Julia König",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(75)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(75)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 75,
						"Email": "Luisa.Werner@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-35600400000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 137 31995496",
						"Nachname": "Werner",
						"Ort": "Frankfurt",
						"Postleitzahl": "82518",
						"StrasseHnr": "Feigstraße 38",
						"Telefonnummer": "0762 9553290",
						"Vorname": "Luisa",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(75)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(75)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(75)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(44)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(44)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 44,
					"BewerbungId": 44,
					"EingetragenAm": "/Date(1425769200000)/",
					"EingetragenVon": "Stefanie Walter",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(44)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(44)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 44,
						"Email": "Mila.Werner@gmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(83458800000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 198 438143381",
						"Nachname": "Werner",
						"Ort": "Nürnberg",
						"Postleitzahl": "88246",
						"StrasseHnr": "Ackermannstraße 139",
						"Telefonnummer": "0889 7280115",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(44)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(44)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(44)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(68)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(68)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 44,
								"BewerbungStelleId": 68,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(68)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(69)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(69)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 44,
								"BewerbungStelleId": 69,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(69)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(17)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(17)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 17,
					"BewerbungId": 17,
					"EingetragenAm": "/Date(1444082400000)/",
					"EingetragenVon": "Lena Lange",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(17)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(17)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 17,
						"Email": "Lea.Mueller@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-72061200000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 171 96042577",
						"Nachname": "Mueller",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "94911",
						"StrasseHnr": "Fontanestraße 76",
						"Telefonnummer": "0816 8511671",
						"Vorname": "Lea",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(17)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(17)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(17)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 17,
								"BewerbungStelleId": 24,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(68)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(68)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 68,
					"BewerbungId": 68,
					"EingetragenAm": "/Date(1462226400000)/",
					"EingetragenVon": "Mia Schröder",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(68)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(68)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 68,
						"Email": "Luca.Mueller@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(367884000000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 167 5992849",
						"Nachname": "Mueller",
						"Ort": "Gerolzhofen",
						"Postleitzahl": "92280",
						"StrasseHnr": "Akademiestraße 35",
						"Telefonnummer": "0742 1227977",
						"Vorname": "Luca",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(68)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(68)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(68)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(113)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(113)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 68,
								"BewerbungStelleId": 113,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(113)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(112)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(112)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 68,
								"BewerbungStelleId": 112,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(112)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(95)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(95)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 95,
					"BewerbungId": 95,
					"EingetragenAm": "/Date(1449097200000)/",
					"EingetragenVon": "Elisabeth Jung",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(95)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(95)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 95,
						"Email": "Lina.Werner@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-160880400000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 190 778416033",
						"Nachname": "Werner",
						"Ort": "Berlin",
						"Postleitzahl": "87380",
						"StrasseHnr": "Artilleriestraße 94",
						"Telefonnummer": "0923 2209852",
						"Vorname": "Lina",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(95)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(95)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(95)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(150)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(150)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 95,
								"BewerbungStelleId": 150,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(150)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(152)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(152)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 95,
								"BewerbungStelleId": 152,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(152)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(151)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(151)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 95,
								"BewerbungStelleId": 151,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(151)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(16)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(16)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 16,
					"BewerbungId": 16,
					"EingetragenAm": "/Date(1466460000000)/",
					"EingetragenVon": "Katrin König",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(16)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(16)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 16,
						"Email": "Lara.Lehrmann@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(239065200000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 173 43509923",
						"Nachname": "Lehrmann",
						"Ort": "Garstadt",
						"Postleitzahl": "96601",
						"StrasseHnr": "Bayerstraße 130",
						"Telefonnummer": "0984 5028573",
						"Vorname": "Lara",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(16)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(16)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(16)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 16,
								"BewerbungStelleId": 23,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 16,
								"BewerbungStelleId": 21,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 16,
								"BewerbungStelleId": 22,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(22)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(22)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 22,
					"BewerbungId": 22,
					"EingetragenAm": "/Date(1455836400000)/",
					"EingetragenVon": "Moritz Mueller",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(22)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(22)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 22,
						"Email": "Lia.Schmidt@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(599266800000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 145 191767816",
						"Nachname": "Schmidt",
						"Ort": "Köln",
						"Postleitzahl": "86273",
						"StrasseHnr": "Am Olympiapark 62",
						"Telefonnummer": "0813 1076047",
						"Vorname": "Lia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(22)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(22)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(22)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(31)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(31)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 22,
								"BewerbungStelleId": 31,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(31)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(32)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(32)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 22,
								"BewerbungStelleId": 32,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(32)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(70)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(70)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 70,
					"BewerbungId": 70,
					"EingetragenAm": "/Date(1482274800000)/",
					"EingetragenVon": "Sophie Fischer",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(70)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(70)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 70,
						"Email": "Anton.Walter@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(354924000000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 160 523476240",
						"Nachname": "Walter",
						"Ort": "Garstadt",
						"Postleitzahl": "93990",
						"StrasseHnr": "Am Olympiapark 26",
						"Telefonnummer": "0930 7676166",
						"Vorname": "Anton",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(70)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(70)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(70)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(114)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(114)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 70,
								"BewerbungStelleId": 114,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(114)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(20)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(20)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 20,
					"BewerbungId": 20,
					"EingetragenAm": "/Date(1457823600000)/",
					"EingetragenVon": "Emily Lehrmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(20)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(20)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 20,
						"Email": "Sophia.Fischer@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(250470000000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 127 184828036",
						"Nachname": "Fischer",
						"Ort": "Gerolzhofen",
						"Postleitzahl": "90601",
						"StrasseHnr": "Ackermannstraße 139",
						"Telefonnummer": "0871 9266145",
						"Vorname": "Sophia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(20)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(20)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(20)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(79)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(79)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 79,
					"BewerbungId": 79,
					"EingetragenAm": "/Date(1475272800000)/",
					"EingetragenVon": "David Walter",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(79)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(79)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 79,
						"Email": "Elias.Fischer@gmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-254192400000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 143 601226347",
						"Nachname": "Fischer",
						"Ort": "Hassfurt",
						"Postleitzahl": "81291",
						"StrasseHnr": "Akademiestraße 46",
						"Telefonnummer": "0967 8534007",
						"Vorname": "Elias",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(79)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(79)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(79)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(127)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(127)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 79,
								"BewerbungStelleId": 127,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(127)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(31)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(31)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 31,
					"BewerbungId": 31,
					"EingetragenAm": "/Date(1455836400000)/",
					"EingetragenVon": "Julia Hartmann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(31)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(31)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 31,
						"Email": "Sophie.Hartmann@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(498438000000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 133 652384431",
						"Nachname": "Hartmann",
						"Ort": "Hergolshausen",
						"Postleitzahl": "92670",
						"StrasseHnr": "Eglofstraße 11",
						"Telefonnummer": "0772 9242863",
						"Vorname": "Sophie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(31)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(31)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(31)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(46)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(46)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 31,
								"BewerbungStelleId": 46,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(46)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(19)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(19)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 19,
					"BewerbungId": 19,
					"EingetragenAm": "/Date(1471644000000)/",
					"EingetragenVon": "Julian Meyer",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(19)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(19)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 19,
						"Email": "Leonie.Hofmann@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(224636400000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 172 976406358",
						"Nachname": "Hofmann",
						"Ort": "Hergolshausen",
						"Postleitzahl": "86724",
						"StrasseHnr": "Eglofstraße 8",
						"Telefonnummer": "0792 3487741",
						"Vorname": "Leonie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(19)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(19)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(19)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(28)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(28)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 19,
								"BewerbungStelleId": 28,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(28)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(29)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(29)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 19,
								"BewerbungStelleId": 29,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(29)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 5,
					"BewerbungId": 5,
					"EingetragenAm": "/Date(1459807200000)/",
					"EingetragenVon": "Lena Schmidt",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 5,
						"Email": "Amelie.Werner@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(929311200000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 172 428256465",
						"Nachname": "Werner",
						"Ort": "Nürnberg",
						"Postleitzahl": "93187",
						"StrasseHnr": "Aachener Straße 49",
						"Telefonnummer": "0805 4881896",
						"Vorname": "Amelie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 5,
								"BewerbungStelleId": 8,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 5,
								"BewerbungStelleId": 7,
								"Stelle": 6,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(84)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(84)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 84,
					"BewerbungId": 84,
					"EingetragenAm": "/Date(1434319200000)/",
					"EingetragenVon": "Julian Meyer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(84)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(84)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 84,
						"Email": "Ben.Schmidt@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(122598000000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 170 254199758",
						"Nachname": "Schmidt",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "84209",
						"StrasseHnr": "Am Olympiapark 44",
						"Telefonnummer": "0716 4095732",
						"Vorname": "Ben",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(84)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(84)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(84)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(39)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(39)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 39,
					"BewerbungId": 39,
					"EingetragenAm": "/Date(1437084000000)/",
					"EingetragenVon": "Finn Mueller",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(39)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(39)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 39,
						"Email": "Emilia.Hofmann@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(136162800000)/",
						"Geschlecht": "w",
						"Handynummer": "+47 167 585963145",
						"Nachname": "Hofmann",
						"Ort": "Köln",
						"Postleitzahl": "81275",
						"StrasseHnr": "Artilleriestraße 102",
						"Telefonnummer": "0746 2160792",
						"Vorname": "Emilia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(39)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(39)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(39)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(61)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(61)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 39,
								"BewerbungStelleId": 61,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(61)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(62)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(62)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 39,
								"BewerbungStelleId": 62,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(62)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(51)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(51)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 51,
					"BewerbungId": 51,
					"EingetragenAm": "/Date(1465077600000)/",
					"EingetragenVon": "Lara Lehrmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(51)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(51)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 51,
						"Email": "Milan.Mueller@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(304988400000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 153 487618512",
						"Nachname": "Mueller",
						"Ort": "Stuttgart",
						"Postleitzahl": "95626",
						"StrasseHnr": "Ellingerweg 91",
						"Telefonnummer": "0851 558613",
						"Vorname": "Milan",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(51)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(51)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(51)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(80)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(80)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 51,
								"BewerbungStelleId": 80,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(80)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(81)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(81)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 51,
								"BewerbungStelleId": 81,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(81)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(79)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(79)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 51,
								"BewerbungStelleId": 79,
								"Stelle": 4,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(79)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP CO (m/w)",
									"StelleId": 4,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(87)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(87)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 87,
					"BewerbungId": 87,
					"EingetragenAm": "/Date(1473890400000)/",
					"EingetragenVon": "Lena König",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(87)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(87)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 87,
						"Email": "Sophie.König@aol.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(116636400000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 168 58473302",
						"Nachname": "König",
						"Ort": "Garstadt",
						"Postleitzahl": "85158",
						"StrasseHnr": "Ellingerweg 86",
						"Telefonnummer": "0973 7137225",
						"Vorname": "Sophie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(87)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(87)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(87)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(23)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(23)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 23,
					"BewerbungId": 23,
					"EingetragenAm": "/Date(1463349600000)/",
					"EingetragenVon": "Emilia Koch",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(23)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(23)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 23,
						"Email": "Sophie.Lange@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(266454000000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 183 949642055",
						"Nachname": "Lange",
						"Ort": "Hamburg",
						"Postleitzahl": "97573",
						"StrasseHnr": "Akademiestraße 139",
						"Telefonnummer": "0954 9191452",
						"Vorname": "Sophie",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(23)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(23)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(23)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(33)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(33)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 23,
								"BewerbungStelleId": 33,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(33)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(34)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(34)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 23,
								"BewerbungStelleId": 34,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(34)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(18)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(18)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 18,
					"BewerbungId": 18,
					"EingetragenAm": "/Date(1457391600000)/",
					"EingetragenVon": "Sophia Jung",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(18)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(18)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 18,
						"Email": "Lina.Fischer@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-159843600000)/",
						"Geschlecht": "w",
						"Handynummer": "+43 142 970629488",
						"Nachname": "Fischer",
						"Ort": "Hergolshausen",
						"Postleitzahl": "91129",
						"StrasseHnr": "Gabelsbergerstraße 82",
						"Telefonnummer": "0852 5725820",
						"Vorname": "Lina",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(18)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(18)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(18)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 18,
								"BewerbungStelleId": 26,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 18,
								"BewerbungStelleId": 25,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(27)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(27)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 18,
								"BewerbungStelleId": 27,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(27)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(65)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(65)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 65,
					"BewerbungId": 65,
					"EingetragenAm": "/Date(1470434400000)/",
					"EingetragenVon": "Katrin Mueller",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(65)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(65)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 65,
						"Email": "Emil.Schmidt@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(294966000000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 168 462995432",
						"Nachname": "Schmidt",
						"Ort": "Köln",
						"Postleitzahl": "87701",
						"StrasseHnr": "Bayerstraße 100",
						"Telefonnummer": "0979 2868850",
						"Vorname": "Emil",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(65)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(65)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(65)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(109)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(109)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 65,
								"BewerbungStelleId": 109,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(109)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(107)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(107)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 65,
								"BewerbungStelleId": 107,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(107)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(108)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(108)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 65,
								"BewerbungStelleId": 108,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(108)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 1,
					"BewerbungId": 1,
					"EingetragenAm": "/Date(1424818800000)/",
					"EingetragenVon": "Luca Meyer",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 1,
						"Email": "Julia.König@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(165193200000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 182 303673494",
						"Nachname": "König",
						"Ort": "München",
						"Postleitzahl": "85674",
						"StrasseHnr": "Goldnesselweg 96",
						"Telefonnummer": "0926 779412",
						"Vorname": "Julia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(82)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(82)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 82,
					"BewerbungId": 82,
					"EingetragenAm": "/Date(1473372000000)/",
					"EingetragenVon": "Luca Schneider",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(82)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(82)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 82,
						"Email": "Lukas.Fischer@web.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(761007600000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 130 10911249",
						"Nachname": "Fischer",
						"Ort": "Köln",
						"Postleitzahl": "85873",
						"StrasseHnr": "Artilleriestraße 102",
						"Telefonnummer": "0721 2769631",
						"Vorname": "Lukas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(82)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(82)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(82)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(133)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(133)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 82,
								"BewerbungStelleId": 133,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(133)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(134)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(134)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 82,
								"BewerbungStelleId": 134,
								"Stelle": 6,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(134)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(135)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(135)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 82,
								"BewerbungStelleId": 135,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(135)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(37)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(37)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 37,
					"BewerbungId": 37,
					"EingetragenAm": "/Date(1442527200000)/",
					"EingetragenVon": "Emilia Hartmann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(37)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(37)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 37,
						"Email": "Lia.Werner@gmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-43030800000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 185 77823495",
						"Nachname": "Werner",
						"Ort": "Berlin",
						"Postleitzahl": "98552",
						"StrasseHnr": "Birkenweg 70",
						"Telefonnummer": "0848 6193949",
						"Vorname": "Lia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(37)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(37)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(37)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(56)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(56)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 37,
								"BewerbungStelleId": 56,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(56)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(58)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(58)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 37,
								"BewerbungStelleId": 58,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(58)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(57)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(57)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 37,
								"BewerbungStelleId": 57,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(57)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(40)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(40)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 40,
					"BewerbungId": 40,
					"EingetragenAm": "/Date(1445119200000)/",
					"EingetragenVon": "Mila Koch",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(40)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(40)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 40,
						"Email": "Lina.Schneider@gmx.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(832456800000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 155 274895124",
						"Nachname": "Schneider",
						"Ort": "Heidelberg",
						"Postleitzahl": "86130",
						"StrasseHnr": "Havelstraße 134",
						"Telefonnummer": "0898 3082124",
						"Vorname": "Lina",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(40)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(40)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(40)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(32)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(32)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 32,
					"BewerbungId": 32,
					"EingetragenAm": "/Date(1453244400000)/",
					"EingetragenVon": "Amelie Werner",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(32)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(32)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 32,
						"Email": "Lina.Hofmann@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(99356400000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 183 584687755",
						"Nachname": "Hofmann",
						"Ort": "Frankfurt",
						"Postleitzahl": "98429",
						"StrasseHnr": "Eglofstraße 54",
						"Telefonnummer": "0934 2909755",
						"Vorname": "Lina",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(32)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(32)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(32)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(48)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(48)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 32,
								"BewerbungStelleId": 48,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(48)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(49)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(49)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 32,
								"BewerbungStelleId": 49,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(49)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(47)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(47)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 32,
								"BewerbungStelleId": 47,
								"Stelle": 3,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(47)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(61)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(61)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 61,
					"BewerbungId": 61,
					"EingetragenAm": "/Date(1478127600000)/",
					"EingetragenVon": "Anton Hartmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(61)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(61)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 61,
						"Email": "Luca.Schmidt@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(267577200000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 133 378260816",
						"Nachname": "Schmidt",
						"Ort": "Würzburg",
						"Postleitzahl": "88367",
						"StrasseHnr": "Goldnesselweg 32",
						"Telefonnummer": "0956 8178565",
						"Vorname": "Luca",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(61)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(61)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(61)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(100)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(100)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 61,
								"BewerbungStelleId": 100,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(100)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(99)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(99)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 61,
								"BewerbungStelleId": 99,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(99)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(101)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(101)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 61,
								"BewerbungStelleId": 101,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(101)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(83)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(83)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 83,
					"BewerbungId": 83,
					"EingetragenAm": "/Date(1450652400000)/",
					"EingetragenVon": "Mia Lange",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(83)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(83)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 83,
						"Email": "Mia.Koch@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(1002232800000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 190 463131507",
						"Nachname": "Koch",
						"Ort": "Berlin",
						"Postleitzahl": "83078",
						"StrasseHnr": "Am Olympiapark 45",
						"Telefonnummer": "0758 4524535",
						"Vorname": "Mia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(83)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(83)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(83)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(136)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(136)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 83,
								"BewerbungStelleId": 136,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(136)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(63)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(63)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 63,
					"BewerbungId": 63,
					"EingetragenAm": "/Date(1426892400000)/",
					"EingetragenVon": "Anna Schneider",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(63)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(63)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 63,
						"Email": "Linus.Koch@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(664153200000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 136 954546747",
						"Nachname": "Koch",
						"Ort": "Berlin",
						"Postleitzahl": "90528",
						"StrasseHnr": "Goldnesselweg 145",
						"Telefonnummer": "0721 632503",
						"Vorname": "Linus",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(63)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(63)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(63)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(104)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(104)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 63,
								"BewerbungStelleId": 104,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(104)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(47)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(47)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 47,
					"BewerbungId": 47,
					"EingetragenAm": "/Date(1474668000000)/",
					"EingetragenVon": "Linus Lehrmann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(47)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(47)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 47,
						"Email": "Luca.König@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-166150800000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 177 175984052",
						"Nachname": "König",
						"Ort": "Nürnberg",
						"Postleitzahl": "87174",
						"StrasseHnr": "Gabelsbergerstraße 49",
						"Telefonnummer": "0850 2494422",
						"Vorname": "Luca",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(47)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(47)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(47)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(73)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(73)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 47,
								"BewerbungStelleId": 73,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(73)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(74)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(74)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 47,
								"BewerbungStelleId": 74,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(74)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(60)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(60)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 60,
					"BewerbungId": 60,
					"EingetragenAm": "/Date(1452726000000)/",
					"EingetragenVon": "Amelie Hofmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(60)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(60)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 60,
						"Email": "Luca.Schmidt@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(569545200000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 185 359310205",
						"Nachname": "Schmidt",
						"Ort": "Hamburg",
						"Postleitzahl": "98152",
						"StrasseHnr": "Havelstraße 129",
						"Telefonnummer": "0789 2200297",
						"Vorname": "Luca",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(60)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(60)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(60)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(98)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(98)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 60,
								"BewerbungStelleId": 98,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(98)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 6,
					"BewerbungId": 6,
					"EingetragenAm": "/Date(1420498800000)/",
					"EingetragenVon": "Mila Jung",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 6,
						"Email": "Leon.Schröder@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(368748000000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 129 423793788",
						"Nachname": "Schröder",
						"Ort": "Gerolzhofen",
						"Postleitzahl": "95422",
						"StrasseHnr": "Ackermannstraße 121",
						"Telefonnummer": "0771 3609044",
						"Vorname": "Leon",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(54)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(54)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 54,
					"BewerbungId": 54,
					"EingetragenAm": "/Date(1453503600000)/",
					"EingetragenVon": "Milan Mustermann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(54)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(54)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 54,
						"Email": "Tom.Schneider@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-314845200000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 149 376922041",
						"Nachname": "Schneider",
						"Ort": "Garstadt",
						"Postleitzahl": "95867",
						"StrasseHnr": "Birkenweg 67",
						"Telefonnummer": "0904 8740688",
						"Vorname": "Tom",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(54)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(54)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(54)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(43)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(43)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 43,
					"BewerbungId": 43,
					"EingetragenAm": "/Date(1436133600000)/",
					"EingetragenVon": "Hannah Fischer",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(43)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(43)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 43,
						"Email": "Emily.Jung@aol.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(72572400000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 149 798454399",
						"Nachname": "Jung",
						"Ort": "Hergolshausen",
						"Postleitzahl": "97004",
						"StrasseHnr": "Hermannstraße 28",
						"Telefonnummer": "0913 2129532",
						"Vorname": "Emily",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(43)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(43)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(43)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(67)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(67)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 43,
								"BewerbungStelleId": 67,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(67)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(45)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(45)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 45,
					"BewerbungId": 45,
					"EingetragenAm": "/Date(1469138400000)/",
					"EingetragenVon": "Sophia Zimmermann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(45)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(45)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 45,
						"Email": "Mila.Lange@gmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(844207200000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 193 11759628",
						"Nachname": "Lange",
						"Ort": "Nürnberg",
						"Postleitzahl": "96618",
						"StrasseHnr": "Havelstraße 46",
						"Telefonnummer": "0818 7178286",
						"Vorname": "Mila",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(45)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(45)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(45)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(71)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(71)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 45,
								"BewerbungStelleId": 71,
								"Stelle": 13,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(71)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(72)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(72)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 45,
								"BewerbungStelleId": 72,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(72)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(70)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(70)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 45,
								"BewerbungStelleId": 70,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(70)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(92)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(92)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 92,
					"BewerbungId": 92,
					"EingetragenAm": "/Date(1421449200000)/",
					"EingetragenVon": "Emil Lehrmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(92)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(92)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 92,
						"Email": "Lukas.Walter@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(896047200000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 169 179366568",
						"Nachname": "Walter",
						"Ort": "Nürnberg",
						"Postleitzahl": "91667",
						"StrasseHnr": "Am Langen Graben 32",
						"Telefonnummer": "0763 8407938",
						"Vorname": "Lukas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(92)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(92)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(92)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 7,
					"BewerbungId": 7,
					"EingetragenAm": "/Date(1424818800000)/",
					"EingetragenVon": "Ben Jung",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 7,
						"Email": "Carolin.Lange@gmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-309315600000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 168 603534436",
						"Nachname": "Lange",
						"Ort": "Frankfurt",
						"Postleitzahl": "84891",
						"StrasseHnr": "Birkenweg 145",
						"Telefonnummer": "0848 4705274",
						"Vorname": "Carolin",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 7,
								"BewerbungStelleId": 9,
								"Stelle": 4,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP CO (m/w)",
									"StelleId": 4,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(55)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(55)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 55,
					"BewerbungId": 55,
					"EingetragenAm": "/Date(1465855200000)/",
					"EingetragenVon": "Luisa Mustermann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(55)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(55)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 55,
						"Email": "Finn.Hermann@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(805759200000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 179 40971569",
						"Nachname": "Hermann",
						"Ort": "Nürnberg",
						"Postleitzahl": "94102",
						"StrasseHnr": "Fontanestraße 32",
						"Telefonnummer": "0957 2649623",
						"Vorname": "Finn",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(55)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(55)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(55)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(53)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(53)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 53,
					"BewerbungId": 53,
					"EingetragenAm": "/Date(1473458400000)/",
					"EingetragenVon": "Carolin Meyer",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(53)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(53)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 53,
						"Email": "Julia.Walter@hotmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(731631600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 187 550899698",
						"Nachname": "Walter",
						"Ort": "Frankfurt",
						"Postleitzahl": "84878",
						"StrasseHnr": "Am Olympiapark 143",
						"Telefonnummer": "0856 1691751",
						"Vorname": "Julia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(53)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(53)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(53)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(85)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(85)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 53,
								"BewerbungStelleId": 85,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(85)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(87)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(87)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 53,
								"BewerbungStelleId": 87,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(87)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(86)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(86)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 53,
								"BewerbungStelleId": 86,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(86)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(100)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(100)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 100,
					"BewerbungId": 100,
					"EingetragenAm": "/Date(1479682800000)/",
					"EingetragenVon": "Anton Schneider",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(100)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(100)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 100,
						"Email": "Sophia.Lehrmann@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(747612000000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 160 506349103",
						"Nachname": "Lehrmann",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "92040",
						"StrasseHnr": "Am Olympiapark 52",
						"Telefonnummer": "0935 9656822",
						"Vorname": "Sophia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(100)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(100)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(100)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(161)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(161)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 100,
								"BewerbungStelleId": 161,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(161)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(30)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(30)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 30,
					"BewerbungId": 30,
					"EingetragenAm": "/Date(1432072800000)/",
					"EingetragenVon": "Stefanie Hofmann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(30)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(30)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 30,
						"Email": "Lukas.Mueller@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(370216800000)/",
						"Geschlecht": "m",
						"Handynummer": "+47 167 304949729",
						"Nachname": "Mueller",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "83821",
						"StrasseHnr": "Hermannstraße 127",
						"Telefonnummer": "0935 4745924",
						"Vorname": "Lukas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(30)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(30)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(30)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(45)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(45)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 30,
								"BewerbungStelleId": 45,
								"Stelle": 18,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(45)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(62)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(62)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 62,
					"BewerbungId": 62,
					"EingetragenAm": "/Date(1455836400000)/",
					"EingetragenVon": "Emilia Hartmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(62)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(62)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 62,
						"Email": "Moritz.Hartmann@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(968536800000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 158 520093894",
						"Nachname": "Hartmann",
						"Ort": "Heidelberg",
						"Postleitzahl": "89989",
						"StrasseHnr": "Darmstädter Straße 69",
						"Telefonnummer": "0732 6676625",
						"Vorname": "Moritz",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(62)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(62)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(62)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(103)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(103)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 62,
								"BewerbungStelleId": 103,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(103)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(102)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(102)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 62,
								"BewerbungStelleId": 102,
								"Stelle": 4,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(102)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP CO (m/w)",
									"StelleId": 4,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(76)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(76)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 76,
					"BewerbungId": 76,
					"EingetragenAm": "/Date(1476482400000)/",
					"EingetragenVon": "Linus Hermann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(76)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(76)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 76,
						"Email": "Leon.Fischer@aol.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(860104800000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 158 384559743",
						"Nachname": "Fischer",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "95779",
						"StrasseHnr": "Am Gemeindewald 41",
						"Telefonnummer": "0870 1878124",
						"Vorname": "Leon",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(76)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(76)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(76)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(121)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(121)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 76,
								"BewerbungStelleId": 121,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(121)/BewerbungDetails"
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
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(26)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(26)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 26,
					"BewerbungId": 26,
					"EingetragenAm": "/Date(1470520800000)/",
					"EingetragenVon": "Mia Zimmermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(26)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(26)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 26,
						"Email": "Alexander.Walter@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(188434800000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 158 841099018",
						"Nachname": "Walter",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "91058",
						"StrasseHnr": "Ellingerweg 21",
						"Telefonnummer": "0838 853808",
						"Vorname": "Alexander",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(26)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(26)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(26)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(36)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(36)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 26,
								"BewerbungStelleId": 36,
								"Stelle": 14,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(36)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(35)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(35)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 26,
								"BewerbungStelleId": 35,
								"Stelle": 2,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(35)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP Vertriebsbeauftragter Lager-Logistik (m/w)",
									"StelleId": 2,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(2)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(37)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(37)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 26,
								"BewerbungStelleId": 37,
								"Stelle": 19,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(37)/BewerbungDetails"
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
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(38)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(38)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 38,
					"BewerbungId": 38,
					"EingetragenAm": "/Date(1441663200000)/",
					"EingetragenVon": "Elias Lange",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(38)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(38)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 38,
						"Email": "David.Zimmermann@hotmail.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(680565600000)/",
						"Geschlecht": "m",
						"Handynummer": "+351 127 159934776",
						"Nachname": "Zimmermann",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "91221",
						"StrasseHnr": "Havelstraße 56",
						"Telefonnummer": "0733 8535192",
						"Vorname": "David",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(38)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(38)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(38)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(59)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(59)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 38,
								"BewerbungStelleId": 59,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(59)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(60)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(60)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 38,
								"BewerbungStelleId": 60,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(60)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(64)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(64)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 64,
					"BewerbungId": 64,
					"EingetragenAm": "/Date(1479855600000)/",
					"EingetragenVon": "Anna Walter",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(64)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(64)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 64,
						"Email": "Mia.Lange@gmail.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(449877600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 149 854936822",
						"Nachname": "Lange",
						"Ort": "Hassfurt",
						"Postleitzahl": "84656",
						"StrasseHnr": "Goldnesselweg 94",
						"Telefonnummer": "0896 1903679",
						"Vorname": "Mia",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(64)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(64)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(64)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(106)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(106)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 64,
								"BewerbungStelleId": 106,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(106)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(105)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(105)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 64,
								"BewerbungStelleId": 105,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(105)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(42)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(42)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 42,
					"BewerbungId": 42,
					"EingetragenAm": "/Date(1435528800000)/",
					"EingetragenVon": "Ben Zimmermann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(42)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(42)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 42,
						"Email": "Lara.König@aol.com",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(938988000000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 199 286215061",
						"Nachname": "König",
						"Ort": "Schweinfurt",
						"Postleitzahl": "90849",
						"StrasseHnr": "Bayerstraße 144",
						"Telefonnummer": "0718 917813",
						"Vorname": "Lara",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(42)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(42)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(42)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(64)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(64)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 42,
								"BewerbungStelleId": 64,
								"Stelle": 4,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(64)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP CO (m/w)",
									"StelleId": 4,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(4)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(66)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(66)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 42,
								"BewerbungStelleId": 66,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(66)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(65)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(65)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 42,
								"BewerbungStelleId": 65,
								"Stelle": 8,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(65)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Windows-basierende Anwendungssysteme (m/w)",
									"StelleId": 8,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(8)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(85)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(85)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 85,
					"BewerbungId": 85,
					"EingetragenAm": "/Date(1429740000000)/",
					"EingetragenVon": "Milan Lehrmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(85)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(85)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 85,
						"Email": "Theo.Hermann@aol.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-303440400000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 183 817524776",
						"Nachname": "Hermann",
						"Ort": "Frankfurt",
						"Postleitzahl": "81637",
						"StrasseHnr": "Ackermannstraße 50",
						"Telefonnummer": "0734 8964801",
						"Vorname": "Theo",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(85)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(85)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(85)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(138)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(138)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 85,
								"BewerbungStelleId": 138,
								"Stelle": 12,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(138)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(137)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(137)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 85,
								"BewerbungStelleId": 137,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(137)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(139)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(139)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 85,
								"BewerbungStelleId": 139,
								"Stelle": 15,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(139)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für SAP HCM (m/w)",
									"StelleId": 15,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(15)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(59)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(59)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 59,
					"BewerbungId": 59,
					"EingetragenAm": "/Date(1473026400000)/",
					"EingetragenVon": "Emily Fischer",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(59)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(59)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 59,
						"Email": "Finn.Lange@gmx.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(702684000000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 146 438375592",
						"Nachname": "Lange",
						"Ort": "Berlin",
						"Postleitzahl": "97069",
						"StrasseHnr": "Havelstraße 123",
						"Telefonnummer": "0888 8423313",
						"Vorname": "Finn",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(59)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(59)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(59)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(97)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(97)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 59,
								"BewerbungStelleId": 97,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(97)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(96)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(96)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 59,
								"BewerbungStelleId": 96,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(96)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(94)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(94)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 94,
					"BewerbungId": 94,
					"EingetragenAm": "/Date(1443996000000)/",
					"EingetragenVon": "Luca Koch",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(94)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(94)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 94,
						"Email": "Milan.Hartmann@web.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-38883600000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 171 817006986",
						"Nachname": "Hartmann",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "98639",
						"StrasseHnr": "Aachener Straße 35",
						"Telefonnummer": "0908 4370001",
						"Vorname": "Milan",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(94)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(94)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(94)/KommentarDetails"
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(41)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(41)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 41,
					"BewerbungId": 41,
					"EingetragenAm": "/Date(1476914400000)/",
					"EingetragenVon": "Amelie Jung",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(41)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(41)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 41,
						"Email": "Noah.Schneider@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(563410800000)/",
						"Geschlecht": "m",
						"Handynummer": "+43 169 109681381",
						"Nachname": "Schneider",
						"Ort": "Würzburg",
						"Postleitzahl": "86567",
						"StrasseHnr": "Ellingerweg 28",
						"Telefonnummer": "0923 1659115",
						"Vorname": "Noah",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(41)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(41)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(41)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(63)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(63)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 41,
								"BewerbungStelleId": 63,
								"Stelle": 5,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(63)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Inhouse Consultant SAP MM, SD oder PP (m/w)",
									"StelleId": 5,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(5)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 8,
					"BewerbungId": 8,
					"EingetragenAm": "/Date(1467237600000)/",
					"EingetragenVon": "Stefanie Schröder",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 8,
						"Email": "Hannah.Schneider@hotmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(-121654800000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 154 644023971",
						"Nachname": "Schneider",
						"Ort": "Heidelberg",
						"Postleitzahl": "92670",
						"StrasseHnr": "Canalettostraße 119",
						"Telefonnummer": "0768 3428623",
						"Vorname": "Hannah",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 14,
					"BewerbungId": 14,
					"EingetragenAm": "/Date(1443132000000)/",
					"EingetragenVon": "Milan Mueller",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 14,
						"Email": "Linus.Fischer@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(271378800000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 160 26977422",
						"Nachname": "Fischer",
						"Ort": "Hergolshausen",
						"Postleitzahl": "84570",
						"StrasseHnr": "Havelstraße 101",
						"Telefonnummer": "0866 1321734",
						"Vorname": "Linus",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(25)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(25)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 25,
					"BewerbungId": 25,
					"EingetragenAm": "/Date(1451257200000)/",
					"EingetragenVon": "Elias Schröder",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(25)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(25)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 25,
						"Email": "Katrin.Fischer@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(615592800000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 186 409806131",
						"Nachname": "Fischer",
						"Ort": "Köln",
						"Postleitzahl": "93358",
						"StrasseHnr": "Feigstraße 2",
						"Telefonnummer": "0979 1784329",
						"Vorname": "Katrin",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(25)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(25)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(25)/KommentarDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(36)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(36)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 36,
					"BewerbungId": 36,
					"EingetragenAm": "/Date(1465682400000)/",
					"EingetragenVon": "Emily Schneider",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(36)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(36)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 36,
						"Email": "Anton.König@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(897688800000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 187 933893426",
						"Nachname": "König",
						"Ort": "Hergolshausen",
						"Postleitzahl": "81333",
						"StrasseHnr": "Am Langen Graben 127",
						"Telefonnummer": "0862 6466343",
						"Vorname": "Anton",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(36)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(36)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(36)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(55)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(55)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 36,
								"BewerbungStelleId": 55,
								"Stelle": 11,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(55)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant SAP MM, SD oder PP für Grafenrheinfeld oder Leonberg (m/w)",
									"StelleId": 11,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(11)/BewerbungStelleDetails"
										}
									}
								}
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(54)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(54)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 36,
								"BewerbungStelleId": 54,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(54)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(80)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(80)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 80,
					"BewerbungId": 80,
					"EingetragenAm": "/Date(1477346400000)/",
					"EingetragenVon": "Lukas Mustermann",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(80)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(80)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 80,
						"Email": "Elias.König@web.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(858466800000)/",
						"Geschlecht": "m",
						"Handynummer": "+47 153 311950773",
						"Nachname": "König",
						"Ort": "Nürnberg",
						"Postleitzahl": "89633",
						"StrasseHnr": "Aachener Straße 98",
						"Telefonnummer": "0747 2711528",
						"Vorname": "Elias",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(80)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(80)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(80)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(129)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(129)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 80,
								"BewerbungStelleId": 129,
								"Stelle": 7,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(129)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(128)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(128)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 80,
								"BewerbungStelleId": 128,
								"Stelle": 1,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(128)/BewerbungDetails"
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
							}, {
								"__metadata": {
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(130)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(130)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 80,
								"BewerbungStelleId": 130,
								"Stelle": 9,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(130)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Consultant für Integrationsprozesse in der IT (m/w)",
									"StelleId": 9,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(9)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(71)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(71)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 71,
					"BewerbungId": 71,
					"EingetragenAm": "/Date(1447196400000)/",
					"EingetragenVon": "Elias Schneider",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(71)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(71)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 71,
						"Email": "Emma.Mustermann@aol.net",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(419292000000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 128 92491944",
						"Nachname": "Mustermann",
						"Ort": "Hergolshausen",
						"Postleitzahl": "97321",
						"StrasseHnr": "Ackermannstraße 34",
						"Telefonnummer": "0909 6949128",
						"Vorname": "Emma",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(71)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(71)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(71)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(115)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(115)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 71,
								"BewerbungStelleId": 115,
								"Stelle": 16,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(115)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "Web-Entwickler (m/w)",
									"StelleId": 16,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(16)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 2,
					"BewerbungId": 2,
					"EingetragenAm": "/Date(1481324400000)/",
					"EingetragenVon": "Elias Lehrmann",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 2,
						"Email": "Jonas.Mustermann@gmail.de",
						"Fotopfad": null,
						"Geburtsdatum": "/Date(786841200000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 184 447747651",
						"Nachname": "Mustermann",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "93133",
						"StrasseHnr": "Goldnesselweg 58",
						"Telefonnummer": "0820 4204875",
						"Vorname": "Jonas",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)/BewerbungDetails"
							}
						}
					},
					"DokumentDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)/DokumentDetails"
						}
					},
					"KommentarDetails": {
						"__deferred": {
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)/KommentarDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 2,
								"BewerbungStelleId": 1,
								"Stelle": 10,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)/BewerbungDetails"
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
									"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
									"type": "de.fis.bewerbungtest.model.BewerbungStelle"
								},
								"Bewerbung": 2,
								"BewerbungStelleId": 2,
								"Stelle": 17,
								"BewerbungDetails": {
									"__deferred": {
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)/BewerbungDetails"
									}
								},
								"StelleDetails": {
									"__metadata": {
										"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)",
										"type": "de.fis.bewerbungtest.model.Stelle"
									},
									"Bezeichnung": "SAP-Software-Entwickler/ABAP (m/w)",
									"StelleId": 17,
									"BewerbungStelleDetails": {
										"__deferred": {
											"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Stelles(17)/BewerbungStelleDetails"
										}
									}
								}
							}
						]
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
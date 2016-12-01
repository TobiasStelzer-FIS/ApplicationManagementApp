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
				Stelles: [{
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}, {
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
				}],
				// Ende: Stelles

				Statuss: [{
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
				}, {
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
				}, {
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
				}, {
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
				}],
				// Ende: Statuss

				Bewerbungs: [{
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 5,
					"BewerbungId": 5,
					"EingetragenAm": "/Date(1474322400000)/",
					"EingetragenVon": "Elisabeth König",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 5,
						"Email": "Julian.Schneider@gmail.net",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-127702800000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 123 458804336",
						"Nachname": "Schneider",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "95149",
						"StrasseHnr": "Birkenweg 113",
						"Telefonnummer": "0943 5774575",
						"Vorname": "Julian",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(12)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(12)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 5,
							"KommentarId": 12,
							"Name": "Lia Werner",
							"Text": "Julian.Schneider@gmail.net --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1470292657000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(12)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(14)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(14)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 5,
							"KommentarId": 14,
							"Name": "Finn Zimmermann",
							"Text": "Julian.Schneider@gmail.net --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1473049416000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(14)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(13)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(13)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 5,
							"KommentarId": 13,
							"Name": "Luisa Zimmermann",
							"Text": "Julian.Schneider@gmail.net --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation. Außerdem passt er perfekt ins Profil. Empfehlung: Einladen",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1469107206000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(13)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 5,
							"BewerbungStelleId": 8,
							"Stelle": 19,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 5,
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
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 5,
							"BewerbungStelleId": 7,
							"Stelle": 17,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(12)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 12,
					"BewerbungId": 12,
					"EingetragenAm": "/Date(1451689200000)/",
					"EingetragenVon": "Luca Jung",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 12,
						"Email": "Mila.Walter@web.net",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(679528800000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 153 282274857",
						"Nachname": "Walter",
						"Ort": "Stuttgart",
						"Postleitzahl": "91721",
						"StrasseHnr": "Eglofstraße 119",
						"Telefonnummer": "0884 2665368",
						"Vorname": "Mila",
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
						"results": []
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
							"Bewerbung": 12,
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 12,
							"BewerbungStelleId": 18,
							"Stelle": 14,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 14,
					"BewerbungId": 14,
					"EingetragenAm": "/Date(1473458400000)/",
					"EingetragenVon": "Noah Schneider",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 14,
						"Email": "Sophia.Zimmermann@gmail.net",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(1000677600000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 191 541641590",
						"Nachname": "Zimmermann",
						"Ort": "Hergolshausen",
						"Postleitzahl": "84361",
						"StrasseHnr": "Eglofstraße 96",
						"Telefonnummer": "0798 8911670",
						"Vorname": "Sophia",
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
						"results": []
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 14,
							"BewerbungStelleId": 19,
							"Stelle": 5,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 14,
							"BewerbungStelleId": 21,
							"Stelle": 10,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 14,
							"BewerbungStelleId": 20,
							"Stelle": 8,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(1)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 1,
					"BewerbungId": 1,
					"EingetragenAm": "/Date(1453417200000)/",
					"EingetragenVon": "Noah Mustermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 1,
						"Email": "Anton.Zimmermann@gmx.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(502671600000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 188 667277902",
						"Nachname": "Zimmermann",
						"Ort": "Garstadt",
						"Postleitzahl": "91249",
						"StrasseHnr": "Goldnesselweg 40",
						"Telefonnummer": "0809 4851255",
						"Vorname": "Anton",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(3)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(3)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 1,
							"KommentarId": 3,
							"Name": "Moritz Lehrmann",
							"Text": "Anton.Zimmermann@gmx.de --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1466856434000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(3)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(2)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(2)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 1,
							"KommentarId": 2,
							"Name": "Elisabeth Lange",
							"Text": "Anton.Zimmermann@gmx.de --- Klingt ganz gut",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1467901750000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(2)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(1)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(1)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 1,
							"KommentarId": 1,
							"Name": "Amelie Schneider",
							"Text": "Anton.Zimmermann@gmx.de --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1462199977000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(1)/BewerbungDetails"
								}
							}
						}]
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(8)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 8,
					"BewerbungId": 8,
					"EingetragenAm": "/Date(1453330800000)/",
					"EingetragenVon": "Amelie Koch",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 8,
						"Email": "Emily.Schmidt@gmail.net",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(730335600000)/",
						"Geschlecht": "w",
						"Handynummer": "+43 181 15728644",
						"Nachname": "Schmidt",
						"Ort": "Schnackenwerth",
						"Postleitzahl": "97634",
						"StrasseHnr": "Darmstädter Straße 83",
						"Telefonnummer": "0907 1619789",
						"Vorname": "Emily",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(21)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(21)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 8,
							"KommentarId": 21,
							"Name": "Mila Jung",
							"Text": "Emily.Schmidt@gmail.net --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1464074901000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(21)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(23)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(23)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 8,
							"KommentarId": 23,
							"Name": "Lara Hermann",
							"Text": "Emily.Schmidt@gmail.net --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1457767959000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(23)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(22)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(22)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 8,
							"KommentarId": 22,
							"Name": "Emilia Zimmermann",
							"Text": "Emily.Schmidt@gmail.net --- Klingt ganz gut",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1463113838000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(22)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 12,
							"Stelle": 10,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 14,
							"Stelle": 15,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 13,
							"Stelle": 13,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(3)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 3,
					"BewerbungId": 3,
					"EingetragenAm": "/Date(1468447200000)/",
					"EingetragenVon": "Stefanie Schröder",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 3,
						"Email": "Maximilian.Schneider@aol.com",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(529369200000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 135 693634814",
						"Nachname": "Schneider",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "86885",
						"StrasseHnr": "Feigstraße 44",
						"Telefonnummer": "0734 9489825",
						"Vorname": "Maximilian",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(7)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(7)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 3,
							"KommentarId": 7,
							"Name": "Finn Lehrmann",
							"Text": "Maximilian.Schneider@aol.com --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1452781864000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(7)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(8)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(8)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 3,
							"KommentarId": 8,
							"Name": "Noah Koch",
							"Text": "Maximilian.Schneider@aol.com --- Toller Bewerber",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1469085687000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(8)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 3,
							"BewerbungStelleId": 3,
							"Stelle": 13,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 3,
							"BewerbungStelleId": 2,
							"Stelle": 2,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 3,
							"BewerbungStelleId": 4,
							"Stelle": 18,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(11)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 11,
					"BewerbungId": 11,
					"EingetragenAm": "/Date(1473890400000)/",
					"EingetragenVon": "Lena König",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 11,
						"Email": "Emma.Lange@aol.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(951087600000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 190 569531042",
						"Nachname": "Lange",
						"Ort": "Stuttgart",
						"Postleitzahl": "95926",
						"StrasseHnr": "Bayerstraße 50",
						"Telefonnummer": "0739 2515629",
						"Vorname": "Emma",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(28)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(28)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 11,
							"KommentarId": 28,
							"Name": "Lena Fischer",
							"Text": "Emma.Lange@aol.com --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1473955621000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(28)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 11,
							"BewerbungStelleId": 16,
							"Stelle": 8,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 6,
					"BewerbungId": 6,
					"EingetragenAm": "/Date(1477954800000)/",
					"EingetragenVon": "Tom König",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 6,
						"Email": "Julia.König@aol.de",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(680824800000)/",
						"Geschlecht": "w",
						"Handynummer": "+43 137 99263623",
						"Nachname": "König",
						"Ort": "Hamburg",
						"Postleitzahl": "89189",
						"StrasseHnr": "Aachener Straße 115",
						"Telefonnummer": "0758 5756440",
						"Vorname": "Julia",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(16)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(16)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 6,
							"KommentarId": 16,
							"Name": "Julian Schröder",
							"Text": "Julia.König@aol.de --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1468949927000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(16)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(15)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(15)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 6,
							"KommentarId": 15,
							"Name": "Hannah Mustermann",
							"Text": "Julia.König@aol.de --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1456216043000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(15)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(17)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(17)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 6,
							"KommentarId": 17,
							"Name": "Noah Lange",
							"Text": "Julia.König@aol.de --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation. Außerdem passt er perfekt ins Profil. Empfehlung: Einladen",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1468238665000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(17)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 6,
							"BewerbungStelleId": 9,
							"Stelle": 14,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 2,
					"BewerbungId": 2,
					"EingetragenAm": "/Date(1476136800000)/",
					"EingetragenVon": "Luca Zimmermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 2,
						"Email": "Moritz.Mueller@web.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(447807600000)/",
						"Geschlecht": "m",
						"Handynummer": "+31 123 691873254",
						"Nachname": "Mueller",
						"Ort": "Köln",
						"Postleitzahl": "86390",
						"StrasseHnr": "Adenauerring 10",
						"Telefonnummer": "0735 959257",
						"Vorname": "Moritz",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(4)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(4)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 2,
							"KommentarId": 4,
							"Name": "Finn Schmidt",
							"Text": "Moritz.Mueller@web.de --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1460544329000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(4)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(5)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(5)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 2,
							"KommentarId": 5,
							"Name": "Sophie Schneider",
							"Text": "Moritz.Mueller@web.de --- Toller Bewerber",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1468050507000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(5)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(6)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(6)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 2,
							"KommentarId": 6,
							"Name": "Theo Lange",
							"Text": "Moritz.Mueller@web.de --- Toller Bewerber",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1476785873000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(6)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 2,
							"BewerbungStelleId": 1,
							"Stelle": 19,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(7)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 7,
					"BewerbungId": 7,
					"EingetragenAm": "/Date(1472940000000)/",
					"EingetragenVon": "Elisabeth Schneider",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 7,
						"Email": "Finn.Lange@gmail.net",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(244076400000)/",
						"Geschlecht": "m",
						"Handynummer": "+43 155 776293017",
						"Nachname": "Lange",
						"Ort": "München",
						"Postleitzahl": "82606",
						"StrasseHnr": "Am Olympiapark 68",
						"Telefonnummer": "0810 8972652",
						"Vorname": "Finn",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(20)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(20)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 7,
							"KommentarId": 20,
							"Name": "Luisa Lehrmann",
							"Text": "Finn.Lange@gmail.net --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1476605078000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(20)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(18)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(18)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 7,
							"KommentarId": 18,
							"Name": "Moritz Lange",
							"Text": "Finn.Lange@gmail.net --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1470296210000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(18)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(19)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(19)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 7,
							"KommentarId": 19,
							"Name": "Julian Zimmermann",
							"Text": "Finn.Lange@gmail.net --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation. Außerdem passt er perfekt ins Profil. Empfehlung: Einladen",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1466061443000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(19)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 7,
							"BewerbungStelleId": 10,
							"Stelle": 1,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 7,
							"BewerbungStelleId": 11,
							"Stelle": 6,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(13)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 13,
					"BewerbungId": 13,
					"EingetragenAm": "/Date(1465423200000)/",
					"EingetragenVon": "Emma Schmidt",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 13,
						"Email": "Paul.Schneider@web.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-312080400000)/",
						"Geschlecht": "m",
						"Handynummer": "+43 133 490181675",
						"Nachname": "Schneider",
						"Ort": "Heidelberg",
						"Postleitzahl": "82654",
						"StrasseHnr": "Eglofstraße 111",
						"Telefonnummer": "0721 7370993",
						"Vorname": "Paul",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(31)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(31)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 13,
							"KommentarId": 31,
							"Name": "Emilia Hermann",
							"Text": "Paul.Schneider@web.de --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation. Außerdem passt er perfekt ins Profil. Empfehlung: Einladen",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1463241780000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(31)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(29)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(29)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 13,
							"KommentarId": 29,
							"Name": "David Schröder",
							"Text": "Paul.Schneider@web.de --- Klingt ganz gut",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1465193509000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(29)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(30)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(30)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 13,
							"KommentarId": 30,
							"Name": "Mila Schmidt",
							"Text": "Paul.Schneider@web.de --- Toller Bewerber",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1452013420000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(30)/BewerbungDetails"
								}
							}
						}]
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 9,
					"BewerbungId": 9,
					"EingetragenAm": "/Date(1457218800000)/",
					"EingetragenVon": "Anna Werner",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 9,
						"Email": "Elisabeth.Werner@aol.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(22633200000)/",
						"Geschlecht": "w",
						"Handynummer": "+47 192 33422272",
						"Nachname": "Werner",
						"Ort": "Würzburg",
						"Postleitzahl": "81471",
						"StrasseHnr": "Bayerstraße 150",
						"Telefonnummer": "0965 4950082",
						"Vorname": "Elisabeth",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(24)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(24)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 9,
							"KommentarId": 24,
							"Name": "Luisa Koch",
							"Text": "Elisabeth.Werner@aol.com --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1453659312000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(24)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(25)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(25)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 9,
							"KommentarId": 25,
							"Name": "Carolin Schröder",
							"Text": "Elisabeth.Werner@aol.com --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1462978897000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(25)/BewerbungDetails"
								}
							}
						}]
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 4,
					"BewerbungId": 4,
					"EingetragenAm": "/Date(1467842400000)/",
					"EingetragenVon": "Lia König",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 4,
						"Email": "Maximilian.Lange@gmx.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(737330400000)/",
						"Geschlecht": "m",
						"Handynummer": "+47 194 498534659",
						"Nachname": "Lange",
						"Ort": "München",
						"Postleitzahl": "90498",
						"StrasseHnr": "Ellingerweg 115",
						"Telefonnummer": "0960 2263419",
						"Vorname": "Maximilian",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(10)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(10)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 4,
							"KommentarId": 10,
							"Name": "Finn Schröder",
							"Text": "Maximilian.Lange@gmx.de --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1479227327000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(10)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(11)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(11)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 4,
							"KommentarId": 11,
							"Name": "Emily Zimmermann",
							"Text": "Maximilian.Lange@gmx.de --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation. Außerdem passt er perfekt ins Profil. Empfehlung: Einladen",
							"Thema": "Thema 3",
							"Zeitstempel": "/Date(1452066766000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(11)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(9)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(9)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 4,
							"KommentarId": 9,
							"Name": "Moritz Meyer",
							"Text": "Maximilian.Lange@gmx.de --- Gute Noten. Trotzdem aufpassen, war längere Zeit arbeitslos.",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1477227489000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(9)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 4,
							"BewerbungStelleId": 5,
							"Stelle": 13,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(15)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 15,
					"BewerbungId": 15,
					"EingetragenAm": "/Date(1452034800000)/",
					"EingetragenVon": "Luisa Schneider",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 15,
						"Email": "Theo.Hofmann@gmail.net",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-239677200000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 184 29591103",
						"Nachname": "Hofmann",
						"Ort": "Nürnberg",
						"Postleitzahl": "87210",
						"StrasseHnr": "Havelstraße 10",
						"Telefonnummer": "0878 4861834",
						"Vorname": "Theo",
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
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(32)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(32)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 15,
							"KommentarId": 32,
							"Name": "Sophie Hofmann",
							"Text": "Theo.Hofmann@gmail.net --- Toller Bewerber",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1478668662000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(32)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(33)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(33)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 15,
							"KommentarId": 33,
							"Name": "Stefanie Meyer",
							"Text": "Theo.Hofmann@gmail.net --- Klingt ganz gut",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1464001104000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(33)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 15,
							"BewerbungStelleId": 22,
							"Stelle": 9,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)/BewerbungDetails"
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
						}]
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 10,
					"BewerbungId": 10,
					"EingetragenAm": "/Date(1462572000000)/",
					"EingetragenVon": "Finn Schneider",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 10,
						"Email": "Tom.Koch@gmail.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-202352400000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 195 932196786",
						"Nachname": "Koch",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "93550",
						"StrasseHnr": "Adenauerring 91",
						"Telefonnummer": "0905 9703633",
						"Vorname": "Tom",
						"BewerbungDetails": {
							"__deferred": {
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)/BewerbungDetails"
							}
						}
					},
					"KommentarDetails": {
						"results": [{
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(27)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(27)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 10,
							"KommentarId": 27,
							"Name": "Lena Fischer",
							"Text": "Tom.Koch@gmail.de --- Dieser Bewerber hat eine vielversprechende Laufbahn hinter sich und verspricht hohe Motivation.\nAußerdem passt er perfekt ins Profil.\nEmpfehlung: Einladen",
							"Thema": "Thema 2",
							"Zeitstempel": "/Date(1471238692000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(27)/BewerbungDetails"
								}
							}
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(26)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(26)",
								"type": "de.fis.bewerbungtest.model.Kommentar"
							},
							"Bewerbung": 10,
							"KommentarId": 26,
							"Name": "Linus König",
							"Text": "Tom.Koch@gmail.de --- Schlechte Noten, aber angeblich hohe Motivation und passt gut ins Profil",
							"Thema": "Thema 1",
							"Zeitstempel": "/Date(1479107580000)/",
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Kommentars(26)/BewerbungDetails"
								}
							}
						}]
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 10,
							"BewerbungStelleId": 15,
							"Stelle": 7,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)/BewerbungDetails"
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
						}]
					},
					"BewerbungQuelleDetails": {
						"results": [{
							"Bewerbung": 10,
							"BewerbungQuelleId": 1,
							"Quelle": 1,
							"QuelleDetails": {
								"Bezeichnung": "Homepage FIS",
								"QuelleId": 1
							}
						}, {
							"Bewerbung": 10,
							"BewerbungQuelleId": 2,
							"Quelle": 2,
							"QuelleDetails": {
								"Bezeichnung": "FH WÜ/SW",
								"QuelleId": 2
							}
						}, {
							"Bewerbung": 10,
							"BewerbungQuelleId": 3,
							"Quelle": 3,
							"QuelleDetails": {
								"Bezeichnung": "Gymnasium und Realschule Walter-Rathenau",
								"QuelleId": 2
							}
						}]
					},
					"DokumentDetails": {
						"results": [{
							"Bewerbung": 10,
							"DokumentId": 1,
							"Typ": "Anschreiben",
							"Dateiname": "Tom_Koch (Anschreiben).pdf"
						}, {
							"Bewerbung": 10,
							"DokumentId": 2,
							"Typ": "Lebenslauf",
							"Dateiname": "Tom_Koch (Lebenslauf).pdf"
						}, {
							"Bewerbung": 10,
							"DokumentId": 3,
							"Typ": "Zeugnis",
							"Dateiname": "Tom_Koch (Zeugnis DV-Schule 2015).pdf"
						}, {
							"Bewerbung": 10,
							"DokumentId": 2,
							"Typ": "Praktikumsbestätigung",
							"Dateiname": "Tom_Koch (Praktikum SALT-Solutions).pdf"
						}]
					}
				}]

				// Ende: Bewerbungs
			});

			return oModel;
		}

	};

});
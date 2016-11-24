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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(6)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 6,
					"BewerbungId": 6,
					"EingetragenAm": "/Date(1477605600000)/",
					"EingetragenVon": "Emma Schneider",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(6)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 6,
						"Email": "Katrin.Koch@hotmail.de",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(400629600000)/",
						"Geschlecht": "w",
						"Handynummer": "+39 164 709072164",
						"Nachname": "Koch",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "95315",
						"StrasseHnr": "Fontanestraße 17",
						"Telefonnummer": "0920 963832",
						"Vorname": "Katrin",
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
							"Bewerbung": 6,
							"BewerbungStelleId": 12,
							"Stelle": 11,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(12)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(13)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 6,
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
						}, {
							"__metadata": {
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(11)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 6,
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
					"EingetragenAm": "/Date(1474754400000)/",
					"EingetragenVon": "David Mueller",
					"Status": 4,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(13)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 13,
						"Email": "Sophia.König@gmail.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(413593200000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 164 712326940",
						"Nachname": "König",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "82988",
						"StrasseHnr": "Bayerstraße 47",
						"Telefonnummer": "0849 6443670",
						"Vorname": "Sophia",
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
						"results": []
					}
				}, {
					"__metadata": {
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(2)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 2,
					"BewerbungId": 2,
					"EingetragenAm": "/Date(1429912800000)/",
					"EingetragenVon": "Katrin König",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(2)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 2,
						"Email": "Maximilian.Koch@aol.com",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(520380000000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 196 469643906",
						"Nachname": "Koch",
						"Ort": "Hamburg",
						"Postleitzahl": "98674",
						"StrasseHnr": "Canalettostraße 103",
						"Telefonnummer": "0737 252211",
						"Vorname": "Maximilian",
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
							"Stelle": 1,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(1)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 2,
							"BewerbungStelleId": 3,
							"Stelle": 17,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(3)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 2,
							"BewerbungStelleId": 2,
							"Stelle": 3,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(2)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1459807200000)/",
					"EingetragenVon": "Lea Hermann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(15)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 15,
						"Email": "Leonie.Lehrmann@aol.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(-220928400000)/",
						"Geschlecht": "w",
						"Handynummer": "+351 130 535747097",
						"Nachname": "Lehrmann",
						"Ort": "München",
						"Postleitzahl": "85317",
						"StrasseHnr": "Canalettostraße 118",
						"Telefonnummer": "0910 9222600",
						"Vorname": "Leonie",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 15,
							"BewerbungStelleId": 25,
							"Stelle": 14,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(25)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 15,
							"BewerbungStelleId": 26,
							"Stelle": 15,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(26)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 15,
							"BewerbungStelleId": 24,
							"Stelle": 5,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(24)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1433714400000)/",
					"EingetragenVon": "Sophia Werner",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(12)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 12,
						"Email": "Finn.Werner@gmail.com",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(189039600000)/",
						"Geschlecht": "m",
						"Handynummer": "+49 177 662818933",
						"Nachname": "Werner",
						"Ort": "Nürnberg",
						"Postleitzahl": "85897",
						"StrasseHnr": "Dehmelstraße 66",
						"Telefonnummer": "0939 2300711",
						"Vorname": "Finn",
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(14)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 14,
					"BewerbungId": 14,
					"EingetragenAm": "/Date(1442095200000)/",
					"EingetragenVon": "Elias Zimmermann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(14)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 14,
						"Email": "Leonie.Koch@aol.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(228351600000)/",
						"Geschlecht": "w",
						"Handynummer": "+40 171 219834275",
						"Nachname": "Koch",
						"Ort": "Heidelberg",
						"Postleitzahl": "87791",
						"StrasseHnr": "Adenauerring 24",
						"Telefonnummer": "0712 1113111",
						"Vorname": "Leonie",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 14,
							"BewerbungStelleId": 23,
							"Stelle": 13,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(23)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(5)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 5,
					"BewerbungId": 5,
					"EingetragenAm": "/Date(1423436400000)/",
					"EingetragenVon": "Katrin Mustermann",
					"Status": 2,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(5)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 5,
						"Email": "Ben.Zimmermann@web.com",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-16765200000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 157 338655957",
						"Nachname": "Zimmermann",
						"Ort": "Roth a. d. Saale",
						"Postleitzahl": "88223",
						"StrasseHnr": "Birkenweg 119",
						"Telefonnummer": "0831 1125437",
						"Vorname": "Ben",
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
							"Bewerbung": 5,
							"BewerbungStelleId": 9,
							"Stelle": 5,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(9)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 5,
							"BewerbungStelleId": 10,
							"Stelle": 13,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(10)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(9)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 9,
					"BewerbungId": 9,
					"EingetragenAm": "/Date(1423436400000)/",
					"EingetragenVon": "Finn König",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(9)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 9,
						"Email": "Julian.Schröder@hotmail.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(-22899600000)/",
						"Geschlecht": "m",
						"Handynummer": "+41 172 272807659",
						"Nachname": "Schröder",
						"Ort": "Heidelberg",
						"Postleitzahl": "92007",
						"StrasseHnr": "Akademiestraße 87",
						"Telefonnummer": "0942 8403813",
						"Vorname": "Julian",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 9,
							"BewerbungStelleId": 20,
							"Stelle": 12,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(20)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 9,
							"BewerbungStelleId": 19,
							"Stelle": 10,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(19)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1479423600000)/",
					"EingetragenVon": "Lia Schneider",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(1)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 1,
						"Email": "Jonas.Koch@web.de",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(193532400000)/",
						"Geschlecht": "m",
						"Handynummer": "+40 182 444849435",
						"Nachname": "Koch",
						"Ort": "Hamburg",
						"Postleitzahl": "83468",
						"StrasseHnr": "Gabelsbergerstraße 126",
						"Telefonnummer": "0859 3789338",
						"Vorname": "Jonas",
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
					"EingetragenAm": "/Date(1449010800000)/",
					"EingetragenVon": "Katrin Walter",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(8)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 8,
						"Email": "Amelie.Hartmann@hotmail.de",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(233362800000)/",
						"Geschlecht": "w",
						"Handynummer": "+49 141 306356504",
						"Nachname": "Hartmann",
						"Ort": "Hergolshausen",
						"Postleitzahl": "94649",
						"StrasseHnr": "Akademiestraße 89",
						"Telefonnummer": "0761 4155703",
						"Vorname": "Amelie",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 17,
							"Stelle": 3,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(17)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 18,
							"Stelle": 6,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(18)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 8,
							"BewerbungStelleId": 16,
							"Stelle": 2,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(16)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1483052400000)/",
					"EingetragenVon": "Lukas Lange",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(3)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 3,
						"Email": "Emil.Meyer@gmail.com",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(212022000000)/",
						"Geschlecht": "m",
						"Handynummer": "+48 177 206513063",
						"Nachname": "Meyer",
						"Ort": "München",
						"Postleitzahl": "97537",
						"StrasseHnr": "Aachener Straße 112",
						"Telefonnummer": "0745 3760082",
						"Vorname": "Emil",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 3,
							"BewerbungStelleId": 4,
							"Stelle": 2,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(4)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(5)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 3,
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
							"Bewerbung": 3,
							"BewerbungStelleId": 6,
							"Stelle": 15,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(6)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1430431200000)/",
					"EingetragenVon": "Sophie Schneider",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(11)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Herr",
						"BewerberId": 11,
						"Email": "Noah.Schmidt@aol.net",
						"Fotopfad": "./images/Mustermann.png",
						"Geburtsdatum": "/Date(114217200000)/",
						"Geschlecht": "m",
						"Handynummer": "+39 164 38031191",
						"Nachname": "Schmidt",
						"Ort": "Berlin",
						"Postleitzahl": "94771",
						"StrasseHnr": "Feigstraße 4",
						"Telefonnummer": "0851 5752074",
						"Vorname": "Noah",
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(4)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 4,
					"BewerbungId": 4,
					"EingetragenAm": "/Date(1459461600000)/",
					"EingetragenVon": "Lara Schneider",
					"Status": 1,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(4)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 4,
						"Email": "Lara.König@gmx.com",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(144975600000)/",
						"Geschlecht": "w",
						"Handynummer": "+31 188 113004101",
						"Nachname": "König",
						"Ort": "Schweinfurt",
						"Postleitzahl": "83732",
						"StrasseHnr": "Ackermannstraße 43",
						"Telefonnummer": "0919 2749829",
						"Vorname": "Lara",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 4,
							"BewerbungStelleId": 7,
							"Stelle": 10,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(7)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 4,
							"BewerbungStelleId": 8,
							"Stelle": 17,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(8)/BewerbungDetails"
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
						"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbungs(10)",
						"type": "de.fis.bewerbungtest.model.Bewerbung"
					},
					"Bewerber": 10,
					"BewerbungId": 10,
					"EingetragenAm": "/Date(1440108000000)/",
					"EingetragenVon": "Emil Lehrmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(10)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 10,
						"Email": "Anna.Mustermann@hotmail.de",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(124844400000)/",
						"Geschlecht": "w",
						"Handynummer": "+41 162 836188730",
						"Nachname": "Mustermann",
						"Ort": "Grafenrheinfeld",
						"Postleitzahl": "93581",
						"StrasseHnr": "Gabelsbergerstraße 118",
						"Telefonnummer": "0917 5482681",
						"Vorname": "Anna",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 10,
							"BewerbungStelleId": 22,
							"Stelle": 19,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(22)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 10,
							"BewerbungStelleId": 21,
							"Stelle": 11,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(21)/BewerbungDetails"
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
					"EingetragenAm": "/Date(1444082400000)/",
					"EingetragenVon": "Lia Hartmann",
					"Status": 3,
					"BewerberDetails": {
						"__metadata": {
							"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/Bewerbers(7)",
							"type": "de.fis.bewerbungtest.model.Bewerber"
						},
						"Anrede": "Frau",
						"BewerberId": 7,
						"Email": "Leonie.Werner@gmx.de",
						"Fotopfad": "./images/Musterfrau.png",
						"Geburtsdatum": "/Date(1011135600000)/",
						"Geschlecht": "w",
						"Handynummer": "+48 152 440362111",
						"Nachname": "Werner",
						"Ort": "Bergrheinfeld",
						"Postleitzahl": "94863",
						"StrasseHnr": "Am Langen Graben 43",
						"Telefonnummer": "0897 7821447",
						"Vorname": "Leonie",
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 7,
							"BewerbungStelleId": 14,
							"Stelle": 10,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(14)/BewerbungDetails"
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
								"id": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
								"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)",
								"type": "de.fis.bewerbungtest.model.BewerbungStelle"
							},
							"Bewerbung": 7,
							"BewerbungStelleId": 15,
							"Stelle": 15,
							"BewerbungDetails": {
								"__deferred": {
									"uri": "http://localhost:8080/bewerbungtest-cloud-web/bewerbungtest.svc/BewerbungStelles(15)/BewerbungDetails"
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
						}]
					}
				}]

				// Ende: Bewerbungs
			});

			return oModel;
		}

	};

});
sap.ui.define([
	"de/fis/bewerbungverwaltung/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"de/fis/bewerbungverwaltung/model/formatter"
], function(BaseController, UIComponent, JSONModel, formatter) {
	"use strict";

	return BaseController.extend("de.fis.bewerbungverwaltung.controller.BewerbungDetail", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);

			this._serviceURI = "https://applmanserverp1942281469trial.hanatrial.ondemand.com:443/applman/odata.srv";
			this._currentDialog = {};
			this._dialogs = []; // this will store the instantiated dialogs 
			this._fragments = []; // this will store the instantiated fragments
			this._linksCreated = 0;
			this._linksRemoved = 0;

			var oViewDataModel = new JSONModel({
				"Comment": {
					"Subject": "",
					"Text": "",
					"Name": "somebody"
				}
			});
			this.setModel(oViewDataModel, "viewDataModel");

			oRouter.getRoute("BewerbungDetail").attachPatternMatched(this._handleRouteMatched, this);

			this._showFragment("Details", "containerDetails");
			this._showFragment("Kommentare", "containerKommentare");
			this._showFragment("Unterlagen", "containerUnterlagen");
			this._showFragment("Umlauf", "containerUmlauf");
		},
		onExit: function() {

		},
		onAfterRendering: function() {

		},
		onBeforeRendering: function() {

		},

		_handleRouteMatched: function(oEvent) {
			var sBindingEntity = "applmanModel>/" + oEvent.getParameter("arguments").Application;

			this._bindView(sBindingEntity);
		},

		/**
		 * Binds the view to the Entity with the specified path
		 * (_handleRouteMatched --> _bindView)
		 * 
		 * @param sObjectPath: The path to the Entity which should be bound
		 * @private
		 */
		_bindView: function(sObjectPath) {
			this.getView().bindElement({
				path: sObjectPath,
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function() {},
					dataReceived: function() {}
				},
				parameters: {
					expand: "Positions,Sources,Comments,Documents,StatusDetails,ApplicantDetails"
				}
			});
		},

		/**
		 * Event handler for the "change" event of the bindElement function
		 * 
		 * @param oEvent: The change event
		 * @private
		 */
		_onBindingChange: function(oEvent) {
			var oElementBinding = this.getView().getElementBinding("applmanModel");
			this.getView().getModel("applmanModel").updateBindings();

			// No data for the binding
			if (!oElementBinding) {
				this.getRouter().getTargets().display("DetailObjectNotFound");
			}
		},

		/**
		 * Event handler for the "press" event of the Back button
		 * (the back button is only shown on Phones)
		 * 
		 * @param oEvent: The press event
		 * @public
		 */
		onNavButtonPressed: function(oEvent) {
			this.getRouter().navTo("BewerbungenMaster");
		},

		/**
		 * Event handler for the "press" event of the Delete button
		 * 
		 * @param oEvent: The press event
		 * @public
		 */
		onDeleteApplication: function(oEvent) {
			var oModel = this.getModel("applmanModel");
			var sBindingPath = this.getView().getElementBinding("applmanModel").getPath();

			var applicationId = oModel.getProperty(sBindingPath + "/ApplicationId");
			var positionIds = this._getIdsOfEntities("Positions", "Position");
			var sourceIds = this._getIdsOfEntities("Sources", "Source");
			
			this._removeLinks(oModel, {
				fromName: "Sources",
				fromIds: sourceIds,
				toName: "Applications",
				toIds: [applicationId],
				reverse: false
			});
			this._removeLinks(oModel, {
				fromName: "Positions",
				fromIds: positionIds,
				toName: "Applications",
				toIds: [applicationId],
				reverse: false
			});
			oModel.remove(sBindingPath, {
				success: function() {
					oModel.refresh();
				}
			});
		},

		/**
		 * Event handler for the "press" event of the Change Status button
		 * 
		 * @param oEvent: The press event
		 * @public
		 */
		onOpenStatusPopover: function(oEvent) {
			// create popover
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment(this.getView().getId(), "de.fis.bewerbungverwaltung.view.fragment.StatusSelectionPopover",
					this);
				this.getView().addDependent(this._oPopover);
			}
			// delay because addDependent will do a async rerendering and the popover will immediately close without it
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function() {
				this._oPopover.openBy(oButton);
			});
		},

		/**
		 * Event handler for the "press" event of the Status List in StatusSelectionPopover-Fragment
		 * 
		 * @param oEvent: The press event
		 * @public
		 */
		onStatusSelected: function(oEvent) {
			var oModel = this.getModel("applmanModel");
			var oListItem = oEvent.getSource();
			var sBindingPathStatus = oListItem.getBindingContext("applmanModel").getPath(); // example: "/Statuss('1001')"
			var sBindingPathApplication = this.getView().getElementBinding("applmanModel").getPath(); // example: "/Applications('1003')"

			var statusId = oModel.getProperty(sBindingPathStatus + "/StatusId");
			var applicationId = oModel.getProperty(sBindingPathApplication + "/ApplicationId");

			oModel.remove("/Statuss('" + statusId + "')/$links/Applications('" + applicationId + "')", {
				success: function() {
					var oLink = {
						"uri": this._serviceURI + "/Applications('" + applicationId + "')"
					};
					oModel.create(sBindingPathStatus + "/$links/Applications", oLink, {
						success: function() {
							oModel.refresh();
						}.bind(this)
					});
					oLink = {
						"uri": this._serviceURI + "/Statuss('" + statusId + "')"
					};
					oModel.update("/Applications('" + applicationId + "')/$links/StatusDetails", oLink, {
						success: function() {
							oModel.refresh();
						}.bind(this)
					});
				}.bind(this)
			});
			
			if (this._oPopover) {
				this._oPopover.close();
			}
		},

		/* =========================================================== */
		/* event handlers for the fragment buttons                     */
		/* =========================================================== */
		onDetailsEdit: function(oEvent) {
			/*
				var oModel = this.getModel("testModel");
				var oContext = this.getView().getBindingContext("testModel");
				var oBewerber = oModel.getProperty("BewerberDetails", oContext);
				var oEntry = oModel.createEntry("/Bewerbers", {
					BewerberId:		oBewerber.BewerberId,
					Geschlecht:		oBewerber.Geschlecht,
					Anrede: 		oBewerber.Anrede,
					Vorname:		oBewerber.Vorname,
					Nachname:		oBewerber.Nachname,
					Geburtsdatum:	oBewerber.Geburtsdatum,
					Fotopfad:		oBewerber.Fotopfad,
					Postleitzahl:	oBewerber.Postleitzahl,
					Ort:			oBewerber.Ort,
					StrasseHnr:		oBewerber.StrasseHnr,
					Telefonnummer:	oBewerber.Telefonnummer,
					Handynummer:	oBewerber.Handynummer,
					Email:			oBewerber.Email
				});
			*/
			var oModel = this.getModel("applmanModel");
			var sBindingPath = this.getView().getElementBinding("applmanModel").getPath();
			this._openDialog("DetailsBearbeiten");
			var oBoxPositions = this.getView().byId("multiComboBoxPositions");
			var oBoxSources = this.getView().byId("multiComboBoxSources");

			var aSelectedKeys = [];
			var aEntities = oModel.getProperty(sBindingPath + "/Positions");
			var i = 0;
			for (i = 0; i < aEntities.length; i++) {
				var oPosition = oModel.getProperty("/" + aEntities[i]);
				aSelectedKeys.push(oPosition.PositionId);
			}
			oBoxPositions.setSelectedKeys(aSelectedKeys);

			aSelectedKeys = [];
			aEntities = oModel.getProperty(sBindingPath + "/Sources");
			for (i = 0; i < aEntities.length; i++) {
				var oSource = oModel.getProperty("/" + aEntities[i]);
				aSelectedKeys.push(oSource.SourceId);
			}
			oBoxSources.setSelectedKeys(aSelectedKeys);

			//			oDialog.bindElement(oEntry);
		},
		onKommentareEdit: function(oEvent) {
			this._openDialog("KommentareBearbeiten");
		},
		onUnterlagenEdit: function(oEvent) {
			this._openDialog("UnterlagenBearbeiten");
		},
		onUmlaufEdit: function(oEvent) {
			this._openDialog("UmlaufBearbeiten");
		},
		onDetailsSave: function(oEvent) {
			var oModel = this.getModel("applmanModel");
			var aSelectedPositions = this.getView().byId("multiComboBoxPositions").getSelectedItems();
			var aSelectedSources = this.getView().byId("multiComboBoxSources").getSelectedItems();

			this._handleEntityUpdatesForSelectedItems(aSelectedPositions, "Positions", "Position");
			this._handleEntityUpdatesForSelectedItems(aSelectedSources, "Sources", "Source");
			oModel.submitChanges(
				function() {
					sap.m.MessageToast.show("Successfully submitted changes");
				},
				function() {
					sap.m.MessageToast.show("Error on submitting changes");
				}
			);

			this._closeDialog();
			oModel.refresh();
		},

		onKommentareSave: function(oEvent) {
			var oModel = this.getModel("applmanModel");
			var oViewDataModel = this.getModel("viewDataModel");

			oViewDataModel.setProperty("/Comment/Timestamp", new Date());
			var oComment = oViewDataModel.getProperty("/Comment");
			oComment.Subject = oComment.Subject.length < 1 ? " " : oComment.Subject;
			oComment.Text = oComment.Text.length < 1 ? " " : oComment.Text;

			oModel.create("/Comments", oComment, {
				success: function(oData) {
					var sBindingPath = this.getView().getElementBinding("applmanModel").getPath();
					var applicationId = oModel.getProperty(sBindingPath + "/ApplicationId");

					this._createLinks(oModel, {
						fromName: "Applications",
						fromIds: [applicationId],
						toName: "Comments",
						toIds: [oData.CommentId],
						reverse: false
					});
				}.bind(this)
			});

			this._closeDialog();

			oComment = {
				"Subject": "",
				"Text": "",
				"Name": "somebody"
			};
			oViewDataModel.setProperty("/Comment", oComment);
		},
		onDialogCancel: function(oEvent) {
			this._closeDialog();
			this.getModel("applmanModel").resetChanges();
		},

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		_getDialog: function(sFragmentName) {
			var oDialog = this._dialogs[sFragmentName];

			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(this.getView().getId(), "de.fis.bewerbungverwaltung.view.fragment." + sFragmentName, this);
				this.getView().addDependent(oDialog);
				this._dialogs[sFragmentName] = oDialog;
			}
			return oDialog;
		},

		_openDialog: function(sFragmentName) {
			this._currentDialog = this._getDialog(sFragmentName);
			this._currentDialog.open();
			return this._currentDialog;
		},

		_closeDialog: function() {
			this._currentDialog.close();
		},

		/**
		 * Creates a new fragment or returns an existing one
		 * Newly created fragments are stored in an array for later use
		 * 
		 * @param sFragmentName: The name of the fragment
		 * @return {sap.ui.xmlfragment}: The requested xml fragment
		 * @public
		 */
		_getFragment: function(sFragmentName) {
			var oFragment = this._fragments[sFragmentName];

			if (oFragment) {
				return oFragment;
			}

			oFragment = sap.ui.xmlfragment(this.getView().getId(), "de.fis.bewerbungverwaltung.view.fragment." + sFragmentName, this);
			this._fragments[sFragmentName] = oFragment;
			return oFragment;
		},

		/**
		 * Replaces the content in the container with
		 * the specified fragment
		 * (onInit --> _showFragment)
		 * ([event handlers for fragment buttons] --> _showFragment)
		 * 
		 * @param sFragmentName: The name of the fragment to show
		 * @param sContainerId: The id of the container whose content should be replaced
		 * @public
		 */
		_showFragment: function(sFragmentName, sContainerId) {
			var oContainer = this.getView().byId(sContainerId);

			oContainer.removeAllItems();
			oContainer.addItem(this._getFragment(sFragmentName));
		},

		/**
		 * Stores the selected Positions (Id and Name) in the dataModel of the View
		 * (for later use)
		 * (onDialogSave --> _handleEntityUpdatesForSelectedItems)
		 * 
		 * @param aSelectedItems: An array of the selected Items in the MultiComboBox
		 * @public
		 */
		_handleEntityUpdatesForSelectedItems: function(aSelectedItems, sEntitySetName, sEntityName) {
			var oModel = this.getModel("applmanModel");
			var sBindingPath = this.getView().getElementBinding("applmanModel").getPath();
			var applicationId = oModel.getProperty(sBindingPath + "/ApplicationId");

			var aPositions = this._getIdsOfEntities(sEntitySetName, sEntityName);
			var aNewItems = this._findNewItems(aSelectedItems, aPositions);
			var aRemovedItems = this._findRemovedItems(aSelectedItems, aPositions);

			this._removeLinks(oModel, {
				fromName: "Applications",
				fromIds: [applicationId],
				toName: sEntitySetName,
				toIds: aRemovedItems,
				reverse: true
			});

			this._createLinks(oModel, {
				fromName: "Applications",
				fromIds: [applicationId],
				toName: sEntitySetName,
				toIds: aNewItems,
				reverse: true
			});
		},

		_findNewItems: function(aSelectedItems, aEntities) {
			var aNewItems = [];

			// Find new Items
			for (var i = 0; i < aSelectedItems.length; i++) {
				var isNew = true;
				for (var j = 0; j < aEntities.length; j++) {
					if (aSelectedItems[i].getKey() === aEntities[j]) {
						isNew = false;
						break;
					}
				}
				if (isNew) {
					aNewItems.push(aSelectedItems[i].getKey());
				}
			}
			return aNewItems;
		},

		_findRemovedItems: function(aSelectedItems, aEntities) {
			var aRemovedItems = [];

			// Find removed Items
			for (var i = 0; i < aEntities.length; i++) {
				var isRemoved = true;
				for (var j = 0; j < aSelectedItems.length; j++) {
					if (aSelectedItems[j].getKey() === aEntities[i]) {
						isRemoved = false;
					}
				}
				if (isRemoved) {
					aRemovedItems.push(aEntities[i]);
				}
			}
			return aRemovedItems;
		},

		/**
		 * Removes the Links between Entities with the specified Ids
		 * (onDialogSave --> _handleEntityUpdatesForSelectedItems --> _removeLinks)
		 * (onDeleteApplication --> _removeLinks)
		 * 
		 * @param {object} oModel: An object of the ODataModel (v2)
		 * @param {object} oParameters: 
		 *				{string}  fromName:	The Name of the source EntitySet
		 *				{array}   fromIds:	Valid Id-Object for the source EntitySet
		 *				{string}  toName:	Name of the destination EntitySet
		 *				{array}   toIds:	Array of valid Id-Objects for the destination EntitySet
		 *				{boolean} reverse:	Wether the Link also should be applied in the reverse direction
		 * @private
		 */
		_removeLinks: function(oModel, oParameters) {
			for (var i = 0; i < oParameters.fromIds.length; i++) {
				for (var j = 0; j < oParameters.toIds.length; j++) {
					// Source -> Destination
					oModel.remove("/" + oParameters.fromName + "('" + oParameters.fromIds[i] + "')/$links/" + oParameters.toName + "('" + oParameters
						.toIds[j] + "')");
					// Destination -> Source
					if (oParameters.reverse) {
						oModel.remove("/" + oParameters.toName + "('" + oParameters.toIds[j] + "')/$links/" + oParameters.fromName + "('" + oParameters.fromIds[
							i] + "')");
					}
				}
			}
		},

		/**
		 * Creates the Links between Entities with the specified Ids
		 * (onDialogSave --> _handleEntityUpdatesForSelectedItems --> _createLinks)
		 * 
		 * @param {object} oModel: An object of the ODataModel (v2)
		 * @param {object} oParameters: 
		 *				{string}  fromName:	The Name of the source EntitySet
		 *				{array}   fromIds:	Valid Id-Object for the source EntitySet
		 *				{string}  toName:	Name of the destination EntitySet
		 *				{array}   toIds:	Array of valid Id-Objects for the destination EntitySet
		 *				{boolean} reverse:	Wether the Link also should be applied in the reverse direction
		 * @private
		 */
		_createLinks: function(oModel, oParameters) {
			var oLink;
			// Create the Links of the new Items 
			for (var i = 0; i < oParameters.fromIds.length; i++) {
				for (var j = 0; j < oParameters.toIds.length; j++) {
					//					var fromId = oModel.createKey(oParameters.toIds[j]);
					// Source -> Destination
					oLink = {
						"uri": this._serviceURI + "/" + oParameters.toName + "('" + oParameters.toIds[j] + "')"
					};
					oModel.create("/" + oParameters.fromName + "('" + oParameters.fromIds[i] + "')/$links/" + oParameters.toName, oLink);
					// Destination -> Source
					if (oParameters.reverse) {
						oLink = {
							"uri": this._serviceURI + "/" + oParameters.fromName + "('" + oParameters.fromIds[i] + "')"
						};
						oModel.create("/" + oParameters.toName + "('" + oParameters.toIds[j] + "')/$links/" + oParameters.fromName, oLink);
					}
				}
			}
		},

		_getIdsOfEntities: function(sEntitySetName, sEntityName) {
			var result = [];
			var oModel = this.getModel("applmanModel");
			var sBindingPath = this.getView().getElementBinding("applmanModel").getPath();
			var aEntities = oModel.getProperty(sBindingPath + "/" + sEntitySetName);

			for (var i = 0; i < aEntities.length; i++) {
				result.push(oModel.getProperty("/" + aEntities[i] + "/" + sEntityName + "Id"));
			}
			return result;
		}
	});

});
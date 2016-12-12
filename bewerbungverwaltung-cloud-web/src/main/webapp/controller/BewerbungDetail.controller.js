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

			this._currentDialog = {};
			this._dialogs = []; // this will store the instantiated dialogs 
			this._fragments = []; // this will store the instantiated fragments

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
					expand: "Positions,StatusDetails,ApplicantDetails"
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
			var oDialog = this._openDialog("DetailsBearbeiten");
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
		onDialogSave: function(oEvent) {
			var oModel = this.getModel("applmanModel");

			this._closeDialog();
			oModel.submitChanges(
				function() {
					sap.m.MessageToast.show("Successfully submitted changes");
				},
				function() {
					sap.m.MessageToast.show("Error on submitting changes");
				}
			);

			oModel.refresh();
			oModel.update();
		},
		onDialogCancel: function(oEvent) {
			this._closeDialog();
			this.getModel("applmanModel").resetChanges();
		},

		onDeleteStelle: function(oEvent) {
			var oModel = this.getModel("applmanModel");
			var oList = oEvent.getSource();
			var oListItem = oEvent.getParameter("listItem");
			var oContext = oListItem.getBindingContext("applmanModel");
			var sPath = oContext.getPath();

//			this._batchOperations.push(oModel.createBatchOperation(sPath, "DELETE"));
//			oModel.addBatchChangeOperations(this._batchOperations);

			oModel.remove(sPath);
			oModel.updateBindings();
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
		}

	});

});
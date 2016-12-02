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
			this._dialogs = [];		// this will store the instantiated dialogs 
			this._fragments = [];	// this will store the instantiated fragments

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
			var sBindingEntity = "testModel>/" + oEvent.getParameter("arguments").Bewerbung;

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
				parameters: {expand : "BewerbungStelleDetails/StelleDetails,StatusDetails,BewerberDetails"}
			});
		},

		/**
		 * Event handler for the "change" event of the bindElement function
		 * 
		 * @param oEvent: The change event
		 * @private
		 */
		_onBindingChange: function(oEvent) {
			var oElementBinding = this.getView().getElementBinding("testModel");
			this.getView().getModel("testModel").updateBindings();

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
			var oModel = this.getModel("testModel");
			var oBinding = this.getView().getElementBinding("testModel");
			var oContext = this.getView().getBindingContext("testModel");
			var oBewerber = oModel.getProperty("BewerberDetails", oContext);
			jQuery.sap.log.error(JSON.stringify(oBewerber));
			this._openDialog("DetailsBearbeiten");
		},
		onDetailsSave: function(oEvent) {
		},
		onDetailsCancel: function(oEvent) {
			this._closeDialog();
		},
		onKommentareEdit: function(oEvent) {
			this._openDialog("KommentareBearbeiten");
		},
		onKommentareSave: function(oEvent) {
		},
		onKommentareCancel: function(oEvent) {
			this._closeDialog();
		},
		onUnterlagenEdit: function(oEvent) {
			this._openDialog("UnterlagenBearbeiten");
		},
		onUnterlagenSave: function(oEvent) {
		},
		onUnterlagenCancel: function(oEvent) {
			this._closeDialog();
		},
		onUmlaufEdit: function(oEvent) {
			this._openDialog("UmlaufBearbeiten");
		},
		onUmlaufSave: function(oEvent) {
		},
		onUmlaufCancel: function(oEvent) {
			this._closeDialog();
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
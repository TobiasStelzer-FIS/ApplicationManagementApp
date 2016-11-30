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

			this._fragments = []; // this will store the instantiated fragments

			oRouter.getRoute("BewerbungDetail").attachPatternMatched(this._handleRouteMatched, this);

			this._showFragment("Details", "containerDetails");
			this._showFragment("Kommentare", "containerKommentare");
			this._showFragment("Unterlagen", "containerUnterlagen");
			this._showFragment("Umlauf", "containerUmlauf");
		},
		_handleRouteMatched: function(oEvent) {
			var sBindingEntity = "testModel>/Bewerbungs/" + oEvent.getParameter("arguments").Bewerbung;

			this._bindView(sBindingEntity);
		},
		_bindView: function(sObjectPath) {
			this.getView().bindElement({
				path: sObjectPath,
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function() {},
					dataReceived: function() {}
				}
			});
		},
		_onBindingChange: function(oEvent) {
			var oElementBinding = this.getView().getElementBinding("testModel");
			this.getView().getModel("testModel").updateBindings();

			// No data for the binding
			if (!oElementBinding) {
				//				this.getRouter().getTargets().display("DetailObjectNotFound");
				this.getRouter().navTo("DetailObjectNotFound");
			}
		},
		onNavButtonPressed: function(oEvent) {
			this.getRouter().navTo("BewerbungenMaster");
		},
		onExit: function() {

		},
		onAfterRendering: function() {

		},
		onBeforeRendering: function() {

		},

		/* =========================================================== */
		/* event handlers for the fragment buttons                     */
		/* =========================================================== */
		
		onDetailsEdit: function(oEvent) {
			this._showFragment("DetailsBearbeiten", "containerDetails");
		},
		onDetailsSave: function(oEvent) {
			this._showFragment("Details", "containerDetails");
		},
		onDetailsCancel: function(oEvent) {
			this._showFragment("Details", "containerDetails");
		},
		onKommentareEdit: function(oEvent) {
			this._showFragment("KommentareBearbeiten", "containerKommentare");
		},
		onKommentareSave: function(oEvent) {
			this._showFragment("Kommentare", "containerKommentare");
		},
		onKommentareCancel: function(oEvent) {
			this._showFragment("Kommentare", "containerKommentare");
		},
		onUnterlagenEdit: function(oEvent) {
			this._showFragment("UnterlagenBearbeiten", "containerUnterlagen");
		},
		onUnterlagenSave: function(oEvent) {
			this._showFragment("Unterlagen", "containerUnterlagen");
		},
		onUnterlagenCancel: function(oEvent) {
			this._showFragment("Unterlagen", "containerUnterlagen");
		},
		onUmlaufEdit: function(oEvent) {
			this._showFragment("UmlaufBearbeiten", "containerUmlauf");
		},
		onUmlaufSave: function(oEvent) {
			this._showFragment("Umlauf", "containerUmlauf");
		},
		onUmlaufCancel: function(oEvent) {
			this._showFragment("Umlauf", "containerUmlauf");
		},

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */
		
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
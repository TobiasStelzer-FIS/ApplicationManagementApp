sap.ui.define([], function() {
	"use strict";

	/*
	 * Use this file to implement your custom grouping functions
	 * The predefined functions are simple examples and might be replaced by your more complex implementations
	 * to be called with .bind() and handed over to a sap.ui.model.Sorter
	 * return value for all your functions is an object with  key-text pairs
	 * the oContext parameter is not under your control!
	 */

	return {

		groupStatus: function() {
			return function(oContext) {
				var iStatusId = oContext.getProperty("/StatusDetails/StatusId");
				var sBezeichnung = oContext.getProperty("/StatusDetails/Bezeichnung");

				return {
					key: iStatusId,
					text: sBezeichnung
				};
			};
		}

	};
});
sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/model/Sorter",
	"de/fis/bewerbungverwaltung/model/grouper"
], function(BaseObject, Sorter, grouper) {
	"use strict";

	return BaseObject.extend("de.fis.bewerbungverwaltung.model.GroupSortState", {

		/**
		 * Creates sorters and groupers for the master list.
		 * Since grouping also means sorting, this class modifies the viewmodel.
		 * If a user groups by a field, and there is a corresponding sort option, the option will be chosen.
		 * If a user ungroups, the sorting will be reset to the default sorting.
		 * @class
		 * @public
		 * @param {sap.ui.model.json.JSONModel} oViewModel the model of the current view
		 * @param {function} fnGroupFunction the grouping function to be applied
		 * @alias com.sap.espm.model.GroupSortState
		 */
		constructor: function(oViewModel, fnGroupFunction) {
			this._oViewModel = oViewModel;
			this._fnGroupFunction = fnGroupFunction;
		},

		/**
		 * Sorts by Name, or by Price
		 *
		 * @param {string} sKey - the key of the field used for grouping
		 * @returns {sap.ui.model.Sorter[]} an array of sorters
		 */
		sort: function(sKey, bDescending) {
			if (bDescending === undefined) {
				bDescending = false;
			}
			var sGroupedBy = this._oViewModel.getProperty("/groupBy");

			if (sGroupedBy !== "None") {
				// If the list is grouped, remove the grouping since the user wants to sort by something different
				// Grouping only works if the list is primary sorted by the grouping - the first sorten contains a grouper function
				this._oViewModel.setProperty("/groupBy", "None");
			}

			return [new Sorter(sKey, bDescending)];
		},

		/**
		 * Groups by Status, or resets the grouping for the key "None"
		 *
		 * @param {string} sKey - the key of the field used for grouping
		 * @returns {sap.ui.model.Sorter[]} an array of sorters
		 */
		group: function(sKey, bDescending) {
			if (bDescending === undefined) {
				bDescending = false;
			}
			var aSorters = [];
			
			jQuery.sap.log.error("sKey: " + sKey);
			jQuery.sap.log.error("descending: " + bDescending);

			var fnGroupFunction;
			switch (sKey) {
				case "StatusDetails/StatusId":
					fnGroupFunction = grouper.groupStatus;
					break;
				case "None":
					// select the default sorting again
					this._oViewModel.setProperty("/sortBy", "EingetragenAm");
					return [new Sorter("EingetragenAm", bDescending)];
			}

			// Grouping means sorting so we set the select to the same Entity used for grouping
			this._oViewModel.setProperty("/sortBy", sKey);

			aSorters.push(
				new Sorter(sKey, bDescending,
					fnGroupFunction.bind(this))
			);

			return aSorters;
		}

	});
});
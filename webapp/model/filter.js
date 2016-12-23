sap.ui.define([], function() {
	"use strict";
	
	/* Custom filter functions */

	return {

		fnFilterStellen: function(oPath) {
			var aFilterPositions = this.getModel("masterView").getProperty("/filterPositions");
			var i = 0;

			for (i = 0; i < oPath.length; i++) { // Enthält aFilterStellen eine der Stellen des Items ?
				var j = 0;
				for (j = 0; j < aFilterPositions.length; j++) {
					if (oPath[i].includes(aFilterPositions[j])) {
						return true;
					}
				}
			}
			return false;
		}

	};
});
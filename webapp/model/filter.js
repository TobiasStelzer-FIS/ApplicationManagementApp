sap.ui.define([], function() {
	"use strict";
	
	/* Custom filter functions */

	return {

		fnFilterStellen: function(oPath) {
			var aFilterStellen = this.getModel("masterView").getProperty("/filterStellen");
			var i = 0;

			for (i = 0; i < oPath.length; i++) { // Enthält aFilterStellen eine der Stellen des Items ?
				var j = 0;
				for (j = 0; j < aFilterStellen.length; j++) {
					if (aFilterStellen[j] == oPath[i].Stelle) {
						return true;
					}
				}
			}
			return false;
		}

	};
});
sap.ui.define([], function() {
	"use strict";
	
	/* Custom filter functions */

	return {

		fnFilterStellen: function(oPath) {
			jQuery.sap.log.error("---- _fnFilterStellen ----");
			var aFilterStellen = this.getModel("masterView").getProperty("/filterStellen");
			var i = 0;
			/*
			jQuery.sap.log.error(" Stellen:");
			for(i = 0; i < oPath.length; i++) {
				jQuery.sap.log.error("   " + oPath[i].Stelle);
			}
			jQuery.sap.log.error(" filterStellen:");
			for(i = 0; i < aFilterStellen.length; i++) {
				jQuery.sap.log.error("   " + aFilterStellen[i]);
			}
			*/
			for (i = 0; i < oPath.length; i++) { // Enthält aFilterStellen eine der Stellen des Items ?
				var j = 0;
				for (j = 0; j < aFilterStellen.length; j++) {
					jQuery.sap.log.error("  " + aFilterStellen[j] + " == " + oPath[i].Stelle);
					if (aFilterStellen[j] == oPath[i].Stelle) {
						return true;
					}
				}
			}
			return false;
		}

	};
});
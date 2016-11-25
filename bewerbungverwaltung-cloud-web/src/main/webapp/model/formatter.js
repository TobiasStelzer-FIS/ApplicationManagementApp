sap.ui.define(function() {
	"use strict";

	return {

		formatStatus: function(status) {
			switch (status) {
				case "Eingeladen":
				case "Eingestellt":
					return "Success";

				case "Offen":
					return "Warning";

				case "Abgelehnt":
					return "Error";
			}
		},

		formatDatum: function(date) {
			if (date == null) {
				return "";
			}
			var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY
			var millis = date.substring(6, 19);
			millis -= millis % msPerDay;
			var result = new Date(parseInt(millis));

			var theyear = result.getFullYear();
			var themonth = result.getMonth() + 1;
			var theday = result.getDate();

			return (theday + "." + themonth + "." + theyear);
		},

		formatZeitstempel: function(timestamp) {
			if (timestamp == null) {
				return "";
			}
			var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY
			var millis = timestamp.substring(6, 19);
			millis -= millis % msPerDay;
			var result = new Date(parseInt(millis));

			var theyear = result.getFullYear();
			var themonth = result.getMonth() + 1;
			var theday = result.getDate();
			var thehour = result.getHours();
			var theminute = result.getMinutes();
			var thesecond = result.getSeconds();
			
			return (theday + "." + themonth + "." + theyear);
//			return (theday + "." + themonth + "." + theyear + " " + thehour + ":" + theminute + ":" + thesecond);
		},

		formatTage: function(date) {
			var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY

			var millis = parseInt(date.substring(6, 19));
			millis -= millis % msPerDay;
			var eingetragenAm = new Date(millis);
			millis = Date.now();
			millis -= millis % msPerDay; // abrunden auf 00:00 Uhr des Tages
			var today = new Date(millis);

			return Math.trunc((today - eingetragenAm) / msPerDay);
		}

	};
});
sap.ui.define(function() {
	"use strict";

	return {

		formatImageURI: function(applicationId) {
//			return "https://applmanserverp1942281469trial.hanatrial.ondemand.com/applman/picture?applicationId=theApplicationId&filename=Pikachu.png";
			var uri;
			var picture = this.getModel("applmanModel").getProperty("/Applications('"+applicationId+"')/ApplicantDetails/Picture");
			if (!applicationId) {
				uri = "";
			} else {
				uri = "/applman/picture/" + applicationId + "/" + picture;
			}
			return uri;
		},
		
		formatDatum: function(date) {
			if (date == null) {
				return "";
			}
			var result;
			if (date instanceof Date) {
				result = date;
			} else {
				var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY
				var millis = date.substring(6, 19);
				millis -= millis % msPerDay;
				result = new Date(parseInt(millis));
			}

			var theyear = result.getFullYear();
			var themonth = result.getMonth() + 1;
			var theday = result.getDate();

			return (theday + "." + themonth + "." + theyear);
		},

		formatZeitstempel: function(timestamp) {
			if (timestamp == null) {
				return "";
			}
			var result;
			if (timestamp instanceof Date) {
				result = timestamp;
			} else {
				var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY
				var millis = timestamp.substring(6, 19);
				millis -= millis % msPerDay;
				result = new Date(parseInt(millis));
			}

			var theyear = result.getFullYear();
			var themonth = result.getMonth() + 1;
			var theday = result.getDate();
			var thehour = result.getHours();
			var theminute = result.getMinutes();
			var thesecond = result.getSeconds();

			return (theday + "." + themonth + "." + theyear);
			//			return (theday + "." + themonth + "." + theyear + " " + thehour + ":" + theminute + ":" + thesecond);
		},

		formatTage: function(sI18nKey, date) {
			var msPerDay = 1000 * 60 * 60 * 24; // 1000 * 60 * 60 * 24 == MS_PER_DAY
			var eingetragenAm;
			var millis;
			if (date instanceof Date) {
				eingetragenAm = date;
			} else {
				millis = parseInt(date.substring(6, 19));
				millis -= millis % msPerDay;
				var eingetragenAm = new Date(millis);
			}

			millis = Date.now();
			millis -= millis % msPerDay; // abrunden auf 00:00 Uhr des Tages
			var today = new Date(millis);

			var result = Math.trunc((today - eingetragenAm) / msPerDay);

			return jQuery.sap.formatMessage(sI18nKey, result);
		}

	};
});
sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Text"
], function(Control, Text) {
	"use strict";

	return Control.extend("de.fis.bewerbungverwaltung.control.SimpleList", {

		metadata: {
			properties: {
				title: {
					type: "String",
					defaultValue: ""
				}
			},
			defaultAggregation: "items",
			aggregations: {
				items: {
					multiple: true,
					visibility: "public",
					singularName: "item",
					bindable: "bindable"
				}
			},
			events: {}
		},

		init: function() {

		},

		renderer: function(oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("mySimpleList");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("<ul>");
			
			if (oControl.getTitle !== "") {
				var oTitle = new Text();
				oTitle.setText(oControl.getTitle());
				oRm.write("<b>");
				oRm.renderControl(oTitle);
				oRm.write("</b>");
			}

			var aChildren = oControl.getItems();

			for (var i = 0; i < aChildren.length; i++) { // loop over all child Controls
				oRm.write("<li>");
				//				oRm.writeStyles();
				oRm.renderControl(aChildren[i]);
				oRm.write("</li>");
			}
			oRm.write("</ul>");

			oRm.write("</div>");
		}
	});

});
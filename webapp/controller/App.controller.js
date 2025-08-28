sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.customerregistrationview.controller.App", {
		onInit: function () {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			// Add error handling for routing
			oRouter.attachBypassed(function(oEvent) {
				console.log("Route bypassed:", oEvent.getParameter("hash"));
			});

			// Navigate to main view if no hash is set
			if (!window.location.hash || window.location.hash === "#") {
				setTimeout(function() {
					oRouter.navTo("RouteMain");
				}, 100);
			}
		}
	});
});

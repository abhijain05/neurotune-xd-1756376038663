sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/library"
], function (Controller, JSONModel, MessageToast, coreLibrary) {
	"use strict";

	// Shortcut for sap.ui.core.MessageType
	const MessageType = coreLibrary.MessageType;

	return Controller.extend("converted.customerregistrationview.controller.CustomerRegistrationView", {
		onInit: function () {
			// Initialize the model with mock data (replace with your actual data loading)
			const oData = {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
				companyName: "",
				jobTitle: "",
				address: "",
				termsAndConditions: false
			};
			const oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

      // Add a message model for the message area
      var oMessageModel = new JSONModel({ messages: [] });
      this.getView().setModel(oMessageModel, "messages");

		},

		onSubmit: function () {
			const oModel = this.getView().getModel();
			const oData = oModel.getData();

			// Email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(oData.email)) {
				MessageToast.show("Invalid email address");
				return;
			}

			// Terms and conditions check
			if (!oData.termsAndConditions) {
				MessageToast.show("Please accept the Terms and Conditions");
				return;
			}

			// Submit the data (replace with actual submission logic)
      const oMessageModel = this.getView().getModel("messages");
			oMessageModel.getData().messages.push({
				type: MessageType.Success,
				title: "Success",
				description: "Registration successful!"
			});
			oMessageModel.refresh(true);

			MessageToast.show("Registration Successful!");
			oModel.setData({
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
				companyName: "",
				jobTitle: "",
				address: "",
				termsAndConditions: false
			});
		}
	});
});

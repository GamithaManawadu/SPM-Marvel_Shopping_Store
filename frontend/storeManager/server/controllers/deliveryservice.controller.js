const DeliveryService = require("../models/DeliveryService");
//const { hashPassword } = require("../helpers/passwordHash");

const getAllDeliveryServices = async (request, response) => {
	try {
		const allDeliveryServices = await DeliveryService.find();
		response.status(200).json({ deliveryservices: allDeliveryServices });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const addDeliveryService = async (request, response) => {
	if (request.body) {
		//request.body.password = await hashPassword(request.body.password);
		const newDeliveryService = new DeliveryService(request.body);
		try {
			await newDeliveryService.save();
			response.status(200).json({ id: newDeliveryService.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

const getDeliveryServiceDetails = async (request, response) => {
	try {
		const { id, dservicename, contactno, email, noofvehicles, noofdrivers, chargeperkm, startdate, updatedate } =
			await DeliveryService.findById(request.userId);
		const deliveryserviceDetails = { id, dservicename, contactno, email, noofvehicles, noofdrivers, chargeperkm, startdate, updatedate };
		response.status(200).json({ buyer: deliveryserviceDetails });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

module.exports = { getAllDeliveryServices, addDeliveryService, getDeliveryServiceDetails };
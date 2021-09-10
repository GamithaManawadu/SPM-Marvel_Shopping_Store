import React from "react";
import AddDeliveryService from "../components/DeliveryDashboard/AddDeliveryServiceForm";
import '../pages/styles/DeliveryService.css';


const Add_DeliveryService = () => {
	document.title = "MARVEL | Delivery Manager";
	return (
		<div>
			<AddDeliveryService/>
		</div>
	);
};

export default Add_DeliveryService;
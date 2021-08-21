import React from "react";
import DeliveryServices from "../components/DeliveryDashboard/DeliveryServices";
import '../pages/styles/DeliveryService.css';


const Delivery_Services = () => {
	document.title = "MARVEL | Delivery Manager";
	return (
		<div>
			<DeliveryServices/>
		</div>
	);
};

export default Delivery_Services;
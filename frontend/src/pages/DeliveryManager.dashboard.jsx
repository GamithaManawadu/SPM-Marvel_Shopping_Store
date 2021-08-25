import React from "react";
import DeliveryDashboard from "../components/DeliveryDashboard/DeliveryDashboard";
//import AddDeliveryService from "../components/DeliveryDashboard/AddDeliveryServiceForm";
import '../pages/styles/Editor.css';


const Delivery_dash = () => {
	document.title = "MARVEL | Delivery Manager";
	return (
		<div className="editor">
			<DeliveryDashboard/>
		</div>
	);
};

export default Delivery_dash;
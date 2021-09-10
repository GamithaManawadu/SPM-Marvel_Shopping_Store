import React from "react";
import CustomerDelivery from "../components/DeliveryDashboard/CustomerDelivery";
import '../pages/styles/Editor.css';


const Delivery_customer = () => {
	document.title = "MARVEL | Customer";
	return (
		<div className="editor">
			<CustomerDelivery/>
		</div>
	);
};

export default Delivery_customer;
import React from "react";
import DeliveryServices from "../components/DeliveryDashboard/DeliveryServices";
import '../pages/styles/DeliveryService.css';
//import ReactDOM from 'react-dom';


const Delivery_Services = () => {
	document.title = "MARVEL | Delivery Manager";
	return (
		<div>
			<DeliveryServices/>
		</div>
	);
	// ReactDOM.render(
	// 	<React.StrictMode>
	// 	  <DeliveryServices/>
	// 	</React.StrictMode>,
	// 	document.getElementById('root')
	// );
};

export default Delivery_Services;
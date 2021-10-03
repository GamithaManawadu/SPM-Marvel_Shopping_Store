import React from "react";
import CustomerProfile from "../components/profile/CustomerProfile";
import CustomerDetail from "../components/profile/CustomerDetail";
import "./styles/Researcher.css";

const Attendee = () => {
	document.title = "MARVEL | Customer Profile";
	return (
		<div>
			<CustomerProfile />
			

		</div>
	);
};

export default Attendee;

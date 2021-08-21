import React from "react";
import CustomerProfile from "../components/profile/CustomerProfile";
import AttendeeProfile from "../components/profile/CustomerProfile";

const Attendee = () => {
	document.title = "MARVEL | Customer Profile";
	return (
		<div>
			<CustomerProfile />
		</div>
	);
};

export default Attendee;

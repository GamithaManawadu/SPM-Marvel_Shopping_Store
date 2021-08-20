import React from "react";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";

import '../pages/styles/Editor.css';


const Admin_dash = () => {
	document.title = "MARVEL | Admin Manager";
	return (
		<div className="editor">
			
			<AdminDashboard/>
			
			
			
		</div>
	);
};

export default Admin_dash;
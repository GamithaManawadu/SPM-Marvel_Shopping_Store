import React from "react";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";

import "../pages/styles/Editor.css";

const Admin_dash = () => {
  document.title = "MARVEL | Admin Manager";
  return (
    <div className="editor">
      <AdminDashboard />
    </div>
	<div className="home">
	<FeatureInfo />
	{/*<div className="homeWidget">
	  <Chart />
	  <Table />
</div>*/}
	<Features />
  </div>
  );
};


export default Admin_dash;
import React, { useState, useEffect } from "react";

import ResearcherProfile from "../components/profile/ResearcherProfile";

import "./styles/Researcher.css";

const Researcher = () => {
	document.title = "ICAF | Researcher";
	return <ResearcherProfile />;
};

export default Researcher;

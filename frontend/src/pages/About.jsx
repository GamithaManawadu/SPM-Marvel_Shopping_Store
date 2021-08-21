import React from "react";

import Timeline from "../components/about/Timeline";
import Footer from "../components/footer/Footer";
import LatestNews from "../components/about/LatestNews";

import "./styles/About.css";

const About = () => {
	document.title = "MARVEL | ABOUT US";

	return (
		<div className="about-content">
			<LatestNews />
			<Timeline />
			<Footer />
		</div>
	);
};

export default About;
<h1>About</h1>;

import React from "react";
import { motion } from "framer-motion";

import TitleContent from "../components/home/TitleContent";
import SpeakerContent from "../components/home/SpeakerContent";
import Countdown from "../components/home/Countdown";
import Footer from "../components/footer/Footer";

import "./styles/Home.css";
import LandingImg from "../../src/assets/images/title.png";


const Home = () => {
	document.title = "MARVEL FASHION | Home";

	return (
		<>
			<motion.div
				className="home-content"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				
				<div className="banner-container">
					<img src={LandingImg} alt="landing-image" />
				</div>
				
				<TitleContent />
				<Countdown />
				<SpeakerContent />
				
				
			</motion.div>
			<Footer />
		</>
	);
};

export default Home;

import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";

import SpeakerCard from "./SpeakerCard";
import { BASE_URL } from "../../config/config";
import "./Grid.css"
import Quality from "../../assets/images/Quality1.png"
import Price from "../../assets/images/price.png"
import Call from "../../assets/images/call.png"
import Delivery from "../../assets/images/Delivery.png"

const SpeakerContent = () => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/conference`);
		const data = await res.json();
		setSpeakers(data.conference[0]);
	}, []);

	return (
		<>
		<div className="topic">
			<MdFormatQuote className="quote-icon" />
			<h1>Our Exclusive Services</h1>
			
			<div className="speaker-card-content">
			<div class="gallery">
  <a target="_blank" href="Quality.png">
  <img src={Quality} alt="Cinque Terre" width="300" height="200"/>
  </a>
  <div class="desc">Quality Designs</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
  <img src={Price} alt="Cinque Terre" width="300" height="200"/>
  </a>
  <div class="desc">Best Prices</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
  <img src={Call} alt="Cinque Terre" width="300" height="200"/>  
  </a>
  <div class="desc">24/7 Customer Support</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
  <img src={Delivery} alt="Cinque Terre" width="300" height="200"/>  
  </a>
  <div class="desc">Islandwide Delivery </div>
</div>
			</div>
			</div>
		</>
	);
};

export default SpeakerContent;

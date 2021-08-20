import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";

import SpeakerCard from "./SpeakerCard";
import { BASE_URL } from "../../config/config";

const SpeakerContent = () => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/conference`);
		const data = await res.json();
		setSpeakers(data.conference[0]);
	}, []);

	return (
		<section className="speaker-content">
			<MdFormatQuote className="quote-icon" />
			<h1>Our Exclusive Services</h1>
			<div className="speaker-card-content">
				
			</div>
		</section>
	);
};

export default SpeakerContent;

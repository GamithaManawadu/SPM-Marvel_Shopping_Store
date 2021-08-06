import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BASE_URL } from "../../config/config";
import WorkshopPublicationCard from "../common/WorkshopPublicationCard";

const WorkshopList = () => {
	const [workshops, setWorkshops] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/workshop/approved`);
		const data = await res.json();
		setWorkshops(data.approvedWorkshops);
	}, []);

	return (
		<div>
			<h1>Workshops</h1>
			<motion.div
				className="event-card-content"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 1 }}
			>
				{workshops.map((workshop) => {
					return <WorkshopPublicationCard event={workshop} />;
				})}
			</motion.div>
		</div>
	);
};

export default WorkshopList;

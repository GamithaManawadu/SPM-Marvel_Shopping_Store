import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BASE_URL } from "../../config/config";
import WorkshopPublicationCard from "../common/WorkshopPublicationCard";

const PublicationList = () => {
	const [publications, setPublications] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/publication/approved`);
		const data = await res.json();
		setPublications(data.approvedPublications);
	}, []);

	return (
		<div>
			<h1>Research Publications</h1>
			<motion.div
				className="event-card-content"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 1 }}
			>
				{publications.map((workshop) => {
					return <WorkshopPublicationCard event={workshop} />;
				})}
			</motion.div>
		</div>
	);
};

export default PublicationList;

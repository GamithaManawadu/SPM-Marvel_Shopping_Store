import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { BASE_URL } from "../config/config";
import DownloadCard from "../components/download/DownloadCard";

import "./styles/Download.css";

const Download = () => {
	const [downloads, setDownloads] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/download`);
		const data = await res.json();
		setDownloads(data.downloads);
	}, []);

	return (
		<div className="downloads-content">
			<h1>Downloads</h1>
			<motion.div
				className="download-cards-content"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				{downloads.map((download) => {
					return <DownloadCard download={download} key={download._id} />;
				})}
			</motion.div>
		</div>
	);
};

export default Download;

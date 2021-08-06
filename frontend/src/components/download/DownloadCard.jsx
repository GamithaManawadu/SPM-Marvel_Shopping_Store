import React from "react";
import { Link } from "react-router-dom";

const DownloadCard = ({ download }) => {
	return (
		<div className="download-card">
			<img src="" alt="" />
			<h3>{download.name}</h3>
			<Link
				className="pay download"
				to={{
					pathname: download.src,
				}}
				target="blank"
			>
				Download
			</Link>
		</div>
	);
};

export default DownloadCard;

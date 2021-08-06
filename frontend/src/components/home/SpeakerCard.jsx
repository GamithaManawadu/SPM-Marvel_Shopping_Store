import React from "react";

const SpeakerCard = ({ speaker }) => {
	return (
		<div className="speaker-card">
			<div className="img-container">
				<img src={speaker.src} alt={`${speaker.name}-image`} />
			</div>
			<h2>{speaker.name}</h2>
			<p>{speaker.description}</p>
		</div>
	);
};

export default SpeakerCard;

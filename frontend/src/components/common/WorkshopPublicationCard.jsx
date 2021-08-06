import React from "react";
import { Link } from "react-router-dom";

const WorkshopPublicationCard = ({ event }) => {
	return (
		<div className="event-card">
			<div className="event-details">
				<h2>{event.topic}</h2>
				<div className="conductor-details">
					<h3 className={!event.dueDate && "grey"}>
						{event.dueDate ? "Conduct" : "Published"} By{" "}
						{event.createdBy.firstName + " " + event.createdBy.lastName}
					</h3>
				</div>
				{event.dueDate ? (
					<p>
						On{" "}
						{new Date(event.dueDate).toDateString() +
							" " +
							new Date(event.dueDate).toLocaleTimeString()}
					</p>
				) : (
					<Link
						to={{
							pathname: event.src,
						}}
						target="blank"
					>
						Download
					</Link>
				)}
			</div>
		</div>
	);
};

export default WorkshopPublicationCard;

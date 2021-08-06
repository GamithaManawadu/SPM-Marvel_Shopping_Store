import React from "react";
import { Link } from "react-router-dom";

const UserItemCard = ({ publication }) => {
	return (
		<div className="item-card">
			<div className="item-text-content">
				<h2>{publication.topic}</h2>
				<p>
					{publication.dueDate
						? `Due Time - ${new Date(
								publication.dueDate
						  ).toDateString()} - ${new Date(
								publication.dueDate
						  ).toLocaleTimeString()}`
						: `Payment Status - ${!publication.isPaid ? "Not Paid" : "Paid"}`}
				</p>
				<p>
					Approval Status -{" "}
					<span
						className={
							publication.isApproved === "rejected"
								? "red"
								: publication.isApproved === "approved"
								? "green"
								: "blue"
						}
					>
						{publication.isApproved}
					</span>
				</p>
				<p className="light">
					Submitted on - {new Date(publication.createdAt).toDateString()}
				</p>
			</div>
			<div className="item-action-content">
				{!publication.dueDate &&
					publication.isApproved === "approved" &&
					!publication.isPaid && (
						<Link className="pay" to={`publication/pay/${publication._id}`}>
							Pay
						</Link>
				)}
				<Link
					to={{
						pathname: publication.src,
					}}
					target="blank"
				>
					Download
				</Link>
			</div>
		</div>
	);
};

export default UserItemCard;

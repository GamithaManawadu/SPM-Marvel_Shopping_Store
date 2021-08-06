import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import "../../pages/Researcher";
import PublicationCard from "../common/UserItemCard";
import ProfileCard from "./ProfileCard";

const ResearcherProfile = () => {
	const [publications, setPublications] = useState([]);
	const [profile, setProfile] = useState({});

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/publication/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const data = await res.json();
		setPublications(data);

		const result = await fetch(`${BASE_URL}/researcher/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const profile = await result.json();
		setProfile(profile.researcher);
	}, []);

	return (
		<div className="researcher-profile">
			<div className="profile-container">
				<ProfileCard profile={profile} />
				<Link className="add-new" to="/publication/create">
					Add new Research 
				</Link>
			</div>
			<h1>Your Research Uploads</h1>
			<motion.div
				className="publications"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
			>
				{publications.map((publication) => {
					return (
						<PublicationCard publication={publication} key={publication._id} />
					);
				})}
			</motion.div>
		</div>
	);
};

export default ResearcherProfile;

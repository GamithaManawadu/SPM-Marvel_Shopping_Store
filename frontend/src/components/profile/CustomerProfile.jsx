import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";

import ProfileCard from "./ProfileCard";
import Detail from "./Detail";

const CustomerProfile = () => {
	const [profile, setProfile] = useState({});

	document.title = "MARVEL | Customer";

	useEffect(async () => {
		console.log(getUserToken());
		const result = await fetch(`${BASE_URL}/customer/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const profile = await result.json();
		setProfile(profile.customer);
	}, []);
	return (
		<div className="researcher-profile">
			<div className="profile-container">
				<ProfileCard profile={profile} />
				<Link className="add-new" to="/auth/user/customer/profile">
					Edit My Profile
				</Link>
			</div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
			>

			<Detail profile={profile} />
				
			</motion.div>

		</div>
	);
};

export default CustomerProfile;

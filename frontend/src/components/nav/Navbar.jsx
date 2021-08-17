import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/images/marvel.gif";
import { deleteUserAuth, getUserType } from "../../auth/userAuth";
import { RegisterDataContext } from "../../context/RegisterFormContext";
import NotificationList from "../notification/NotificationList";

import "../../pages/styles/Notification.css";
import "../../pages/styles/Navbar.css"

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const { isLogin, setIsLogin } = useContext(RegisterDataContext);
	const [notificationTray, setNotificationTray] = useState("");

	return (
		<motion.header
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
		>
			
			<Link to="/">
				<img src={logo} alt="nav-logo" className="nav-logo"  />
			</Link>
			<nav id={isMobile ? "menu-open" : ""} onClick={() => setIsMobile(false)} className="navbar-container">
				{!isLogin ? (
					<Link to="/">Home</Link>
				) : (
					<Link to={`/auth/user/${getUserType()}/dashboard`}>Dashboard</Link>
				)}
				<Link to="/workshops">Products</Link>
				<Link to="/publications">About</Link>
				<Link to="/blogs">Contact</Link>
				<Link to="/downloads">Blogs</Link>
			</nav>
			<div
				className="nav-cta"
				id={isMobile ? "menu-open" : ""}
				onClick={() => setIsMobile(false)}
			>
				{!isLogin ? (
					<div className="nav-cta" id={isMobile ? "menu-open-cta" : ""}>
						<Link to="/auth/login">Login</Link>
						<Link to="/auth/register" className="active">
							Register
						</Link>
						
					</div>
				) : (
					<div className="login-cta">
						<IoNotificationsSharp
							className="notification"
							onClick={() => {
								!notificationTray
									? setNotificationTray("open")
									: setNotificationTray("");
							}}
						/>
						<NotificationList className="active" />
						<Link
							className="active"
							to="/"
							onClick={() => {
								deleteUserAuth();
								setIsLogin(false);
							}}
						>
							Logout
						</Link>
					</div>
				)}
			</div>
			<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
			
		</motion.header>
	);
};

export default Navbar;

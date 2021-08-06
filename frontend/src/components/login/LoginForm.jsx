import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL } from "../../config/config";
import { saveUserAuth } from "../../auth/userAuth";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState({
		username: "",
		password: "",
		userType: "",
	});
	const [disabled, setDisabled] = useState(false);
	const { setIsLogin } = useContext(RegisterDataContext);
	const history = useHistory();

	useEffect(() => {
		if (
			loginUser.username.includes("@admin") ||
			loginUser.username.includes("@reviewer") ||
			loginUser.username.includes("@editor")
		) {
			setDisabled(true);
		}
	}, [loginUser.username]);

	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginUser),
		});
		const userAuth = await response.json();

		if (userAuth.authToken) {
			let location;

			switch (userAuth.userType) {
				case "admin":
					location = "user/admin/dashboard";
					break;
				case "editor":
					location = "user/editor/dashboard";
					break;
				case "reviewer":
					location = "user/reviewer/dashboard";
					break;
				case "attendee":
					location = "user/attendee/dashboard";
					break;
				case "researcher":
					location = "user/researcher/dashboard";
					break;
				case "presenter":
					location = "user/presenter/dashboard";
					break;
			}

			saveUserAuth(userAuth.authToken, userAuth.userType, userAuth.id);
			setIsLogin(true);
			localStorage.setItem("isLogin", true);
			history.push(location);
		} else {
			toast.error("Your username or password is invalid");
		}
	};

	return (
		<div className="login-content">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<h1>Login</h1>
			<motion.form
				className="login-form"
				onSubmit={handleLogin}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="username">Username</label>
					<input
						type="username"
						name="username"
						id="username"
						required
						autoComplete="off"
						value={loginUser.username}
						onChange={(e) => {
							setLoginUser({ ...loginUser, username: e.target.value });
						}}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={loginUser.password}
						required
						autoComplete="off"
						onChange={(e) =>
							setLoginUser({ ...loginUser, password: e.target.value })
						}
					/>
				</motion.div>
				<motion.div
					className="user-type-selection"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
				>
					<div className="researcher">
						<input
							type="radio"
							name="user-type"
							id="researcher"
							value="researcher"
							required
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "researcher" })
							}
							disabled={disabled}
						/>
						<label htmlFor="researcher">Researcher</label>
					</div>
					<div className="presenter">
						<input
							type="radio"
							name="user-type"
							id="presenter"
							value="presenter"
							required
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "presenter" })
							}
							disabled={disabled}
						/>
						<label htmlFor="presenter">Presenter</label>
					</div>
					<div className="attendee">
						<input
							type="radio"
							name="user-type"
							id="attendee"
							value="attendee"
							required
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "attendee" })
							}
							disabled={disabled}
						/>
						<label htmlFor="attendee">Attendee</label>
					</div>
				</motion.div>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
				>
					Haven't registered yet ?
					<Link to="/auth/register" className="register-now">
						Register
					</Link>
				</motion.p>
				<motion.button
					type="submit"
					className="gradient-cta"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
				>
					Login
				</motion.button>
			</motion.form>
		</div>
	);
};

export default LoginForm;

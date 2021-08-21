import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { FaUserAlt,FaExpeditedssl } from "react-icons/fa";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { setCurrentStep, userData, setUserData } =
		useContext(RegisterDataContext);

	return (
		<div className="register-content">
			
			<form
				className="login-form"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<div
					className="user-credentials"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<center><h2>Sign Up To a New Account</h2></center>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="first-name">First Name <FaUserAlt/></label>
							<input
								type="text"
								placeholder="Enter Your First Name"
								name="first-name"
								id="first-name"
								required
								autoComplete="off"
								value={userData.firstName}
								onChange={(e) =>
									setUserData({ ...userData, firstName: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="last-name">Last Name</label>
							<input
								type="text"
								placeholder="Enter Your Last Name"
								name="last-name"
								id="last-name"
								required
								autoComplete="off"
								value={userData.lastName}
								onChange={(e) =>
									setUserData({ ...userData, lastName: e.target.value })
								}
							/>
						</div>
					</div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Enter Your User Name "
						id="username"
						required
						autoComplete="off"
						value={userData.username}
						onChange={(e) =>
							setUserData({ ...userData, username: e.target.value })
						}
					/>
					<label htmlFor="password">Password <FaExpeditedssl/></label>
					<input
						type="password"
						name="password"
						placeholder="Enter Your Password"
						id="password"
						required
						autoComplete="off"
						value={userData.password}
						onChange={(e) =>
							setUserData({ ...userData, password: e.target.value })
						}
					/>
				</div>
				<div
					className="user-type-selection"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
				>
					<label id="no-left-padding">How Do You Want To Sign Up?</label>
					
					<div className="attendee">
						<input
							type="radio"
							name="user-type"
							id="customer"
							value="customer"
							required
							defaultChecked={userData.userType === "customer" && true}
							onChange={() =>
								setUserData({ ...userData, userType: "customer" })
							}
						/>
						<label htmlFor="customer">As a Customer</label>
					</div>
				</div>
				<p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
				>
					Already have an account ?
					<Link to="/auth/login" className="register-now">
						Login
					</Link>
				</p>
				<button
					className="gradient-cta"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
					onClick={() => {
						setCurrentStep(2);
					}}
				>
					Procced to Next 
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;

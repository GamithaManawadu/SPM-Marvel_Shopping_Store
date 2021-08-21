import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCcVisa,FaCcAmex,FaCcMastercard,FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
import { RegisterDataContext } from "../../context/RegisterFormContext";
import { BASE_URL } from "../../config/config";


const CustomerForm = () => {
	const { setCurrentStep, setUserData, userData } =
		useContext(RegisterDataContext);
	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		
		try {
			const response = await fetch(`${BASE_URL}/customer/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				toast.success("Your account has been created");
				history.push("/auth/login");
			} else {
				toast.error("Sorry, something went wrong");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="register-content">
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
			
			<form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<h2>Customer Registration</h2>
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="email">Email <FaEnvelope/></label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="john@example.com"
						required
						autoComplete="off"
						value={userData.email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<label htmlFor="mobile-number">Contact Number <FaPhoneSquareAlt/></label>
					<input
						type="tel"
						name="mobile-number"
						id="mobile-number"
						required
						maxLength="10"
						autoComplete="off"
						value={userData.contactNumber}
						onChange={(e) =>
							setUserData({ ...userData, contactNumber: e.target.value })
						}
					/>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="address">Home Address <FaCcVisa className="icon"/><FaCcMastercard/><FaCcAmex/></label>
							<input
								type="text"
								name="address"
								id="address"
								maxLength="36"
								placeholder="address"
								required
								autoComplete="off"
								value={userData.address}
								onChange={(e) =>
									setUserData({ ...userData, address: e.target.value })
								}
							/>
						</div>
						
					</div>

					
					</div>
				
				<div className="button-container">
					<button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={() => setCurrentStep(1)}
					>
						Back
					</button>
					<button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={handleRegister}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default CustomerForm;

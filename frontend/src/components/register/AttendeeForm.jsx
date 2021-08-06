import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RegisterDataContext } from "../../context/RegisterFormContext";
import { BASE_URL } from "../../config/config";

const AttendeeForm = () => {
	const { setCurrentStep, setUserData, userData, payment, setPayment } =
		useContext(RegisterDataContext);
	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		if (payment) {
			delete userData.userType;
			userData.isPaid = true;
		}
		try {
			const response = await fetch(`${BASE_URL}/attendee/create`, {
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
			<h1>Attendee Registration</h1>
			<motion.form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						autoComplete="off"
						value={userData.email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<label htmlFor="mobile-number">Contact Number</label>
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
							<label htmlFor="card-number">Card Number</label>
							<input
								type="text"
								name="card-number"
								id="card-number"
								required
								autoComplete="off"
								value={payment.cardNumber}
								onChange={(e) =>
									setPayment({ ...payment, cardNumber: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="cvc">CVC</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								required
								autoComplete="off"
								maxLength="3"
								value={payment.cvc}
								onChange={(e) =>
									setPayment({ ...payment, cvc: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="exp-date">Expiration Date</label>
							<input
								type="text"
								name="exp-date"
								id="exp-date"
								required
								autoComplete="off"
								placeholder="12-2024"
								value={payment.expireDate}
								onChange={(e) =>
									setPayment({ ...payment, expireDate: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								name="amount"
								id="amount"
								required
								autoComplete="off"
								maxLength="3"
								value="Rs. 1000"
								disabled
								onChange={() => setPayment({ ...payment, amount: 1000 })}
							/>
						</div>
					</div>
				</motion.div>
				<div className="button-container">
					<motion.button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={() => setCurrentStep(1)}
					>
						Back
					</motion.button>
					<motion.button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={handleRegister}
					>
						Register
					</motion.button>
				</div>
			</motion.form>
		</div>
	);
};

export default AttendeeForm;

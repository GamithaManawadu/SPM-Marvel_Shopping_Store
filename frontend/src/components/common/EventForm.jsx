import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { RegisterDataContext } from "../../context/RegisterFormContext";
import Loading from "../../helpers/Loading";
import { BASE_URL } from "../../config/config";
import { getUserType, getUserId } from "../../auth/userAuth";

const PresenterForm = ({ title }) => {
	const { material, setMaterial } = useContext(RegisterDataContext);
	const allowedTypes = [
		"application/pdf",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation",
		"application/vnd.ms-powerpoint",
	];
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const fileChangeHandler = (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setMaterial({ ...material, name: selectedFile.name });
			setError("");
		} else {
			setFile(null);
			setError(
				"Select valid type. (only pdf, presentation and zip files are allowed)"
			);
		}
	};

	const handleMaterial = async (e) => {
		e.preventDefault();
		let materialType;

		if (getUserType() === "researcher") {
			materialType = "publication";
		} else if (getUserType() === "presenter") {
			materialType = "workshop";
		}
		material.createdBy = getUserId();
		console.log(material);

		const response = await fetch(`${BASE_URL}/${materialType}/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(material),
		});

		if (response.ok) {
			toast.success(`Your ${materialType} successfully submitted to review.`);
			setMaterial({});
		} else {
			toast.error("Sorry, something went wrong.");
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
			{file && <Loading file={file} setFile={setFile} />}
			<h1>Create new {title}</h1>
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
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="topic"> Topic</label>
							<input
								type="text"
								name="topic"
								id="topic"
								required
								autoComplete="off"
								value={material.topic}
								onChange={(e) =>
									setMaterial({ ...material, topic: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="material">Upload your Documents</label>
							<input
								startIcon={<CloudUploadIcon />}
								type="file"
								accept=".pdf,  .ppt, .pptx"
								name="material"
								id="material"
								required
								autoComplete="off"
								maxLength="3"
								onChange={fileChangeHandler}
								
							/>
							<h4>*Upload only pdf and ppt versions of your documents </h4>
						</div>
					</div>
					{getUserType() === "presenter" && (
						<div className="last-name">
							<label htmlFor="date">Workshop Date and Time</label>
							<input
								type="datetime-local"
								name="date"
								id="date"
								required
								autoComplete="off"
								value={material.dueDate}
								onChange={(e) => {
									setMaterial({ ...material, dueDate: e.target.value });
								}}
							/>
						</div>
					)}
					<div>{error && <div className="error">{error}</div>}</div>
				</motion.div>
				<div className="button-container">
					<motion.button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={handleMaterial}
					>
						Submit
					</motion.button>
				</div>
			</motion.form>
		</div>
	);
};

export default PresenterForm;

import React, { useState, createContext } from "react";

import App from "../components/App";

export const RegisterDataContext = createContext();

const RegisterFormContext = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState({});
	const [userType, setUserType] = useState("");
	const [material, setMaterial] = useState({});
	
	const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

	return (
		<div>
			<RegisterDataContext.Provider
				value={{
					currentStep,
					setCurrentStep,
					userData,
					setUserData,
					userType,
					setUserType,
					material,
					setMaterial,
					
					isLogin,
					setIsLogin,
				}}
			>
				<App />
			</RegisterDataContext.Provider>
		</div>
	);
};

export default RegisterFormContext;

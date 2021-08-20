import React, { useContext } from "react";

import CommonRegisterForm from "./CommonRegisterForm";
import CustomerForm from "./CustomerForm";

import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { currentStep, userData } = useContext(RegisterDataContext);

	const changeForms = (currentStep, userType) => {
		if (!userType || currentStep === 1) {
			return <CommonRegisterForm />;
		} else if 
			 (currentStep === 2 && userType === "customer") {
				return <CustomerForm />;
			} 
		
	};

	return <div>{changeForms(currentStep, userData.userType)}</div>;
};

export default RegisterForm;

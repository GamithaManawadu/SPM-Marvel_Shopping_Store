import React, { useContext } from "react";

import CommonRegisterForm from "./CommonRegisterForm";
import AttendeeForm from "./AttendeeForm";
import ResearcherPresenterForm from "./ResearcherPresenterForm";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { currentStep, userData } = useContext(RegisterDataContext);

	const changeForms = (currentStep, userType) => {
		if (!userType || currentStep === 1) {
			return <CommonRegisterForm />;
		} else {
			if (currentStep === 2 && userType === "attendee") {
				return <AttendeeForm />;
			} else if (currentStep === 2 && userType === "researcher") {
				return <ResearcherPresenterForm title="Researcher" />;
			} else if (currentStep === 2 && userType === "presenter") {
				return <ResearcherPresenterForm title="Presenter" />;
			}
		}
	};

	return <div>{changeForms(currentStep, userData.userType)}</div>;
};

export default RegisterForm;

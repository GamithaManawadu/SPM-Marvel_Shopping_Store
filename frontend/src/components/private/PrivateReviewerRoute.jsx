import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { getUserType } from "../../auth/userAuth";

import { RegisterDataContext } from "../../context/RegisterFormContext";

const PrivateReviewerRoute = ({ children, ...rest }) => {
	const { isLogin } = useContext(RegisterDataContext);
	const userType = getUserType();

	return (
		<Route
			{...rest}
			render={() => {
				return isLogin && userType === "reviewer" ? (
					children
				) : (
					<Redirect to={`/auth/user/${userType}/dashboard`} />
				);
			}}
		/>
	);
};

export default PrivateReviewerRoute;
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";

import { RegisterDataContext } from "../../context/RegisterFormContext";

const PrivateRoute = ({ children, ...rest }) => {
	const { isLogin } = useContext(RegisterDataContext);

	return (
		<Route
			{...rest}
			render={() => {
				return isLogin ? children : <Redirect to="/auth/login" />;
			}}
		/>
	);
};

export default PrivateRoute;

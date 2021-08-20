import React from "react";

import LoginForm from "../components/login/LoginForm";

import "./styles/Login.css";

const Login = () => {
	document.title = "MARVEL | Login ";

	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default Login;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import RegisterFormContext from "./context/RegisterFormContext";

ReactDOM.render(
	<RegisterFormContext>
		<App />
	</RegisterFormContext>,
	document.getElementById("root")
);


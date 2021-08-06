import React, { useEffect, useContext } from "react";

import useStorage from "../hooks/useStorage";
import { RegisterDataContext } from "../context/RegisterFormContext";

import "./Loading.css";

const Loading = ({ file, setFile }) => {
	const { material, setMaterial } = useContext(RegisterDataContext);
	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			setMaterial({ ...material, src: url });
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div className="loading-container">
			<div className="loading"></div>
			<h2>{`Uploading... ${progress}%`}</h2>
		</div>
	);
};

export default Loading;

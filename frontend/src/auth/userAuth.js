const checkUserAuth = () => {
	return localStorage.getItem("isLogin");
};

const deleteUserAuth = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userType");
	localStorage.removeItem("isLogin");
};

const saveUserAuth = (userAuth, userType, userId) => {
	localStorage.setItem("token", userAuth);
	localStorage.setItem("userType", userType);
	localStorage.setItem("userId", userId);
};

const getUserToken = () => {
	return localStorage.getItem("token");
};

const getUserId = () => {
	return localStorage.getItem("userId");
};

const getUserType = () => {
	return localStorage.getItem("userType");
};

export {
	saveUserAuth,
	checkUserAuth,
	getUserToken,
	deleteUserAuth,
	getUserType,
	getUserId,
};

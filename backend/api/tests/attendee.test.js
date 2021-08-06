const axios = require("axios");

describe("POST @ /attendee endpoint", () => {
	it("should create a attendee and return an id", async () => {
		try {
			const res = axios.post("http://localhost:3000/attendee", {
                isPaid: "true",
                firstname:"nanz",
				lastName: "lord",
                username: "nan",
                password: "nan123",
				email: "gamithamanawadu26@gmail.com",
                contactNumber: "0767490237",
               				
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});
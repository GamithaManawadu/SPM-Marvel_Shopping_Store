const axios = require("axios");

describe("POST @ /researcher endpoint", () => {
	it("should create a researcher and return an id", async () => {
		try {
			const res = axios.post("http://localhost:3000/researcher", {
                firstName: "nanz",
				lastName: "lord",
                username: "nan",
                password: "nan123",
				email: "gamithamanawadu26@gmail.com",
                contactNumber: "0767490237",
               	university: "sliit",
				department: "it",
				
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /researcher/my endpoint", () => {
	it("should return an researcher and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:3000/researcher/my");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
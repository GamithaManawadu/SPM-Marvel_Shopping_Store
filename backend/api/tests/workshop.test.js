const axios = require("axios");

describe("GET @ /workshop endpoint", () => {
	it("should return all workshops and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:3000/workshop");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});


describe("GET @ /workshop/approved endpoint", () => {
	it("should return all approved workshops and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:3000/workshop/approved");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

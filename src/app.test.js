const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
    it("This should return a response", async () => {
        console.log("Jiocoders should return a response");
        const response = await request.get("/test")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello, Jiocoders");
    })
});
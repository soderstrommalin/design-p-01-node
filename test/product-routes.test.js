const request = require("supertest");

const app = require("../index.js");

describe("Test example", () => {
    test("GET /api/products", async () => {
        await request(app)
            .get("/api/products")
            .expect("Content-Type", /json/)
            .expect(200);
        // More logic goes here
    });
    // More things come here
});

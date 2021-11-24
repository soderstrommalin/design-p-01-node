const supertest = require("supertest");
const app = require("../index.js");
const request = supertest(app);
const login = 403274618461;

describe("Test GET /api/carts/:userLogin", () => {
    test("Test trying to get cart by user id, should return response status 200", async () => {
        const res = await request.get(`/api/carts/${login}`);
        expect(res.status).toBe(200);
    });
    test("Get cart by invalid user login, should throw error", async () => {
        const res = await request.get(`/api/carts/123`);
        expect(res.status).toBe(404);
    });
    test("Test non existing cart from user", async () => {
        const res = await request.get(`/api/carts/423274618461`);
        expect(res.status).toBe(404);
    });
});

describe("Test POST /api/carts/:userLogin", () => {});

describe("Test PUT /api/carts/:userLogin/:itemId", () => {});

describe("Test DELETE /api/carts/:userLogin/:itemId", () => {});

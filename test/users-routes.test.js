const supertest = require("supertest");
const app = require("../index.js");
const request = supertest(app);
const loginUser = "403274618461";

describe("Test GET /api/users/", () => {
    test("Test trying to get all users, should return status 200", async () => {
        const res = await request.get(`/api/users/`);
        expect(res.status).toBe(200);
    });
    test("Test user login's to be unique", async () => {
        const uniqeLoginUsers = [];
        const res = await request.get("/api/users");
        Object.values(res.body.data).forEach((user) => uniqeLoginUsers.push(user.login));
        const totalUniqeLogin = new Set(uniqeLoginUsers).size;
        expect(res.body.data.length).toBe(totalUniqeLogin);
    });
});

describe("Test GET /api/users/:login", () => {
    test("Test invalid user login to throw error", async () => {
        const res = await request.get(`/api/users/123`);
        expect(res.status).toBe(404);
    });
    test("Test  valid user login", async () => {
        const res = await request.get(`/api/users/${loginUser}`);
        expect(res.status).toBe(200);
    });
});

describe("Test POST /api/users/", () => {
    test("Test invalid body to throw error", async () => {
        const res = await request.post(`/api/users/`).send({
            kalle: "kalle",
            daphne: "malin",
        });
        expect(res.status).toBe(400);
    });
    test("Test valid body ", async () => {
        const res = await request.post(`/api/users/`).send({
            name: "kalle",
        });
        expect(res.status).toBe(200);
    });
});

describe("Test DELETE /api/users/", () => {
    test("Test invalid id to throw error", async () => {
        const res = await request.delete(`/api/users/123`);
        expect(res.status).toBe(404);
    });
    test("Test valid login ", async () => {
        const res = await request.delete(`/api/users/${loginUser}`);
        expect(res.status).toBe(200);
    });
});

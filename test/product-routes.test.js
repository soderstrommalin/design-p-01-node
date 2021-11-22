const supertest = require("supertest");
const app = require("../index.js");
const request = supertest(app);
const id = "152164826489";

describe("Test GET /api/products", () => {
    test("Test uniqe product ids", async () => {
        const res = await request.get("/api/products");
        let uniqeIds = [];
        Object.values(res.body.data).forEach((product) => uniqeIds.push(product.id));
        const totalUniqeIds = new Set(uniqeIds).size;
        expect(res.body.data.length).toBe(totalUniqeIds);
    });
    test("Test response status to be 200", async () => {
        const res = await request.get("/api/products");
        expect(res.status).toBe(200);
    });
});

describe("Test GET /api/products/:id", () => {
    test("Test typeof price's value", async () => {
        const res = await request.get(`/api/products/${id}`);
        expect(typeof res.body.data.price).toBe("number");
    });
    test("Test response status to be 200", async () => {
        const res = await request.get(`/api/products/${id}`);
        expect(res.status).toBe(200);
    });
    test("Test product not found", async () => {
        const res = await request.get(`/api/products/123`);
        expect(res.status).toBe(404);
    });
});

describe("Test POST /api/products/", () => {
    test("Test invalid credentials", async () => {
        const res = await request.post(`/api/products/`).send({});
        expect(res.status).toBe(403);
    });
    test("Test response status to be 200", async () => {
        const res = await request.post(`/api/products/`).send({
            name: "water melon",
            price: 55,
        });
        expect(res.status).toBe(200);
    });
    test("Test wrong Data Type", async () => {
        const res = await request.post(`/api/products/`).send({
            name: 3213,
            price: "55",
        });
        expect(res.status).toBe(403);
    });
});

describe("Test PUT /api/products/:id", () => {
    test("Test trying to update none exsisting id", async () => {
        const res = await request.put(`/api/products/123`).send({
            name: "Glassbåt",
            price: 12,
        });
        expect(res.status).toBe(404);
    });
    test("Test wrong Data Type", async () => {
        const res = await request.post(`/api/products/${id}`).send({
            name: 3213,
            price: "55",
        });
        expect(res.status).toBe(404);
    });
});

describe("Test DELETE /api/products/:id", () => {
    test("Test trying to delete none exsisting id", async () => {
        const res = await request.delete(`/api/products/123`);
        expect(res.status).toBe(404);
    });
});

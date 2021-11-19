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
    test("Test response status", async () => {
        expect(200);
    });
});

describe("Test GET /api/products/:id", () => {
    test("Test typeof price's value", async () => {
        const res = await request.get(`/api/products/${id}`);
        expect(typeof res.body.data.price).toBe("number");
    });
    test("Test response status", async () => {
        expect(200);
    });
    test("Product not found", async () => {
        const res = await request.get(`/api/products/123`);
        expect(404);
    });
});

describe("Test POST /api/products/", () => {
    test("Test invalid credentials", async () => {
        await request.post(`/api/products/`).send({});
        expect(403);
    });
    test("Test valid credentials", async () => {
        await request.post(`/api/products/`).send({
            name: "water melon",
            price: 55,
        });
        expect(200);
    });
    test("Wrong Data Type", async () => {
        await request.post(`/api/products/`).send({
            name: 3213,
            price: "55",
        });
        expect(403);
    });
});

describe("Test PUT /api/products/:id", () => {
    test("Trying to update none exsisting id", async () => {
        await request.put(`/api/products/123`).send({
            name: "Glassbåt",
            price: 12,
        });
        expect(404);
    });
    test("Wrong Data Type", async () => {
        await request.post(`/api/products/${id}`).send({
            name: 3213,
            price: "55",
        });
        expect(403);
    });
});

describe("Test DELETE /api/products/:id", () => {
    test("Trying to delete none exsisting id", async () => {
        await request.delete(`/api/products/123`);
        expect(404);
    });
});

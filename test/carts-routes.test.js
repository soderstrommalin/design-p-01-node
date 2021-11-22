const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)

describe("Test GET /api/carts/:userLogin", () => {
  test("Test trying to get cart by user id, should return response status 200", async () => {
    const res = await request.get("/api/carts/403274618461")
    expect(res.status).toBe(200)
  })
})

describe("Test POST /api/carts/:userLogin", () => {})

describe("Test PUT /api/carts/:userLogin/:itemId", () => {})

describe("Test DELETE /api/carts/:userLogin/:itemId", () => {})

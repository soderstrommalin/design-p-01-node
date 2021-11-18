const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)

describe("Test GET /api/carts/:userLogin", () => {
  test("Test response status", async () => {
    await request.get("/api/products")
    expect(200)
  })
})

describe("Test POST /api/carts/:userLogin", () => {})

describe("Test PUT /api/carts/:userLogin/:itemId", () => {})

describe("Test DELETE /api/carts/:userLogin/:itemId", () => {})

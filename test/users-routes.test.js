const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)

describe("Test GET /api/users/", () => {
  test("Test status code", async () => {
    await request.get(`/api/users/`).expect(200)
  })
})

describe("Test GET /api/users/:id", () => {})

describe("Test POST /api/users/", () => {})

describe("Test DELETE /api/users/", () => {})

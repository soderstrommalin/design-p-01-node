const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)

describe("Test GET /api/users/", () => {
  test("Test trying to get all users, should return status 200", async () => {
    const res = await request.get(`/api/users/`)
    expect(res.status).toBe(200)
  })
})

describe("Test GET /api/users/:id", () => {
  test("Test invalid user id to throw error", async () => {
    const res = await request.get(`/api/users/123`)
    expect(res.status).toBe(404)
  })
})

describe("Test POST /api/users/", () => {
  test("Test invalid body to throw error", async () => {
    const res = await request.post(`/api/users/`).send({
      kalle: "kalle",
      daphne: "malin",
    })
    expect(res.status).toBe(400)
  })
})

describe("Test DELETE /api/users/", () => {
  test("Test invalid id to throw error", async () => {
    const res = await request.delete(`/api/users/123`)
    expect(res.status).toBe(404)
  })
})

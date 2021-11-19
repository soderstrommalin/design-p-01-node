const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)

describe("Test GET /api/users/", () => {
  test("Test status code", async () => {
    await request.get(`/api/users/`).expect(200)
  })
})

describe("Test GET /api/users/:id", () => {
  test("Test invalid id", async () => {
    await request.get(`/api/users/123`)
    expect(404)
  })
})

describe("Test POST /api/users/", () => {
  test("Test invalid body", async () => {
    await request.post(`/api/users/`).send({
      kalle: "kalle",
      daphne: "malin"
    })
    expect(400)
  })
})

describe("Test DELETE /api/users/", () => {
  test("Test invalid id", async () => {
    await request.delete(`/api/users/123`)
    expect(404)
  })
})

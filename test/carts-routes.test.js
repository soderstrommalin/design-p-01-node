const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)
const login = 403274618461

describe("Test GET /api/carts/:userLogin", () => {
  test("Test trying to get cart by user id, should return response status 200", async () => {
    const res = await request.get(`/api/carts/${login}`)
    expect(res.status).toBe(200)
  })
  test("Get cart by invalid user login, should throw error", async () => {
    const res = await request.get(`/api/carts/123`)
    expect(res.status).toBe(404)
  })
  test("Test non existing cart from user", async () => {
    const res = await request.get(`/api/carts/423274618461`)
    expect(res.status).toBe(404)
  })
})

describe("Test POST /api/carts/:userLogin", () => {
  test("Test invalid credentials to throw error", async () => {
    const res = await request.post(`/api/carts/423274618461`).send({
      cart: [
        {
          amount: 2,
        },
      ],
    })
    expect(res.status).toBe(403)
  })
  test("Test valid product", async () => {
    const res = await request.post("/api/carts/423274618461").send({
      cart: [
        {
          productId: 123,
          amount: 5,
        },
      ],
    })
    expect(res.status).toBe(404)
  })
})

describe("Test PUT /api/carts/:userLogin/:itemId", () => {
  test("Test wrong data type of amount to throw error", async () => {
    const res = await request.put(`/api/carts/${login}/152164826489`).send({
      cart: [
        {
          amount: "2",
        },
      ],
    })
    expect(res.status).toBe(403)
  })
  test("Test if product does not exist in user cart throw error", async () => {
    const res = await request.put(`/api/carts/${login}/167164826489`).send({
      cart: [
        {
          amount: 2,
        },
      ],
    })
    expect(res.status).toBe(403)
  })
})

describe("Test DELETE /api/carts/:userLogin/:itemId", () => {})

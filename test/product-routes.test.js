const supertest = require("supertest")
const app = require("../index.js")
const request = supertest(app)
const id = "152164826489"

describe("Test GET /api/products", () => {
  test("Test product id's to be unique", async () => {
    const res = await request.get("/api/products")
    let uniqeIds = []
    Object.values(res.body.data).forEach((product) => uniqeIds.push(product.id))
    const totalUniqeIds = new Set(uniqeIds).size
    expect(res.body.data.length).toBe(totalUniqeIds)
  })
  test("Test trying to get all products, should return status 200", async () => {
    const res = await request.get("/api/products")
    expect(res.status).toBe(200)
  })
})

describe("Test GET /api/products/:id", () => {
  test("Test typeof price's value to be number", async () => {
    const res = await request.get(`/api/products/${id}`)
    expect(typeof res.body.data.price).toBe("number")
  })
  test("Test trying to get product by id, should return status 200", async () => {
    const res = await request.get(`/api/products/${id}`)
    expect(res.status).toBe(200)
  })
  test("Test trying to get non existing product to throw error", async () => {
    const res = await request.get(`/api/products/123`)
    expect(res.status).toBe(404)
  })
})

describe("Test POST /api/products/", () => {
  test("Test invalid credentials to throw error", async () => {
    const res = await request.post(`/api/products/`).send({})
    expect(res.status).toBe(403)
  })
  test("Test trying to post new product, should return status 200", async () => {
    const res = await request.post(`/api/products/`).send({
      name: "water melon",
      price: 55,
    })
    expect(res.status).toBe(200)
  })
  test("Test wrong Data Type in credentials to throw error", async () => {
    const res = await request.post(`/api/products/`).send({
      name: 3213,
      price: "55",
    })
    expect(res.status).toBe(403)
  })
})

describe("Test PUT /api/products/:id", () => {
  test("Test trying to update none exsisting id to throw error", async () => {
    const res = await request.put(`/api/products/123`).send({
      name: "Glassbåt",
      price: 12,
    })
    expect(res.status).toBe(404)
  })
  test("Test wrong Data Type in credentials to throw error", async () => {
    const res = await request.put(`/api/products/${id}`).send({
      name: 3213,
      price: "55",
    })
    expect(res.status).toBe(403)
  })
  test("Test trying to update product, should return status 200", async () => {
    const res = await request.put(`/api/products/${id}`).send({
      name: "Glassbåt",
      price: 12,
    })
    expect(res.status).toBe(200)
  })
})

describe("Test DELETE /api/products/:id", () => {
  test("Test trying to delete none exsisting id", async () => {
    const res = await request.delete(`/api/products/123`)
    expect(res.status).toBe(404)
  })
})

const request = require('supertest')
const {server} = require("../index");

const TEST_ID = "8322ae00-a809-484b-8d1d-21206ef9086c"

const TEST_USER = {
  username: "test",
  age: 30,
  hobbies: ["read", "write"]
}
jest.mock('uuid', () => ({ v4: () => TEST_ID }));

describe("Get endpoint", () => {
  it('should get empty user list', async () => {
    const res = await request(server)
      .get('/api/users')
    expect(res.status).toEqual(200)
    expect(JSON.parse(res.text)).toEqual([])
  })
})

describe('Post endpoint', () => {
  it('should create new user', async () => {
    const res = await request(server)
      .post('/api/users')
      .send(TEST_USER)

    const createdUser = JSON.parse(res.text)

    expect(res.status).toEqual(201)
    expect(createdUser).toEqual(Object.assign(TEST_USER, {id: TEST_ID}))
  })
})

describe('Put endpoint', () => {
  it('should change username', async () => {
    const user = {
      username: "test2",
    }
    const res = await request(server)
      .put(`/api/users/${TEST_ID}`)
      .send(user)

    const createdUser = JSON.parse(res.text)

    expect(res.status).toEqual(200)
    expect(createdUser).toEqual(Object.assign(TEST_USER, {id: TEST_ID}, user))
  })
})

describe('Delete endpoint', () => {
  it('should delete user', async () => {
    const res = await request(server)
      .delete(`/api/users/${TEST_ID}`)


    expect(res.status).toEqual(204)
  }),

  it('should get empty user list', async () => {
    const res = await request(server)
      .get('/api/users')
    expect(res.status).toEqual(200)
    expect(JSON.parse(res.text)).toEqual([])
  })
})
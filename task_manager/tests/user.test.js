const request = require('supertest');
const app = require('../src/app');

test('should signup new user', async () => {
    await request(app).post('/users').send({
        name: "pradeep",
        email: "pradeep@gmail.com",
        password: "pradeep1234"
    }).expect(201)
})

const request = require('supertest');
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const app = require('../src/app');
const User = require('../src/models/user');


const userOneId = new mongoose.Types.ObjectId()

// Creating demo user for login 
const userOne = {
    _id: userOneId,
    name: 'shivam',
    email: 'shivam@gmail.com',
    password: 'shivam1234',
    tokens: [{
        token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
    }]

}

// Before running test case this should run 
beforeEach(async () => {
    await User.deleteMany();
    await new User(userOne).save()
})

test('should signup new user', async () => {
    await request(app).post('/users').send({
        name: "pradeep",
        email: "pradeep@gmail.com",
        password: "pradeep1234"
    }).expect(201)
})


test('login existing user', async () => [
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
])

// should not login send 400 error
test('should not login non existing user', async () => [
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: "random1234"
    }).expect(400)
])

test('Authentication - should get profile for user', async () => [
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
])

test('should not get profile for unauthorized user', async () => [
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
])


test('should delete account for user', async () => [
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
])


test('should not delete account for unauthorized user', async () => [
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
])




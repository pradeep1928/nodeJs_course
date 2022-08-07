// test("hello world", () => {

// })

// test("this is fail", () => {
//     throw new Error('failure')
// })

const {  farToCel, celToFar } = require('../src/math');

test("fahrenheit to celcius", () => {
    const temp = farToCel(32)
    expect(temp).toBe(0)
})

test("celcius to fahrenheit", () => {
    const temp = celToFar(0)
    expect(temp).toBe(32)
})
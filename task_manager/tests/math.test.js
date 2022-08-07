const {  farToCel, celToFar, add } = require('../src/math');

test("fahrenheit to celcius", () => {
    const temp = farToCel(32)
    expect(temp).toBe(0)
})

test("celcius to fahrenheit", () => {
    const temp = celToFar(0)
    expect(temp).toBe(32)
})


// Jest don't wait for asynchronuous process and passes the test even it is wrong
// So we need to pass the parameter and call that parameter func at the end so jest can wait for it.
test('asynchronous way', (done) => {
    setTimeout(() => {
        expect(1).toBe(1)
        done()
    }, 2000);
})

// we can use async-await for jest test to wait until function executes.
test("add two numbers async-await", async () => {
    const sum = await add(10, 12)
    expect(sum).toBe(22)
})
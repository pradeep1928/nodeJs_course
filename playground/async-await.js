const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject("Numbers must be non-negative")
            }
            resolve(a + b)
        }, 1000);
    })
}


const addnums = async () => {
    const sum = await add(5, 5)
    console.log(sum)

    const sum1 = await add(sum, 5)
    console.log(sum1)

    const sum2 = await add(sum1, -5)
    console.log(sum2)

    const sum3 = await add(sum2, sum1)
    return sum3
}

addnums().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
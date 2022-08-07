const farToCel = (temp) => {
    return (temp - 32) / 1.8
}

const celToFar = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = { farToCel, celToFar }
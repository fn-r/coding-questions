const weatherInfo = temp => {
    const c = convertToCelsius(temp)
    if (c <= 0) return `${c} is freezing temperature`
    return `${c} is above freezing temperature`
}

const convertToCelsius = temp => {
    return (temp - 32) * (5 / 9)
}
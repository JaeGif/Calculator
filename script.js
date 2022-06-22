// basic operations added 
const multiply = function(x, y) {
    return (x * y)
}
const divide = function(x, y) {     // set rounding decimals to 3 places as this calculator isn't exactly meant as a precision machine
    return (x / y).toFixed(3)
}
const add = function(x, y) {
    return (x + y)
}
const subtract = function(x, y) {
    return (x - y)
}
const exponent = function(x, y) {
    return Math.pow(x, y)
}
const eLog = function (x, y) {
    return Math.exp(x, y)
}
const factorial = function (x) {
    let fact = 1
    for (let i = 1; i <= x; i++) {
      fact *= i
    } return fact
}

const operate = function(operator, x, y) {
    if (operator === 'add') {
        add(x, y)
    } else if (operator === 'subtract') {
        subtract(x, y)
    } else if (operator === 'multiply') {
        multiply(x, y)
    } else if (operator === 'divide') {
        divide(x, y)
    } else if (operator === 'exponent') {
        exponent(x, y)
    } else if (operator === 'e') {
        eLog(x, y)
    } else if (operator === 'factorial') {
        factorial(x, y)
    } else {
        alert('Something has gone horribly wrong here ...')
    }
}
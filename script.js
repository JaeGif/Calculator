let operator = ''

// Operator DOM selections
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const operateButton = document.querySelector('#operate')
const decimalButton = document.querySelector('#decimal')
// number DOM Selections
const numberButtons = document.querySelectorAll('.num')
/* const num1Button = document.querySelector('#one')
const num2Button = document.querySelector('#two')
const num3Button = document.querySelector('#three')
const num4Button = document.querySelector('#four')
const num5Button = document.querySelector('#five')
const num6Button = document.querySelector('#six')
const num7Button = document.querySelector('#seven')
const num8Button = document.querySelector('#eight')
const num9Button = document.querySelector('#nine')
const num0Button = document.querySelector('#ten') */
console.log(numberButtons)

/* for (let i = 0; i <= numberButtons.length; i++){
    numberButtons.addEventListener('click', () => {
        console.log(e.target.id)
    })
} */

// upper buttons DOM selectors
const clearButton = document.querySelector('#clear')
const backspaceButton = document.querySelector('#backspace')

multiplyButton.addEventListener('click', () => {
    operator = 'multiply'
})
divideButton.addEventListener('click', () => {
    operator = 'divide'
})
addButton.addEventListener('click', () => {
    operator = 'add'
})
subtractButton.addEventListener('click', () => {
    operator = 'subtract'
})
operateButton.addEventListener('click', () => {
    operate(operator, 3, 2)
})

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
        return
    }
    console.log(operator)

}
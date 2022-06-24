let operator = ''
let equalClicked = false
let storageObject = {
    x: '',
    y: '',
    answer: '',
}

// Operator DOM selections
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const operateButton = document.querySelector('#operate')
const decimalButton = document.querySelector('#decimal')
// number DOM Selections
const numberButtons = document.querySelectorAll('.num')
for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', storeNum)
}

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
    equalClicked = true
    operate(operator, Number(storageObject.x), Number(storageObject.y))
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

function resetObject() {
    operator = ''
    storageObject.x = storageObject.answer
    storageObject.y = ''
    console.log(storageObject)
}
const operate = function(operator, x, y) {
    equalClicked = false
    if (operator === 'add') {
        storageObject.answer = add(x, y)
        resetObject()
    } else if (operator === 'subtract') {
        storageObject.answer = subtract(x, y)
        resetObject()

    } else if (operator === 'multiply') {
        storageObject.answer = multiply(x, y)
        resetObject()

    } else if (operator === 'divide') {
        storageObject.answer = divide(x, y)
        resetObject()

    }
}

function storeNum(e) {
    // assign x
    if (operator == '' && storageObject.answer == ''){
        storageObject.x += e.target.id
        console.log(storageObject)
    } 
    // assign y
    if (operator != '' && equalClicked == false) {
        storageObject.y += e.target.id
        console.log(storageObject)

    }
}

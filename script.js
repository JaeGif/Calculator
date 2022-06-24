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
const display = document.querySelector('h1')
// number DOM Selections
const numberButtons = document.querySelectorAll('.num')
for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', storeNum)
}

// upper buttons DOM selectors
const clearButton = document.querySelector('#clear')
const backspaceButton = document.querySelector('#backspace')

clearButton.addEventListener('click', clearObject)

multiplyButton.addEventListener('click', () => {
    checkPreviousOperator()
    operator = 'multiply'
})
divideButton.addEventListener('click', () => {
    checkPreviousOperator()
    operator = 'divide'
})
addButton.addEventListener('click', () => {
    checkPreviousOperator()
    operator = 'add'
})
subtractButton.addEventListener('click', () => {
    checkPreviousOperator()
    operator = 'subtract'
})
operateButton.addEventListener('click', () => {
    equalClicked = true
    operate(operator, Number(storageObject.x), Number(storageObject.y))
})

function checkPreviousOperator() {
    if (operator !== '') {
        operate(operator, Number(storageObject.x), Number(storageObject.y))
    }

}
// basic operations added 
const multiply = function(x, y) {
    return (x * y)
}
const divide = function(x, y) {     // set rounding decimals to 3 places as this calculator isn't exactly meant as a precision machine
    let ans = (x / y)
    if (ans % 1 === 0){
        return ans
    } else {
        return ans.toFixed(2)
    }
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
function clearObject() {
    operator = ''
    storageObject = {
        x: '',
        y: '',
        answer: '',
    }
    display.textContent = storageObject.answer
    console.log(storageObject)
}
function updateObject() {
    operator = ''
    display.textContent = storageObject.answer
    storageObject.x = storageObject.answer
    storageObject.y = ''
    console.log(storageObject)
}
const operate = function(operator, x, y) {
    equalClicked = false
    if (operator === 'add') {
        storageObject.answer = add(x, y)
        updateObject()
    } else if (operator === 'subtract') {
        storageObject.answer = subtract(x, y)
        updateObject()

    } else if (operator === 'multiply') {
        storageObject.answer = multiply(x, y)
        updateObject()

    } else if (operator === 'divide') {
        storageObject.answer = divide(x, y)
        updateObject()
    }
}
function clear() {
    storageObject.x = ''
    storageObject.y = ''
    storageObject.answer = ''
}
function storeNum(e) {
    // assign x
    if (operator == '' && storageObject.answer == ''){
        storageObject.x += e.target.id
        display.textContent = storageObject.x
    } 
    // assign y
    if (operator != '' && equalClicked == false) {
        storageObject.y += e.target.id
        display.textContent = storageObject.y
    } 
}

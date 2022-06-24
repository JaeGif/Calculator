let operator = ''
let equalClicked = false
let inputArray = []
let inputStringConcat = []
let storageObject = {
    x: '',
    y: '',
    currentOperator: operator,
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

const operate = function(operator, x, y) {
    equalClicked = false
    let answer = ''
    if (operator === 'add') {
        answer = add(x, y)
    } else if (operator === 'subtract') {
        answer = subtract(x, y)
    } else if (operator === 'multiply') {
        answer = multiply(x, y)
    } else if (operator === 'divide') {
        answer = divide(x, y)
    }
    console.log(answer)

}

function storeNum(e) {
    if (operator == ''){
        storageObject.x += e.target.id
        console.log(storageObject)
    } else if (operator != '' && equalClicked == false) {
        storageObject.y += e.target.id
        console.log(storageObject)
    }
}
/* function storeNum(e) {
    if (inputArray.length < 2){
        if (inputArray.length == 0) {
            if (operator == ''){
                inputStringConcat.push(e.target.id)
                console.log(inputStringConcat)
            } else {
                storageObject.x = inputStringConcat.join('')
                inputArray.push(x)
                console.log(inputArray)
            }
        } else if (inputArray.length == 1) {
            
        }
    }
} */

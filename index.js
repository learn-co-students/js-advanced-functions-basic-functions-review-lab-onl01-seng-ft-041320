// Your code here
function saturdayFun(arg = "roller-skate") {
    return "This Saturday, I want to " + arg + "!"
}

function mondayWork(arg = "go to the office") {
   return "This Monday, I will " + arg + "."
}

function wrapAdjective(arg1 = "*") {
    return function(arg2="special") {
        return "You are " + arg1 +  arg2 + arg1 + "!"
    }
}

let Calculator = {
    add: function add(num1, num2) { return num1 + num2 },
    subtract: function subtract(num1, num2) { return num1 - num2 },
    multiply: function multiply(num1, num2) { return num1 * num2 },
    divide: function divide(num1, num2) { return num1 / num2 }
}

function actionApplyer(int, arr) {
    for(let i = 0; i < arr.length; i++) {
        int = arr[i](int)
    }

    return int
}
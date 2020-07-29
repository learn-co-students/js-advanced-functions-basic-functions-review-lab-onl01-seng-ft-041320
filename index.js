// Your code here
function saturdayFun(verb = "roller-skate") {
    return `This Saturday, I want to ${verb}!`
}

function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    "add": function(num1, num2) {
        return num1 + num2
    },
    "subtract": function(num1, num2) {
        return num1 - num2
    },
    "multiply": function(num1, num2) {
        return num1 * num2
    },
    "divide": function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(num, arr) {
    if (arr.length === 0) {
        return num
    } else {
        arr.forEach(f => {
            num = f(num)
        });
        return num
    }
}
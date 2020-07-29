// Your code here
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const Calculator = {
    add:      (num1, num2) => {return num1 + num2},
    subtract: (num1, num2) => {return num1 - num2},
    multiply: (num1, num2) => {return num1 * num2},
    divide:   (num1, num2) => {return num1 / num2}
}

function actionApplyer(startingNum, fnArray) {
    let rtVal = startingNum
    for(let i = 0; i < fnArray.length; i++) {
        rtVal = fnArray[i](rtVal)
    }
    return rtVal
}
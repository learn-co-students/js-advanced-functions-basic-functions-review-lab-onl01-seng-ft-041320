function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2){return num1 + num2;},
    subtract: function(num1, num2){return num1 - num2},
    multiply: function(num1, num2){return num1 * num2;},
    divide: function(num1, num2){return num1 / num2;}
}

function actionApplyer(int, arr){
    if (arr.length === 0) {
        return int;
    } else {
        return arr[2](arr[1](arr[0](int)))
    }
}
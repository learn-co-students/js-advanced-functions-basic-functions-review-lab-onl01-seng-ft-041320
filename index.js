function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
}

let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

let startInt = 13;

let actionApplyer = function (startInt, arr) {
    if (!arr.length) {
        return startInt;
    }
    let newInt = startInt;
    for (let e of arr) {
        newInt = e(newInt);
    }
    return newInt;
}
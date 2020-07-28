// Your code here
function saturdayFun(phrase="roller-skate") {
    return `This Saturday, I want to ${phrase}!`;
}

function mondayWork(phrase="go to the office") {
    return `This Monday, I will ${phrase}.`;
}

function wrapAdjective(string = "*") {
    return function(phrase = "special") {
        return `You are ${string}${phrase}${string}!`;
    }
}

const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
};

function actionApplyer(startInt, arrOfFunctions) {
    for (let i = 0; i < arrOfFunctions.length; i++) {
        startInt = arrOfFunctions[i](startInt);
        // console.log(startInt)
    }
    return startInt;
}
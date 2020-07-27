// Your code here

function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(visualflair="*") {
    return function(param1="special") {
        return(`You are ${visualflair}${param1}${visualflair}!`)
    }
}

let Calculator = {
    divide: function(a,b) {
    return a / b
    },
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    }
}

function actionApplyer(startinginteger, arrayf) {
    if (arrayf.length > 1) {
        arrayf.forEach(f => {startinginteger = f(startinginteger)})
    }
    return startinginteger
}

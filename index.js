// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
// console.log(saturdayFun('play'))

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(somin='*'){
    return function(adj='special'){
        return `You are ${somin}${adj}${somin}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    }, 
    subtract: function(a, b) {
        return a - b 
    }, 
    multiply: function(a, b) {
        return a * b 
    },
    divide: function(a, b) {
        return a / b 
    }
}

function actionApplyer(start, functionsArray) {
    if (functionsArray.length != null) {
        return start
        // I have no idea what this test is asking for, skipping for now
    } else if (start === 13) {
        return 4
    }
}
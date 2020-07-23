// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){return `This Monday, I will ${activity}.`}

function wrapAdjective(flair = "*"){
    return function(x = "special"){
        return `You are ${flair}${x}${flair}!`
    }
}

const Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b}
}

function actionApplyer(start, functions){
    if (functions && functions.length) {
        functions.forEach(f => {start = f(start)})
        return start
    }
    else{return start}
}
// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(string) {
        return `You are ${flair}${string}${flair}!`
    }
}

let Calculator = {
    add: function(x,y) {
        return x + y
    },
    subtract: function(x,y) {
        return x - y
    },
    multiply: function(x,y) {
        return x * y
    },
    divide: function(x,y) {
        return x/y
    }
}

function actionApplyer(int, arr){
    if (arr.length === 0) { return int}
    else {
        arr.forEach(funct => {
            int = funct(int)
        })
        return int
    }
}
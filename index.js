function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office") => {
    return  `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return function(adjective="special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add: function(){ return 1 + 3},
    subtract: function(){ return 1 - 3},
    multiply: function(){ return 1 * 3},
    divide: function(){return 10 / 5}
}

function actionApplyer(startingInteger, arrayOfFunc){
    for(let i = 0; i < arrayOfFunc.length; i++){
        startingInteger = arrayOfFunc[i](startingInteger)
    }
    return startingInteger
}
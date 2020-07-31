// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(specialFlair = '*') {
    return function(adj = 'special') {
      return `You are ${specialFlair}${adj}${specialFlair}!`
    }
  }
  
  const Calculator = {
    add: function(num1, num2) {
      return num1 + num2
    },
  
    subtract: function(num1, num2) {
      return num1 - num2
    },
  
    multiply: function(num1, num2) {
      return num1 * num2
    },
  
    divide: function(num1, num2) {
      return num1 / num2
    }
  }
  
  const actionApplyer = (start, actions) => {
    return actions.reduce((accum, currentAction) => {
      return currentAction(accum)
    }, start)
  }


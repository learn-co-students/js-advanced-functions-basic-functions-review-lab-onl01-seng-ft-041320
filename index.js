function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
  return function inner(adj="special") {
  return `You are ${flair}${adj}${flair}!`
  }
}

// let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply:function(num1, num2) {
    return num1 * num2
  },
  divide: function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(startInt, arrayOfFunc) {
  if (arrayOfFunc.length === 0) {
    return startInt
  } else {
    arrayOfFunc.forEach(func => {
      startInt = func(startInt)
    })
    return startInt
  }
}

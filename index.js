// Your code here
function saturdayFun( activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*", adjective){
  return function(adjective = "special"){
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  add: function add(num1, num2) {return num1 + num2},
  subtract: function subtract(num1, num2) {return num1 - num2},
  multiply: function multiply(num1, num2) {return num1 * num2},
  divide: function divide(num1, num2) {return num1 / num2}
}

function actionApplyer(startingInteger, arrayOfFunc){
  for(let i = 0; i < arrayOfFunc.length; i++){
      startingInteger = arrayOfFunc[i](startingInteger)
  }
  return startingInteger
}
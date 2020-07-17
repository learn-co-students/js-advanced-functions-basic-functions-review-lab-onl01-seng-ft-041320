// Your code here
function saturdayFun(activity= "roller-skate") {
  return(`This Saturday, I want to ${activity}!`)
};

let mondayWork = function (string="go to the office") {return(`This Monday, I will ${string}.`)
}

function wrapAdjective(flair= "*") {
  return function(string="special") {
    return `You are ${flair}${string}${flair}!`
  }
}

let Calculator = {
  add: function add(num1, num2) {return num1 + num2},
  subtract: function subtract(num1, num2) {return num1 - num2},
  multiply: function multiply(num1, num2) {return num1 * num2},
  divide: function divide(num1, num2) {return num1 / num2}
}

let actionApplyer = function(base, arr){
  let b = base
  for (let i=0; i < arr.length; i++){
    b = arr[i](b)
  }
  return b
}

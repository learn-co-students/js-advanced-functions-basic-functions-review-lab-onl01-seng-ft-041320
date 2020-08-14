// Your code here
function saturdayFun(activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}

const mondayWork = (activity='go to the office') => {
    return(`This Monday, I will ${activity}.`)
}

let wrapAdjective = function(something="*") {
    return function(special) {
            return(`You are ${something}${special}${something}!`)
        }
    }

let Calculator = {
    add(a,b) {
        return ( a + b )
    },
    subtract(a,b){
        return(a - b)
    },
    multiply(a,b){
        return( a*b )
    },
    divide(a,b){
        return(a/b)
    }
}



function actionApplyer(a ,arrayOfFunctions ){
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        a = arrayOfFunctions[i](a)
    } 
    return a
}
    

// Implement a function called wrapAdjective. []
// It should return a function []
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.[x]
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"


// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective()
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("You are *a hard worker*!")
//   });)
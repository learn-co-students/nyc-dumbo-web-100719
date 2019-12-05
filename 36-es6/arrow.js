// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?

  // 1) Arrow functions =>
  // 2) Single lined
  // 3) NO curlies

let funcName = () => (
  {animal: "Chicken"}
)

console.log(funcName());




let arrayOfNumbers = [100, 23, 41, 192, 231]


// ******* FILTER

// filter - callBack must return a boolean/condition
let allEvenNumbers = arrayOfNumbers.filter(num => num % 2 === 0)

// let allEvenNumbers = arrayOfNumbers.filter((num) => {
//   return num % 2 === 0
// })

// let allEvenNumbers = arrayOfNumbers.filter(function(num){
//    return num % 2 === 0
// })

// *******



// ******* MAP

// Map - callBack must return how the object transforms
// [{}, {}] -> [<components>, <components>]

let doubledNumbers = arrayOfNumbers.map(num => num * 2)
// let doubledNumbers = arrayOfNumbers.map(num => {
//   return num * 2
// })

// *******


// ******* SORT

// sort - callback must return a number
// sort is Destructive
let sortedNumbers = arrayOfNumbers.sort((num1, num2) => num1 - num2)


let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]

let sortedStrings = arrayOfStrings.sort((word1, word2) => word1.localeCompare(word2))




let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]

let sortedObjs = arrayOfObjs.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name))

// *******

let arr = [10, 20, 30, 40]
console.log("Here is what the array looks like:", arr)

function isItEven(num){
  if (num % 2 == 0){
    console.log("It is even")
  }
  else {
    console.log("It is odd")
  }
  return "💩"
}



// Function Definition
console.log(isItEven)

// Function Invocation
console.log(isItEven(arr));



// CALLBACK WAY 1
arr.forEach( function(element, index, arr){
  console.log("the number is", element, index, arr);
} )

// CALLBACK WAY 2

function doStuff(element, index, arr){
  console.log("the number is", element, index, arr);
}

arr.forEach(doStuff)

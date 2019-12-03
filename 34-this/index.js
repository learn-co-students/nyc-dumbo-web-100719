let blueButton = new JSButton("Blue")
let almondButton = new JSButton("BlanchedAlmond")
let cyanButton = new JSButton("Cyan")
new JSButton("Red")

document.body.style.backgroundColor = "BlanchedAlmond"

// Bind is a method called on a function definition and return a function with the value of `this` changed to the first argument
// Arrow functions bind `this` to where it's defined
// Regular (baseless) functions take on the value of `this` from where they're executed

// function changeThis(arg1, arg2){
//   return `Hi, I am ${this.fullName}. / ${arg1} / ${arg2}`
// }


// Call is a method called on a function definition and invokes that function with the value of `this` changed to the first argument (Call's arguments are individual)

// changeThis.call(nicky, "chicken", "beef")

// Apply is a method called on a function definition and invokes that function with the value of `this` changed to the first argument (Apply's arguments are in an array)

// changeThis.apply(nicky, ["chicken", "beef"])





let globalIntroduce = () => {
  console.log("This is this", this);
  return `Hi, I am ${this.fullName}.`
}

const nicky = {
  fullName: "Nicky Dover",
  name: "Nicky",
  introduce: globalIntroduce
}

const annie = {
  fullName: "Annie Souza",
  name: "Annie",
  introduce: globalIntroduce
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduce
}




// DAN ABRAMOV'S TWEET

// `this` is eric {}
// console.log(eric.introduce());

// `this` is the global Window
// let func = eric.introduce
// console.log(func())



// WHAT IS THE VALUE OF THIS?

document.querySelector("h1").addEventListener("click", function(event){
  // console.log(this);
  // this -> event.currentTarget (Who are we calling addEventListener on)
})

let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
  // console.log(this);
  // this -> window
})

fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);
  // this -> window
})

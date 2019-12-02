class Instructor extends Person{
  static all = []

  // linked to new Instructor
  constructor(name, fullName){
    // `this` inside of a constructor is the instance
    super()
    this.name = name
    this.fullName = fullName
    Instructor.all.push(this)
  }

  static classMethod(){
    return "This is a class method."
  }

  sing(){
    return super.sing().toUpperCase()
  }

  dance(){
    return "I am dancing!"
  }

  introduce(){
    // `this` inside of an instance method is the instance
    return `Hi, I am ${this.name}!!!`
  }

}

const ericInstructor = new Instructor("Eric", "Eric Kim")
const nickyInstructor = new Instructor("Nicky", "Nicholas Dover")


// function OldInstructor(){
//
// }
//
// OldInstructor.prototype.dance = function(){
//   return "I am dancing!"
// }

function globalIntroduce(){
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

console.log(nicky.introduce())
console.log(eric.introduce())
console.log(annie.introduce())

// console.log(eric.introduce);
// console.log(nicky.introduce);

// console.log(eric.introduce() === nicky.introduce())

// console.log(eric.introduce === nicky.introduce)

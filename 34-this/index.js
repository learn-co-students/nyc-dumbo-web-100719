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










document.addEventListener("click", function(event){
  // console.log(this);
})

let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
  // console.log(this);
})

fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);
})

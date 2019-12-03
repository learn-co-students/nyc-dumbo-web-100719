let mainDiv = document.querySelector("#main-div")

class JSButton {

  constructor(colorArg) {
    // `this` inside the constructor is the instance
    this.color = colorArg

    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = `Color: ${this.color}!!!`
    this.pTag = document.createElement("p")
      this.pTag.innerText = "Click me!"

    mainDiv.append(this.buttonTag, this.pTag)

    this.buttonTag.addEventListener("click", this.handleClick)
    this.pTag.addEventListener("click", this.handlePTag)
  }


  // handleClick is an instance method, therefore `this` oughta be the instance
  handleClick = () => {
    document.body.style.backgroundColor = this.color
  }

  handlePTag = () => {
    console.log(this.color);
  }





}

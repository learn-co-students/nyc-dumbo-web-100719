let toyBoxContainer = document.querySelector("#toyboxes")
const toyCollection = document.querySelector("#toy-collection")

class JSBox {
  static all = []

  constructor(boxObj) {
    this.name = boxObj.name
    this.toys = boxObj.toys
    this.id = boxObj.id

    this.button = document.createElement("button")
      this.button.className = "toybox"
      this.button.innerText = this.name
    toyBoxContainer.append(this.button)

    this.button.addEventListener("click", this.handleClick)
    JSBox.all.push(this)
  }


  handleClick = () => {
    toyCollection.innerHTML = ''
    this.toys.forEach((toy) => {
      new Card(toy)
    })
  }


}

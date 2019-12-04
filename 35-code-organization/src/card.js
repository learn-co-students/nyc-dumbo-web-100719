class Card {
  constructor(toyObj) {
    this.id = toyObj.id
    this.name = toyObj.name
    this.likes = toyObj.likes
    this.image = toyObj.image
    this.box_id = toyObj.box_id

    this.div = document.createElement("div")
      this.div.className = "card"
    this.h2 = document.createElement("h2")
      this.h2.innerText = this.name
    this.img = document.createElement("img")
      this.img.src = this.image
      this.img.className = "toy-avatar"
    this.p = document.createElement("p")
      this.p.innerText = `${this.likes} Likes`
    this.button = document.createElement("button")
      this.button.innerText = "Like <3"
      this.button.className = "like-btn"
    this.deleteButton = document.createElement("button")
      this.deleteButton.innerText = "Delete"

    this.div.append(this.h2, this.img, this.p, this.button, this.deleteButton)

    toyCollection.append(this.div)

    this.button.addEventListener("click", this.handleLike)
    this.deleteButton.addEventListener("click", this.handleDelete)
  }



  handleLike = () => {
    adaptor.increaseLikeForThisToy(this.id)
    .then((updatedToy) => {
      this.likes = updatedToy.likes
      this.p.innerText = `${this.likes} Likes`
    })
  }



  handleDelete = () => {
    fetch(`http://localhost:3000/toys/${this.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      // setState
      let foundBox = JSBox.all.find(box => box.id === this.box_id)
      let removedArray = foundBox.toys.filter(toy => toy.id !== this.id)
      foundBox.toys = removedArray
      // setState
      this.div.remove()
    })
  }



}

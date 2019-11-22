let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{

  const toyCollectionDiv = document.querySelector("#toy-collection")
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  const newToyForm = document.querySelector(".add-toy-form")

  // START OF ADD BUTTON EVENT LISTENER
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })
  // END OF ADD BUTTON EVENT LISTENER

  // START OF FETCH
  fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then((toysArr) => {
    toysArr.forEach((toy) => {
      makeToyObjToCard(toy)
    })
  })
  .catch((error) => {
    console.error(error);
  })
  // END OF FETCH

  // START OF THE FUNCTION TO MAKE A TOY CARD
  function makeToyObjToCard(toyObj){
    let toyDiv = document.createElement("div")
      toyDiv.className = "card"
    let toyNameH2 = document.createElement("h2")
      toyNameH2.innerText = toyObj.name
    let toyImg = document.createElement("img")
      toyImg.src = toyObj.image
      toyImg.className = "toy-avatar"
    let toyP= document.createElement("p")
      toyP.innerText = `${toyObj.likes} Likes`
    let likeButton = document.createElement("button")
      likeButton.innerText = "Like <3"
      likeButton.className = "like-btn"
      likeButton.dataset.id = toyObj.id
      // likeButton.setAttribute("data-id", toyObj.id)

    toyDiv.append(toyNameH2, toyImg, toyP, likeButton)
    toyCollectionDiv.append(toyDiv)

    // START OF LIKE BUTTON EVENT LISTENER
    likeButton.addEventListener("click", () => {

      fetch(`http://localhost:3000/toys/${toyObj.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({
          likes: ++ toyObj.likes
        })
      })
      .then(r => r.json())
      .then((updatedObj) => {
        // toyObj.likes = updatedObj.likes
        toyP.innerText = `${toyObj.likes} Likes`
      })
    })
    // END OF LIKE BUTTON EVENT LISTENER


  }
  // END OF THE FUNCTION TO MAKE A TOY CARD



  // START OF THE EVENT LISTENER FOR THE FORM

  newToyForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let newToyName = evt.target.name.value
    let newToyImage = evt.target.image.value

    fetch("http://localhost:3000/toys", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: newToyName,
        image: newToyImage,
        likes: 0
      })
    })
    .then(r => r.json())
    .then((newToy) => {
      makeToyObjToCard(newToy)
      evt.target.reset()
    })
  })

  // END OF THE EVENT LISTENER FOR THE FORM


  // DELEGATION WAY TO ADD EVENT LISTENER
  // toyCollectionDiv.addEventListener("click", (evt) => {
  //   if (evt.target.className === "like-btn") {
  //
  //     let toyId = evt.target.dataset.id
  //     let toyCardDiv = evt.target.parentElement
  //     let pTag = toyCardDiv.querySelector("p")
  //     let numLikes = parseInt(pTag.innerText)
  //     numLikes++
  //
  //     fetch(`http://localhost:3000/toys/${toyId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //         "accept": "application/json"
  //       },
  //       body: JSON.stringify({
  //         likes: numLikes
  //       })
  //     })
  //     .then(r => r.json())
  //     .then((updatedObj) => {
  //       pTag.innerText = `${updatedObj.likes} Likes`
  //     })
  //
  //   }
  // })

})

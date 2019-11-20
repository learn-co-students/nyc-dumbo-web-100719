// fetch(url, {})
// .then(r => r.json())
// .then((theActualResponse) => {
  // Do whatever you want with the theActualResponse
// })



// element.addEventListener("event_type", (evt) => {
  // GET SOME VARIABLES FROM THE EVT.TARGET

  // fetch(url, {})
  // .then(r => r.json())
  // .then((theActualResponse) => {
    // Manipulate the DOM
  // })
// })



let button = document.querySelector("#hello-button")
let foxesUL = document.querySelector("#foxes")
let newFoxForm = document.getElementById('fox-form')

button.addEventListener('click', (evt) => {
  fetch("http://localhost:3000/foxes/random")
    .then(res => res.json())
    .then((foxObject) => {
      takeFoxJsonToFoxImageLI(foxObject)
    })
})



newFoxForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let newFoxName = evt.target.f_name.value
  let newFoxImage = evt.target.f_img.value

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: newFoxName,
      img_url: newFoxImage
    })
  })
  .then(r => r.json())
  .then(takeFoxJsonToFoxImageLI)
})



function takeFoxJsonToFoxImageLI(fox){
  let newFoxLi = document.createElement("li")
  let newFoxImg = document.createElement("img")

  newFoxImg.src = fox.img_url
  newFoxImg.alt = fox.name

  newFoxLi.append(newFoxImg)
  foxesUL.append(newFoxLi)

}

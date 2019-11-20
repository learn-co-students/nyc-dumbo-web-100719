// fetch(url, {})
// .then(r => r.json()) // No curlies necessary because I want to return r.json() to the next promise
// .then((theActualResponse) => {
  // Do whatever you want with the theActualResponse
// })

let dogButton = document.querySelector("#hello-button")

dogButton.addEventListener("click", (evt) => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then((responseObject) => {

      let dogLi = document.createElement("li")
      let dogList = document.querySelector('ul')
      let dogImage = document.createElement("img")

      dogImage.src = responseObject.message

      dogLi.append(dogImage)
      dogList.append(dogLi)
    })

})


// let makeImageToLi = (responseObject) => {
//
//   let dogLi = document.createElement("li")
//   let dogList = document.querySelector('ul')
//   let dogImage = document.createElement("img")
//
//   dogImage.src = responseObject.message
//
//   dogLi.append(dogImage)
//   dogList.append(dogLi)
//
// }

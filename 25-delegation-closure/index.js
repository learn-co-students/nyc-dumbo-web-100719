// 1) Find the element that you want to add the event listener on
// 2) Add the event listener
// 3) In the body of the callback, write what you want to do.

// element.addEventListener("event_type", (evt) => {
  // What do you want to do here?
// })

let tacoButton = document.getElementById('taco')
let emojiList = document.querySelector("#blobs")

tacoButton.addEventListener("click", () => {
  takeAnEmojiAndMakeItAnLi("🌮")
})


let emojiForm = document.getElementById('emoji-form')
emojiForm.addEventListener("submit", event => {
  event.preventDefault();
  let theActualEmoji = event.target.emoji.value
  takeAnEmojiAndMakeItAnLi(theActualEmoji)

})

// let takeAnEmojiAndMakeItAnLi = (emoji) => {
  // let newEmojiLi = document.createElement("li")
  // newEmojiLi.innerText = emoji
  // emojiList.append(newEmojiLi)
// }


// DELEGATION (Only 1 event listener)
// 1) Find a stable parent on the HTML
// 2) Add an event listener
// 3) Gate it behind an if statement
// 4) Do the DOM Manipulation

// emojiList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI"){
//     event.target.remove()
//   }
// })



// CLOSURE
// As I add an element to the DOM, it will also come with an event listener

function takeAnEmojiAndMakeItAnLi(emoji){
  let newEmojiLi = document.createElement("li")
  newEmojiLi.innerText = emoji
  emojiList.append(newEmojiLi)

  // emojiList.innerHTML += `<li>${emoji}</li>`

  newEmojiLi.addEventListener("click", () => {
    newEmojiLi.remove()
  })
}

let theOriginalSixLis = document.querySelectorAll("li")
// let lis = document.getElementsByTagName('li')
theOriginalSixLis.forEach((emojiLi) => {

  emojiLi.addEventListener("click", () => {
    emojiLi.remove()
  })

})
























//

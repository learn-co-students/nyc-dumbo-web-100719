// 1) Find the element that you want to add the event listener on
// 2) Add the event listener
// 3) In the body of the callback, write what you want to do.


// element.addEventListener("event_type", function(evt){
  // What do you want to do here?
// })

// element.addEventListener("event_type", (evt) => {
  // What do you want to do here?
// })



// document.addEventListener("DOMContentLoaded", function(){})

let tacoButton = document.getElementById('taco')
let emojiList = document.querySelector("#blobs")

tacoButton.addEventListener("click", function(){
  let newEmojiLi = document.createElement("li")
  newEmojiLi.innerText = "🌮"
  emojiList.append(newEmojiLi)
})


let emojiForm = document.getElementById('emoji-form')
emojiForm.addEventListener("submit", event => {
  event.preventDefault();

  let theForm = event.target
  let theInputElement = theForm["emoji"]
  let theActualEmoji = theInputElement.value

  let newEmojiLi = document.createElement("li")
  newEmojiLi.innerText = theActualEmoji
  emojiList.append(newEmojiLi)

  // event.target.emoji.value
})


// let functionName = () => {
//
// }

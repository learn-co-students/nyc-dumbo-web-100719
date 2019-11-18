// // READ
let emojisUL = document.querySelector("ul")
let theSameEmojisUL = document.getElementById('blobs')
let anotherWayToGrabTheEmojisUL = document.querySelector("#blobs")

// console.log(emojisUL, theSameEmojisUL, anotherWayToGrabTheEmojisUL);



// // CREATE

// 1) Create an element
let newEmojiLi = document.createElement("li")
// 2) Razzmatazz
newEmojiLi.id = "createdElement"
newEmojiLi.className = "good ugly"
newEmojiLi.classList.add("better")

newEmojiLi.innerText = "🍓"
// 3) Find an appropriate place to slap on the DOM
emojisUL.append(newEmojiLi)

// OR ANOTHER WAY TO CREATE SOMETHING

// emojisUL.innerHTML += "<li class='dont do this'>🤡</li>"



// // UPDATE

// 1) Find the element
let headingH1 = document.querySelector("h1")
// 2) Alter the element/Razzmatazz
headingH1.innerText = "Here is a nice list, grandma!"



// // DESTROY

// 1) Find the element
let allBaddyEmojiLis = emojisUL.querySelectorAll("li.bad")

// querySelectorAll returns a NodeList and we can only forEach over a NodeList
// getElementsByBlahBlah returns an HTMLCollection (most of the time)

// 2) Remove it from the DOM
allBaddyEmojiLis.forEach(function(badEmojiLi){
  badEmojiLi.remove()
})

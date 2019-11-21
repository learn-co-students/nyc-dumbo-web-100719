document.addEventListener("DOMContentLoaded", () => {
  let newForm = document.querySelector("#new-to-do")

  newForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let newTitle = evt.target.title.value
    // let newTitle2 = newForm.title.value

    fetch("http://localhost:3000/to_do_items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: newTitle,
        done: false
      })
    })
    .then(r => r.json())
    .then((newlyCreatedToDo) => {
      takeOneToDoAndTurnItIntoLI(newlyCreatedToDo);
      evt.target.reset()
    })


  })

  fetch("http://localhost:3000/to_do_items")
    .then(r => r.json())
    .then((toDoArray) => {
      toDoArray.forEach((oneTodo) => {
        takeOneToDoAndTurnItIntoLI(oneTodo)
      })
    })

})

function takeOneToDoAndTurnItIntoLI(toDoObj){
  let toDoOl = document.getElementById('to-do-items')

  // 1) Create and razzmatazz the outer box
  let toDoLi = document.createElement("li")
  toDoLi.className = "item"

  // 2) Put stuff inside the box
  toDoLi.innerHTML = `<input id="to-do-item-${toDoObj.id}" type="checkbox" ${ toDoObj.done ? "checked" : "" } />
    <label for="to-do-item-${toDoObj.id}" class="js-title middle aligned content">${toDoObj.title}</label>
    <button>×</button>`

  // 3) Append the box onto the DOM
  toDoOl.append(toDoLi)



}

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
let toDoOl = document.getElementById('to-do-items')

function takeOneToDoAndTurnItIntoLI(toDoObj){

  // 1) Create and razzmatazz the outer box
  let toDoLi = document.createElement("li")
  toDoLi.className = "item"
  if (toDoObj.done) {
    toDoLi.classList.add("done")
  }

  // 2) Put stuff inside the box
  toDoLi.innerHTML = `<input id="to-do-item-${toDoObj.id}" type="checkbox" ${ toDoObj.done ? "checked" : "" } />
    <label for="to-do-item-${toDoObj.id}" class="js-title middle aligned content">${toDoObj.title}</label>
    <button class="del-button">×</button>`

  // 3) Append the box onto the DOM
  toDoOl.append(toDoLi)

  // Pulling stuff out of the box to delete
  let deleteButton = toDoLi.querySelector(".del-button")

  deleteButton.addEventListener("click", () => {
    // handleDelete(toDoObj, toDoLi)
    // // OR
    fetch(`http://localhost:3000/to_do_items/${toDoObj.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then((res) => {
      toDoLi.remove()
    })
  })

  // Pulling stuff out of the box to update
  let checkBoxInput = toDoLi.querySelector(`#to-do-item-${toDoObj.id}`)
  // let checkBoxInput = toDoLi.querySelector('input')

  checkBoxInput.addEventListener("click", () => {
    handleUpdate(toDoObj, toDoLi)
  })

}

function handleDelete(toDoObj, toDoLi){
  
  fetch(`http://localhost:3000/to_do_items/${toDoObj.id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then((res) => {
    toDoLi.remove()
  })

}

function handleUpdate(toDoObj, toDoLi){

  fetch(`http://localhost:3000/to_do_items/${toDoObj.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      done: !toDoObj.done
    })
  })
  .then(r => r.json())
  .then((updatedObj) => {
    toDoObj.done = updatedObj.done
    if (updatedObj.done) {
      toDoLi.classList.add("done")
    } else {
      toDoLi.classList.remove("done")
    }
  })

}





















//

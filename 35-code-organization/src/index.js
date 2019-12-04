const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainer.style.display = 'none'
  }
})

adaptor.getAllBoxes()
.then((boxes) => {
  boxes.forEach((box) => {
    new JSBox(box);
  })
})

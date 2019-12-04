function getAllBoxes(){
  let originalPromise = fetch("http://localhost:3000/boxes")
  let almostTherePromise = originalPromise.then(r => r.json())
  return almostTherePromise
}


function increaseLikeForThisToy(id){
  return fetch(`http://localhost:3000/toys/${id}/likes`, {
    method: "PATCH"
  })
  .then(r => r.json())
}


const adaptor = {
  getAllBoxes,
  increaseLikeForThisToy
}

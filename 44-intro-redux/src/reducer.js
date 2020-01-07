
const initialState = { 
  goats: [], 
  gerbils: [], 
  cakes: [] 
}

const reducer = (currentState = initialState, action) => {

  // console.log(currentState)
  // console.log(action)

  if (action.type === "ADD_GOAT") {
    return {
      ...currentState, //preserve gerbils and cakes
      goats: [ 
        ...currentState.goats, //preserve existing goats
        action.goat
      ]
    }
  } else if (action.type === "PETA") {
    return {
      ...currentState,
      goats: []
    }
  }

  return currentState
}


export default reducer;
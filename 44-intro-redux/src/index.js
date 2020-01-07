import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

// console.log(store)

const addHopeGoatAction = {
  type: "ADD_GOAT",
  goat: {
    name: "Hope"
  }
}

const addGoatAction = {
  type: "ADD_GOAT",
  goat: {
    name: "Billy"
  }
}

store.dispatch(addHopeGoatAction)
store.dispatch(addGoatAction)

// console.log(store.getState())








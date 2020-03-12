import { INSERT, REMOVE } from './actions'

const initialState = {
  docs: []
}

export function reducer( state=initialState, action ) {
  switch(action.type) {
    case INSERT:
      console.log(action)
      
      return {
        docs: [...state.docs, action.item]
      }
    case REMOVE:
      return {
        docs: [...state.docs]
      }
    default:
      return state
  }
}
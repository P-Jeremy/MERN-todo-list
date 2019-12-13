import { TODO_GET, TODO_ADD, TODO_UPDATE, TODO_REMOVE } from '../actions/todoActions'

export default function todoReducer (state = [], action) {
  switch (action.type) {
    case TODO_ADD: {
      return state
    }
    case TODO_GET: {
      const list = [state, ...action.payload]
      return list
    }
    case TODO_UPDATE: {
      return state
    }
    case TODO_REMOVE: {
      return state
    }
    default:
      return state
  }
}

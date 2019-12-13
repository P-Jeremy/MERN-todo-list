import todoReducer from '../reducers/todoReducer'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({ todos: todoReducer })

const store = createStore(
  reducer,
  compose(applyMiddleware(...[thunk]))
)

export default store

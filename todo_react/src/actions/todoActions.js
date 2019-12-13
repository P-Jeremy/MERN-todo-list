import axios from 'axios'

const url = 'http://localhost:8080/api/todo'
export const TODO_ADD = 'TODO_ADD'
export const todoAdd = (title) => {
  return async function (dispatch) {
    const response = await axios.post(url, { title: title })
    dispatch({ type: TODO_ADD, payload: response.data })
  }
}

export const TODO_GET = 'TODO_GET'
export const todoGet = () => {
  return async function (dispatch) {
    const response = await axios.get(url)
    dispatch({ type: TODO_GET, payload: response.data })
  }
}

export const TODO_UPDATE = 'TODO_UPDATE'
export const todoUpdate = (id) => {
  return async function (dispatch) {
    const response = await axios.put(url + `/${id}`)
    dispatch({ type: TODO_UPDATE, payload: response.data })
  }
}

export const TODO_REMOVE = 'TODO_REMOVE'
export const todoRemove = (id) => {
  return async function (dispatch) {
    const response = await axios.delete(url + `/${id}`)
    dispatch({ type: TODO_REMOVE, payload: response.data })
  }
}

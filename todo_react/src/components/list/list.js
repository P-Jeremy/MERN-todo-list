/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import TodoItemContainer from '../item/todoItemContainer'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8080')

export class List extends Component {
  componentDidMount () {
    this.props.todoGet()
    socket.on('newTodo', () => {
      return this.props.todoGet()
    })
    socket.on('todoErased', () => {
      return this.props.todoGet()
    })
    socket.on('todoUpdated', () => {
      return this.props.todoGet()
    })
  }

  render () {
    const { todos } = this.props
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {todos.map(todo => {
            if (todo.isActive) {
              return (<TodoItemContainer key={todo._id} data={todo} />)
            }
          })}
        </div>
      </div>
    )
  }
}

export default List

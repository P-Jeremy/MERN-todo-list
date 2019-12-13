/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import TodoInputContainer from '../input/todoInputContainer'
import ListContainer from '../list/ListContainer'

export class TodoMain extends Component {
  render () {
    return (
      <div>
        <section>
          <TodoInputContainer />
        </section>
        <section>
          <ListContainer />
        </section>
      </div>
    )
  }
}

export default TodoMain

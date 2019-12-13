import { connect } from 'react-redux'
import { todoRemove, todoUpdate } from '../../actions/todoActions'
import TodoItem from './todoItem'


const mapDispatchToProps = (dispatch) => ({
  todoRemove: (id) => {
    dispatch(todoRemove(id))
  },
  todoUpdate: (id) => {
    dispatch(todoUpdate(id))
  }
})

const TodoItemContainer = connect(
  undefined,
  mapDispatchToProps
)(TodoItem)

export default TodoItemContainer

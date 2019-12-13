import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './todoItem';

Enzyme.configure({ adapter: new Adapter() });

let item;
let todoRemove;
let todoUpdate;
const todo = {
  _id: "kmkmlk",
  title: 'test',
  done: false,
  isActive: true
}

beforeEach(() => {
  todoRemove = jest.fn()
  todoUpdate = jest.fn()
  item = shallow(
    <TodoItem
      key={todo._id}
      data={todo}
      todoRemove={todoRemove}
      todoUpdate={todoUpdate}
    />);
});

describe('Input', () => {

  test('it renders correctly', () => {
    expect(item).toMatchSnapshot();
  });

  it('Should call todoRemove() on btn click', () => {
    const btn = item.find('button');
    const todoRemove = item.instance().props.todoRemove;
    btn.simulate('click');
    expect(todoRemove).toHaveBeenCalled();
  });

  it('Should call todoUpdate() on box checked', () => {
    const box = item.find('input');
    const todoUpdate = item.instance().props.todoUpdate;
    box.simulate('change');
    expect(todoUpdate).toHaveBeenCalled();
  });
})

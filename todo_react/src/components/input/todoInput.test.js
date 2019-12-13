import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoInput from './todoInput';

Enzyme.configure({ adapter: new Adapter() });

let input;
let todoAdd;
beforeEach(() => {
  todoAdd = jest.fn(),
    input = shallow(<TodoInput todoAdd={todoAdd} />);
});

describe('Input', () => {

  test('it renders correctly', () => {
    expect(input).toMatchSnapshot();
  });

  it('Should change input state with handleChange()', () => {

    const inputTodo = input.find('#todoInput');
    const mockEvent = {
      target: {
        name: 'input',
        value: "test"
      },
    };
    inputTodo.simulate('change', mockEvent);
    expect(input.state().input).toEqual('test');
  });


  it('Should call todoAdd() on submit', () => {
    const form = input.find('form');
    const handleSubmit = jest.fn();
    form.simulate('submit', {
      preventDefault: () => {
      }
    });
    const todoAdd = input.instance().props.todoAdd;

    expect(todoAdd).toHaveBeenCalled();
  });

  it('Should reset input state with handleSubmit()', () => {
    const btn = input.find('#submit');
    btn.simulate('click');
    expect(input.state().input).toEqual('');
  });
})

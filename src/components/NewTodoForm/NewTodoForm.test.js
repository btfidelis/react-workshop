import React from 'react'
import NewTodoForm from './NewTodoForm'
import { create, act } from 'react-test-renderer'

it('matches snapshot', () => {
  const form = create(<NewTodoForm />);
  expect(form.toJSON()).toMatchSnapshot();
})

it('sends input data when clicking submit', () => {
  const submitAction = jest.fn();

  const form = create(<NewTodoForm onSubmitForm={submitAction} />);
  const button = form.root.findByType('button');
  const input = form.root.findByType('input');

  act(() => {
    input.props.onChange({ target: { value: 'testing' }});
  })

  button.props.onClick();

  expect(submitAction).toBeCalledWith({ newTodo: input.props.value });
})

it('changes input field', () => {
  const form = create(<NewTodoForm />);
  const input = form.root.findByType('input');

  act(() => {
    input.props.onChange({ target: { value: 'a' }});
  })

  expect(input.props.value).toBe('a');
})
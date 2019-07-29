import React from 'react'

import { create } from 'react-test-renderer'

import TodoList from './TodoList'
import Todo from './../Todo/Todo'

it('matches snapshot', () => {
  const todoList = create(<TodoList todos={[]} />);
  expect(todoList.toJSON()).toMatchSnapshot();
})

it ('lists todos', () => {
  const onComplete = jest.fn();
  const onDelete = jest.fn();
  const todos = [
    { id: 1, title: 'a', done: false, createdAt: new Date(2018,2,2) },
    { id: 2, title: 'b', done: true, createdAt: new Date(2019,2,2) },
  ]

  const todoList = create(
    <TodoList
      todos={todos}
      onCompleted={onComplete}
      onRemoved={onDelete}
    />
  )

  const renderedTodos = todoList.root.findAllByType(Todo);

  expect(renderedTodos.length).toBe(2);
})
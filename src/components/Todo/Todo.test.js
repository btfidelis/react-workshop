import React from 'react'
import Todo from './Todo'
import { create } from 'react-test-renderer'

it('matches snapshot', () => {
  const createAt = new Date(2012, 11, 11, 0, 0, 0);
  const todo = create(<Todo title="test" done={false} createdAt={createAt} />);
  expect(todo.toJSON()).toMatchSnapshot();
})

it('shows status as "pending" when todo is not done', () => {
  const createAt = new Date(2012, 11, 11, 0, 0, 0);
  const todo = create(<Todo title="test" done={false} createdAt={createAt} />);

  expect(
    todo.root
      .find((el) =>
        el.children && el.children.join('') === 'status: pending'
      )
  ).toBeTruthy();
})

it('shows status as "completed" when todo is not done', () => {
  const createAt = new Date(2012, 11, 11, 0, 0, 0);
  const todo = create(<Todo title="test" done={true} createdAt={createAt} />);

  expect(
    todo.root
      .find((el) =>
        el.children && el.children.join('') === 'status: completed'
      )
  ).toBeTruthy();
})

it('calls onCompleted when clicking done', () => {
  const createAt = new Date(2012, 11, 11, 0, 0, 0);
  const onCompleted = jest.fn();
  const todo = create(<Todo id="abc" title="test" done={true} createdAt={createAt} onCompleted={onCompleted} />);

  const button = todo.root.find(
    el => el.type === 'button' && el.children.join('') == ' done '
  );

  button.props.onClick()

  expect(onCompleted).toBeCalledWith('abc');
})

it('calls onRemoved when clicking delete', () => {
  const createAt = new Date(2012, 11, 11, 0, 0, 0);
  const onRemoved = jest.fn();
  const todo = create(<Todo id="123" title="test" done={true} createdAt={createAt} onRemoved={onRemoved} />);

  const button = todo.root.find(
    el => el.type === 'button' && el.children.join('') == ' delete '
  );

  button.props.onClick()

  expect(onRemoved).toBeCalledWith('123');
})


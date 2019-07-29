import React from 'react'

import Todo from './../Todo/Todo'

export default function ({ todos, onCompleted, onRemoved }) {
  return (
    <div>
      {todos.map(x =>
        <Todo { ...x }
              key={x.id + x.title}
              onCompleted={onCompleted}
              onRemoved={onRemoved} />)}
    </div>
  )
}
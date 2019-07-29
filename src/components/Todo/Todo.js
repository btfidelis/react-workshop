import React from 'react'

const formatDate = date =>
  `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

export default function ({ id, title, done, createdAt, onCompleted, onRemoved }) {
  return (
    <div>
      <div>{title}</div>
      <div>status: { done ? 'completed' : 'pending' }</div>
      <div> - {formatDate(createdAt)}</div>
      <button onClick={() => onCompleted(id)} > done </button>
      <button onClick={() => onRemoved(id)}> delete </button>
    </div>
  )
}
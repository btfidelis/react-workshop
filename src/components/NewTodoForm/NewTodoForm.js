import React, { useState } from 'react'

export default function ({ onSubmitForm }) {
  const [inputs, setInputs] = useState({ newTodo: '' })

  return (
    <div>
      <input
        type="text"
        value={inputs.newTodo}
        onChange={ e => setInputs({ ...inputs, newTodo: e.target.value }) }
      />
      <button onClick={() => onSubmitForm(inputs)}>Add</button>
    </div>
  )
}
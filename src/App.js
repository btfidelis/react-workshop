import React, { useState, useEffect } from 'react';
import './App.css';

function App (props) {
  const [ msg, updateMsg ] = useState('')

  return (
    <div>
      <h1>{msg}</h1>
      <input type="text" onChange={ e => updateMsg(e.target.value)  } />
      <button onClick={() => alert(msg)}>Send</button>
    </div>
  );
}

export default App;

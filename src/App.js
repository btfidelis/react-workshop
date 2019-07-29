import React, { useState } from 'react';

import NewTodoForm from './components/NewTodoForm/NewTodoForm'
import TodoList from './components/TodoList/TodoList'

const removeTodo = (state, id) => {
  return { ...state, todos: state.todos.filter(x => x.id !== id) }
}

const addTodo = (state, newTodo) => {
  const nextId = state.todos.length + 1;
  const todo = { id: nextId, title: newTodo, createdAt: new Date() }

  return {...state, todos: state.todos.concat([todo]) }
}

const markTodoAsDone = (state, id) => {
  const markDoneById = (todo) => {
    if (todo.id === id) {
      return { ...todo, done: true }
    }

    return todo
  }


  return {...state, todos: state.todos.map(markDoneById) }
}

function App() {
  const [appState, setAppState] = useState({
    todos: []
  })

  return (
    <div className="App">
      <NewTodoForm
        onSubmitForm={({ newTodo }) => 
          setAppState(addTodo(appState, newTodo)) 
        } 
      />
      <TodoList 
        todos={appState.todos} 
        onCompleted={(id) => 
          setAppState(markTodoAsDone(appState, id))
        }
        onRemoved={(id) => 
          setAppState(removeTodo(appState, id))
        }
      />
    </div>
  );
}

export default App;

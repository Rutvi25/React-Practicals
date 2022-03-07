import React from 'react'

import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoDate from './Components/TodoDate/TodoDate'

function App() {
  return (
    <div className='App'>
      <div className='todo-list'>
        <TodoDate />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;

import React from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import TaskList from './Components/TaskList'
import TodoDate from './Components/TodoDate'

function App() {
  return (
    <div className='App'>
      <div className='todo-list'>
        <TodoDate />
        <TaskList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;

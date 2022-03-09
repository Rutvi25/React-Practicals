import React, { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoDate from './Components/TodoDate/TodoDate'
import TodoList from './Components/TodoList/TodoList';

function App() {
  let instantDate = new Date().toLocaleDateString().toString();
  if (localStorage.getItem('presentDate') !== instantDate) {
    localStorage.clear('todoList')
  }
  const [todoListItems, setTodoListItems] = useState(() => {
    const todoList = localStorage.getItem('todoList')
    if(todoList) {
      return JSON.parse(todoList)
    }
    else {
      return [];
    }
  })
  return (
    <div className='App'>
      <div className='todo-list'>
        <TodoDate />
        <TodoList todoListItems={todoListItems}/>
        <AddTodo todoListItems={todoListItems} setTodoListItems={setTodoListItems}/>
      </div>
    </div>
  );
}

export default App;
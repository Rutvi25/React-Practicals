import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareCheck, faTimesSquare} from '@fortawesome/free-solid-svg-icons';

import './AddTodo.css'
import UserTask from '../UserTask/UserTask';
import EmptyList from '../EmptyList/EmptyList'

function AddTodo() {
  const [displayAddTodoForm, setDisplayAddTodoForm] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const [todoListItems, setTodoListItems] = useState(() => {
    const todoList = localStorage.getItem('todoList')
    if(todoList) {
      return JSON.parse(todoList)
    }
    else {
      return [];
    }
  })
  // for adding new task
  const addNewTask = () => {
    if(!taskTitle){
      alert('Task title can\'t be empty.')
    }
    else {
      setTodoListItems([ ...todoListItems, taskTitle ]);
      setTaskTitle('')
    } 
  }
  // adding tasks to local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoListItems))
  }, [todoListItems])
  // handle key events
  function handleKeyPress(e) {
    if(e.keyCode === 27) {
      setDisplayAddTodoForm(false)
    }
    else if (e.keyCode === 13) {
      addNewTask()
    }
  }
  // add todo form
  let showForm;
  if(displayAddTodoForm){
    showForm = 
      <div className='add-todo-form'>
          <input 
            autoFocus type='text' 
            className='add-todo-input' 
            onKeyDown={handleKeyPress} 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div>
            <FontAwesomeIcon 
              className='add-todo-submit' 
              icon={faSquareCheck} 
              onClick={addNewTask}
            />
          </div>
          <div>
            <FontAwesomeIcon 
              className='add-todo-cancel' 
              icon={faTimesSquare} 
              onClick={() => setDisplayAddTodoForm(false)}
            />
          </div>
      </div>
  }
  else {
    showForm = 
      <div className='add-todo-btn-container'>
        <button 
          className='add-todo-button' 
          onClick={() => setDisplayAddTodoForm(true)}
        >
          +
        </button>
      </div>
  }
  // error handling for empty list
  let displayTaskList;
  if(todoListItems.length === 0) {
    displayTaskList = <EmptyList />
  }
  else {
    <div>
      {displayTaskList = todoListItems.map((task, id) => {
        console.log(id, task)
        return(
          <UserTask key={id} title={task}/>  
        )
      })}   
    </div> 
  }

  return (
    <>
      <div className='task-container'>
        {displayTaskList}
      </div>
      <div>
        {showForm}
      </div>
    </>
  )
}

export default AddTodo

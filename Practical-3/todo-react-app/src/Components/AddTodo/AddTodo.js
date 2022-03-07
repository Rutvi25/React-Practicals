import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareCheck, faTimesSquare} from '@fortawesome/free-solid-svg-icons';

import './AddTodo.css'


function AddTodo() {
  const [displayForm, setDisplayForm] = useState(false)
  const [addTaskTitle, setAddTaskTitle] = useState('')
  const [taskItems, setTaskItems] = useState([])

  const addNewTask = () => {
    setTaskItems([ ...taskItems, addTaskTitle ]);
    setAddTaskTitle('')

  }

  function handleKeyPress(e) {
    if(e.keyCode === 27) {
      setDisplayForm(false)
    }
    else if (e.keyCode === 13) {
      addNewTask()
    }
  }
 
  let showForm;
  if(displayForm){
    showForm = 
      <div className='add-todo-form'>
          <input type="text" onKeyDown={handleKeyPress} value={addTaskTitle} onChange={(e) => setAddTaskTitle(e.target.value)}/>
          <span>
          <FontAwesomeIcon icon={faSquareCheck} onClick={addNewTask}/>
          </span>
          <span>
          <FontAwesomeIcon icon={faTimesSquare} onClick={() => setDisplayForm(false)}/>
          </span>
          <div>{taskItems}</div>
      </div>
  }
  else {
    showForm = 
      <div className='add-btn-container'>
        <button className='add-todo-button'  onClick={() => setDisplayForm(true)}>+</button>
      </div>
  }
  return (
    <div>{showForm}</div>
  )
}

export default AddTodo

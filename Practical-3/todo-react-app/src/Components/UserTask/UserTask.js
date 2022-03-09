import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'

import './UserTask.css'

function UserTask(props) {
  const {title, id} = props
  let localStorageTaskStatus = localStorage.getItem(id)
  const [taskCompleted, setTaskCompleted] = useState(localStorageTaskStatus)  
  function changeTaskCompleteStatus() {
    setTaskCompleted(!taskCompleted);
    if (localStorageTaskStatus === "true")
      localStorage.removeItem(id)
    else
      localStorage.setItem(id, true)
  }
  let checkBox;
  if(taskCompleted) {
    checkBox = <FontAwesomeIcon 
                  icon={faBandcamp} 
                  className='task-complete-icon' 
                  onClick={changeTaskCompleteStatus}
                />
  }
  else {
    checkBox = <input 
                  type={'checkbox'} 
                  onClick={changeTaskCompleteStatus}  
                  className='task-checkbox' 
                  defaultChecked={false}
                />
  }
  return(
    <div className='task'>
      <div className={taskCompleted ? 'task-complete' : 'task-incomplete'} >
        {title}
      </div> 
      {checkBox}
    </div> 
  )
}

export default UserTask
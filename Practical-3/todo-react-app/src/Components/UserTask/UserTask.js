import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'

import './UserTask.css'

function UserTask(props) {
  const {title, id} = props
  let changeCompleteStatus = false
  const [taskCompleted, setTaskCompleted] = useState(localStorage.getItem(id))  
  function changeTaskCompleteStatus() {
    setTaskCompleted(!taskCompleted);
    console.log(taskCompleted)
    if(taskCompleted === false){
      localStorage.setItem(id, true)
    }
    else{
      localStorage.removeItem(id)
    }
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
      <div className={taskCompleted ? 'task-complete' : ''} >
        {title}
      </div> 
      {checkBox}
    </div> 
  )
}

export default UserTask
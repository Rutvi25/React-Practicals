import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'

import './css/Task.css'

function TaskList(props) {
  const [taskCompleted, setTaskCompleted] = useState(false)  
  function changeStatus() {
    setTaskCompleted(!taskCompleted);
  }
  let checkBox;
  if(taskCompleted) {
    checkBox = <FontAwesomeIcon 
                  icon={faBandcamp} 
                  className='task-complete-icon' 
                  onClick={changeStatus}
                />
  }
  else {
    checkBox = <input 
                  type={'checkbox'}
                  onClick={changeStatus}  
                  className='task-checkbox' 
                  defaultChecked={false}
                />
  }
  return(
    <div className='task'>
      <div className={taskCompleted? 'task-complete':''}>
        {props.title}
      </div> 
      {checkBox}
    </div> 
  )
}

export default TaskList
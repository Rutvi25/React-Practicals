import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'

import './UserTask.css'

function TaskList(props) {
  const [taskCompleted, setTaskCompleted] = useState(false)  
  function changeTaskCompleteStatus() {
    setTaskCompleted(!taskCompleted);
  }
  let checkBox;
  if(taskCompleted) {
    checkBox = <FontAwesomeIcon icon={faBandcamp} 
                  className='task-complete-icon' 
                  onClick={changeTaskCompleteStatus}
                />
  }
  else {
    checkBox = <input type={'checkbox'} 
                  onClick={changeTaskCompleteStatus}  
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
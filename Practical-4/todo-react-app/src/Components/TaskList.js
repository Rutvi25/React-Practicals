import React, {useState} from 'react'
import './css/TaskList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'
function TaskList(props) {
  const [taskChecked, setTaskChecked] = useState(false)  
  function changeStatus() {
    setTaskChecked(!taskChecked);
  }
  if(taskChecked) {
    return(
      <div className='task'>
          <div className={taskChecked? 'task-disable':''}>{props.title}</div> 
          <FontAwesomeIcon icon={faBandcamp} className='task-disable-icon' onClick={changeStatus}/>
      </div> 
    )
  }
  else{
    return(
      <div className='task'>
        <div>{props.title}</div> 
        <input onClick={changeStatus} type={'checkbox'} className='task-check' defaultChecked={false}/>
      </div> 
    )
  }
}

export default TaskList
import React from 'react'
import Task from './Task'

import './css/TaskList.css'

function TaskList() {
  const tasks = [
    {id: 1, title: 'Buy new sweatshirt'},
    {id: 2, title: 'Begin Promotional Phase'},
    {id: 3, title: 'Read an article'},
    {id: 4, title: 'Try not to fall asleep'},
    {id: 5, title: 'Watch \'Sherlock\''},
    {id: 6, title: 'Begin QA for the product'},
    {id: 7, title: 'Go for a walk'},
  ];
  return (
    <div className='task-container'>
      {tasks.map((task) => {
        return(
          <Task key={task.id} title={task.title}/>
        )
      })}
    </div>
  );
  }

export default TaskList
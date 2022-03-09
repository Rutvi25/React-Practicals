import React from 'react'

import EmptyList from '../EmptyList/EmptyList';
import UserTask from '../UserTask/UserTask';
import './TodoList.css'

function TodoList(props) {
  const { todoListItems } = props
  let displayTaskList;
  if(todoListItems.length === 0) {
    displayTaskList = <EmptyList />
  }
  else {
    <>
      {displayTaskList = todoListItems.map((task, id) => {
        return(
          <UserTask key={id} id={id} title={task}/>  
        )
      })}   
    </> 
  }
  return (
    <div className='task-container'>
      {displayTaskList}
    </div>
  )
}

export default TodoList
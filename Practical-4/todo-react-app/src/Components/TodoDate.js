import React from 'react'
import './css/TodoDate.css'

const TodoDate = () => {
  const currentDate = new Date();
  const date = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
  const month = currentDate.toLocaleString('en-us', { month: 'short' });
  const year = currentDate.getFullYear()
  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  return (
    <div className='todo-date-container'>
      {/* Date, Month & Year */}
      <div className='date-container'>
        <div className='date'>{date}</div>
        <div className='month'>
          <span><b>{month}</b></span>         
          <span>{year}</span>
        </div>
      </div>
      {/* Weekday */}
      <div className='weekday'>{weekday}</div>
    </div>
  )
}

export default TodoDate
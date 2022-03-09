import React from 'react'

import './TodoDate.css'

const TodoDate = () => {
  const currentDate = new Date();
  const date = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
  const month = currentDate.toLocaleString('en-us', { month: 'short' }).toUpperCase();
  const year = currentDate.getFullYear()
  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  localStorage.setItem('presentDate', (currentDate.toLocaleDateString()))

  return (
    <div className='todo-date-container'>
      {/* Date, Month & Year */}
      <div className='date-container'>
        <div className='date'>{date}</div>
        <div className='month-year'>
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
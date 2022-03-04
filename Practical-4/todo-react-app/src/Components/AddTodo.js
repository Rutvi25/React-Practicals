import React, { Component } from 'react'

import './css/AddTodo.css'

class AddTodo extends Component {
  render() {
    return (
      <div className='add-btn-container'>
        <button className='add-todo-button'>+</button>
      </div>
    )
  }
}

export default AddTodo

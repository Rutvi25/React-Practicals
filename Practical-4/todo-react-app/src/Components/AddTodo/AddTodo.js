import React, { Component } from 'react'

import './AddTodo.css'

class AddTodo extends Component {
  render() {
    return (
      <div className='add-todo-btn-container'>
        <button className='add-todo-button'>+</button>
      </div>
    )
  }
}

export default AddTodo

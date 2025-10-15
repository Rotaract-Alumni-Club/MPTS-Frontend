import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import '../../SCSS/ChairStyle/TaskBar.scss'

const TaskBar = () => {
  return (
    <div className="TaskBar">
        <div className="add">
            <FaPlus/>
            <h3>Add Task</h3>
        </div>
        <div className="view">
            <FaSearch/>
            <h3>View Task</h3>
        </div>
    </div>
  )
}

export default TaskBar
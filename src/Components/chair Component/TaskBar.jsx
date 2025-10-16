import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import '../../SCSS/ChairStyle/TaskBar.scss'

const TaskBar = () => {
    const [Add,setState1]=React.useState(false)
    const [View,setState2]=React.useState(false)
    const click1=()=>{
        setState1(true)
        setState2(false)
    }
    const click2=()=>{
        setState2(true)
        setState1(false)
    }

  return (
     <div className={`TaskBar${Add === true || View === true ? " purple" : ""}`}>
        <div className={`add ${Add ? 'active' : ''}`} onClick={click1} >
            <FaPlus/>
            <h3 className={Add ? 'white' : ''}>Add Task</h3>
        </div>
        <div className={`view ${View ? 'active' : ''}`} onClick={click2}>
            <FaSearch/>
            <h3 className={View ? 'white' : ''}>View Task</h3>
        </div>
    </div>
  )
}

export default TaskBar
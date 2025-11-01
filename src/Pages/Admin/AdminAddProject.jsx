import React from 'react'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import "../../SCSS/AdminStyles/AdminDashboard/AdminDashboard.scss"
import ProjectAddForm from '../../Components/AdminComponents/ProjectAddForm';
import TaskBar from '../../Components/SerachAnd/SearchAndButton';


const AdminAddProject = () => {
    const [date, setDate] = useState(new Date());
    
  return (
    <div>
      <LeftNavigationBar/>
      <Header/>
    
      <TaskBar
        title1="Add New Project"
        title2="View Projects"
      
      />

      {/* layout wrapper: form on left, calendar on right */}
      <div className="admin-add-layout">
        <div className="project-card">
            <h1>Project Form</h1>
          <ProjectAddForm/>
        </div>

        <div className="calendar-container">
          <Calendar 
            onChange={setDate} 
            value={date} 
          />
          <p className="selected-date">Selected date: {date.toDateString()}</p>
        </div>
      </div>

    </div>
  )
}

export default AdminAddProject

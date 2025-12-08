import React from 'react'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import "../../SCSS/AdminStyles/AdminDashboard/AdminDashboard.scss"
import ProjectAddForm from '../../Components/AdminComponents/ProjectAddForm';
import TaskBar from '../../Components/SerachAnd/SearchAndButton';
import { useNavigate } from 'react-router-dom';
import ProjectsTable from '../../Components/AdminComponents/ProjectsTable';


const AdminAddProject = () => {
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate()

    const [activeView, setActiveView] = useState('add');
  
    const handleViewChange = (view) => {
      setActiveView(view);
    };
  
      const handleCommitteeAdded = () => {
      setActiveView('view');
    };
    
  return (
    <div>
      <LeftNavigationBar/>
      <Header/>
    
      <TaskBar
        title1="Add New Project"
        title2="View Projects"
        onAddClick={() => handleViewChange('add')}
        onViewClick={() => handleViewChange('view')}
        activeView={activeView}     
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
      {activeView === 'add' && <ProjectAddForm onCommitteeAdded={handleCommitteeAdded} />}
      {activeView === 'view' && <ProjectsTable />}

    </div>
  )
}

export default AdminAddProject

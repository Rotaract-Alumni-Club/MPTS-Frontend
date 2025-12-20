import React from 'react'
import {FaSearch,FaPlus,FaFilter} from 'react-icons/fa'
import '../../SCSS/AdminStyles/AdminProjectStyles/AdminProjects.scss'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton.jsx'
import ProjectsTable from '../../Components/AdminComponents/ProjectsTable.jsx'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar.jsx'
import LeftNavChair from '../../Components/chair Component/LeftNavChair.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ProjectAddForm from '../../Components/AdminComponents/ProjectAddForm.jsx'

const AdminProjects = () => {
  const navigate = useNavigate()

  const [activeView, setActiveView] = useState('add');
  const [projects, setProjects] = useState([]);
  
  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleCommitteeAdded = (formData) => {
    // Map form data to table format
    const newProject = {
      id: Date.now(),
      eventName: formData.projectName,
      date: formData.startDate,
      notes: formData.description,
      chairPersons: 0
    };
    
    setProjects([...projects, newProject]);
    setActiveView('view');
  };
  return (
    <div className='admin-projects-container'>
      <LeftNavigationBar />
      
      <div className='admin-projects-header'>
        <SearchAndButton
          title1="Add New Project"
          title2="View Projects"
          onAddClick={() => handleViewChange('add')}
          onViewClick={() => handleViewChange('view')}
          activeView={activeView} 
        />
      </div>

      <div className='search_bar'>
        <button><input type="text" placeholder='Search by Event Name'/> <FaSearch/></button> 
      </div>
      
      <div className='filter_bar'>
        <button><FaFilter></FaFilter> Filter</button>
      </div>

      <div className='recently-accessed'>
        <h2>Recently Accessed</h2>
      </div>

      {activeView === 'add' && <div className='form-section'><ProjectAddForm onCommitteeAdded={handleCommitteeAdded} /></div>}
      {activeView === 'view' && <ProjectsTable projects={projects} />}
    </div>
  )
}

export default AdminProjects

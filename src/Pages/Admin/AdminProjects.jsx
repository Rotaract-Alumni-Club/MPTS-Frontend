import React from 'react'
import {FaSearch,FaPlus,FaFilter} from 'react-icons/fa'
import '../../SCSS/AdminStyles/AdminProjectStyles/AdminProjects.scss'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton.jsx'
import ProjectsTable from '../../Components/AdminComponents/ProjectsTable.jsx'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar.jsx'
import LeftNavChair from '../../Components/chair Component/LeftNavChair.jsx'

const AdminProjects = () => {
  return (
    <div>
      {/* <LeftNavigationBar/> */}
      <LeftNavigationBar />
      <SearchAndButton
      title1="Search Projects"
      title2="Add New Project"
      />
      
      
      
      
      <div className='search_bar'>
        
        <button><input type="text" placeholder='Search by Event Name'/> <FaSearch/></button> 
      </div>
      
      <div className='filter_bar'>
        <button><FaFilter></FaFilter> Filter</button>
      </div>
      <br />

      <h2>Recently Accessed</h2>

      < ProjectsTable />
      

      
      
    </div>
  )
}

export default AdminProjects

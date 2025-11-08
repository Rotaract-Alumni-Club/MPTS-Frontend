import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import "../../SCSS/AdminStyles/AdminAddMember/AdminAddMember.scss"
import MemberAddFormComponent from '../../Components/AdminComponents/MemberAddFormComponent'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"

const AdminAddMember = () => {
  const navigate = useNavigate()

  const [activeView, setActiveView] = useState('add');
    
      const handleViewChange = (view) => {
        setActiveView(view);
      };
    
        const handleCommitteeAdded = () => {
        setActiveView('view');
      };
  

  const handleTaskBarClick = (buttonType) => {
    if (buttonType === 'title1') {
      navigate('/admin/add-member')
    } else if (buttonType === 'title2') {
      navigate('/admin/view-account')
    }
  }

  return (
    <div>
      <Header/>
      <LeftNavigationBar/>
      <TaskBar
        title1="Add New Member"
        title2="View Members"
        onAddClick={() => handleViewChange('add')}
        onViewClick={() => handleViewChange('view')}
        activeView={activeView}
      />
      {/* <h1>Admin Add Member Page</h1>
      <MemberAddFormComponent/> */}
       {activeView === 'add' && <MemberAddFormComponent onCommitteeAdded={handleCommitteeAdded} />}
      {activeView === 'view' && <MemberViewAccountComponent />}
    </div>
  )
}

export default AdminAddMember

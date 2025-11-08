// import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'
import AdminAddMember from './AdminAddMember'
import MemberAddFormComponent from '../../Components/AdminComponents/MemberAddFormComponent'

const AdminViewAccount = () => {
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
    <div className="admin-view-account">
      <Header />
      <LeftNavigationBar />
      <TaskBar
        title1="Add New Member"
        title2="View Members"
        onAddClick={() => handleViewChange('add')}
        onViewClick={() => handleViewChange('view')}
        activeView={activeView}
      />
      <br /><br />
      {/* <h1>Admin View Account Page</h1>
      <div className="table-wrapper">
        <MemberViewAccountComponent />
      </div> */}
      {activeView === 'add' && <MemberAddFormComponent onCommitteeAdded={handleCommitteeAdded} />}
      {activeView === 'view' && <MemberViewAccountComponent />}
    </div>
  )
}

export default AdminViewAccount

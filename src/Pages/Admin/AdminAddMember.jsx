import React from 'react'
import Header from '../../Components/Header/Header'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import "../../SCSS/AdminStyles/AdminAddMember/AdminAddMember.scss"
import MemberAddFormComponent from '../../Components/AdminComponents/MemberAddFormComponent'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'

const AdminAddMember = () => {
  return (
    <div>
      <Header/>
      <LeftNavigationBar/>
      <TaskBar
        title1="Add New Member"
        title2="View Members"
      />
      <h1>Admin Add Member Page</h1>
      <MemberAddFormComponent/>


    </div>
  )
}

export default AdminAddMember

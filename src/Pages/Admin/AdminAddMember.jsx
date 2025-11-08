import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import "../../SCSS/AdminStyles/AdminAddMember/AdminAddMember.scss"
import MemberAddFormComponent from '../../Components/AdminComponents/MemberAddFormComponent'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'

const AdminAddMember = () => {
  const navigate = useNavigate()

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
        onTitle1Click={() => handleTaskBarClick('title1')}
        onTitle2Click={() => handleTaskBarClick('title2')}
      />
      <h1>Admin Add Member Page</h1>
      <MemberAddFormComponent/>
    </div>
  )
}

export default AdminAddMember

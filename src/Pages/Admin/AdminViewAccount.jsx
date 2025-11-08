import React from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'

const AdminViewAccount = () => {
  const navigate = useNavigate()

  const handleTaskBarClick = (buttonType) => {
    if (buttonType === 'title1') {
      navigate('/admin/add-member')
    } else if (buttonType === 'title2') {
      navigate('/admin/view-account')
    }
  }

  return (
    <div className="admin-view-account">
      <LeftNavChair />
      <Header />
      <TaskBar
        title1="Add New Member"
        title2="View Members"
        onTitle1Click={() => handleTaskBarClick('title1')}
        onTitle2Click={() => handleTaskBarClick('title2')}
      />
      <br /><br />
      <h1>Admin View Account Page</h1>
      <div className="table-wrapper">
        <MemberViewAccountComponent />
      </div>
    </div>
  )
}

export default AdminViewAccount

import React from 'react'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"

const AdminViewAccount = () => {
  return (
    <div className="admin-view-account">
      <LeftNavigationBar />
      <Header />
      <TaskBar
        title1="Add New Member"
        title2="View Members"
      />
      <h1>Admin View Account Page</h1>
      <div className="table-wrapper">
        <MemberViewAccountComponent />
      </div>
    </div>
  )
}

export default AdminViewAccount

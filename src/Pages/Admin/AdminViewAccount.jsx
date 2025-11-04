import React from 'react'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Header from '../../Components/Header/Header'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'

const AdminViewAccount = () => {
  return (
    <div>
      <LeftNavigationBar />
      <Header />
      <TaskBar
        title1="Add New Member"
        title2="View Members"
      />
      <h1>Admin View Account Page</h1>
      <MemberViewAccountComponent />

    </div>
  )
}

export default AdminViewAccount

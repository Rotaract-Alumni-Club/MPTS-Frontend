import React from 'react'
import Header from '../../Components/Header/Header'
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton'
import AddCommitteeForm from '../../Components/chair Component/AddCommitteeForm'

const ManageCommitees = () => {
  return (
    <div className="manage-committees-page">
      <Header />
      <LeftNavChair />
      <SearchAndButton title1="Add Committee" title2="View Committees"/> 
      <AddCommitteeForm />
    </div>
  )
}

export default ManageCommitees
import React from 'react'
import Header from '../../Components/Header/Header'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
    

const ManageTask = () => {
  return (
    <>
    <Header/>
    <TaskBar title1="Add Tasks" title2="View Tasks"/>
    <LeftNavChair/>
    </>
  )
}

export default ManageTask
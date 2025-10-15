import React from 'react'
import LeftNavigationBar from '../Component/LeftNavigationBar/LeftNavigationBar'
import Header from '../Component/Header/Header'
import AddView from '../Component/ManageAccount/AddView'
import BasicInfo from '../Component/ManageAccount/BasicInfo'

function Test() {
  return (
    <div>
        <Header/>
        <AddView/>
        <LeftNavigationBar/>
        <BasicInfo/>
          
    </div>
  )
}

export default Test
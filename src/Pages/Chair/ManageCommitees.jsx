import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton'
import AddCommitteeForm from '../../Components/chair Component/AddCommitteeForm'

const ManageCommitees = () => {
  const [activeView, setActiveView] = useState('add');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="manage-committees-page">
      <Header />
      <LeftNavChair />
      <SearchAndButton 
        title1="Add Committee" 
        title2="View Committees"
        onAddClick={() => handleViewChange('add')}
        onViewClick={() => handleViewChange('view')}
        activeView={activeView}
      /> 
      
      {activeView === 'add' && <AddCommitteeForm />}
      {activeView === 'view' && (
        <p>hi</p>
      )}
    </div>
  )
}

export default ManageCommitees
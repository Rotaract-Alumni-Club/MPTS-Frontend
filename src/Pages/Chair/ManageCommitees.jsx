import React from 'react'
import Header from '../../Components/Header/Header'
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton'
//

const ManageCommitees = () => {
  return (
    <>
<Header />
<SearchAndButton title1="Add Committees" title2="View Committees"/>
<LeftNavChair />

{/* <ProjectsTable /> */}

</>
  )
}

export default ManageCommitees

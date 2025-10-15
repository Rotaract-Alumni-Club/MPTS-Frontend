import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminProjects from './Pages/Admin/AdminProjects.jsx'
import AdminCommittees from './Pages/Admin/AdminCommitees.jsx'
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <AdminProjects /> */}
    <AdminDashboard />
    {/* <AdminCommittees />  */}
  </StrictMode>,
)

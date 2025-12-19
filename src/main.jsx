import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Test from './Pages/Test.jsx'
import ManageCommitees from './Pages/Chair/ManageCommitees.jsx'
import ManageTask from './Pages/Chair/ManageTask.jsx'
import AdminProjects from './Pages/Admin/AdminProjects.jsx'
import AdminCommittees from './Pages/Admin/AdminCommitees.jsx'
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx'
import AdminAddProject from './Pages/Admin/AdminAddProject.jsx';
import AdminAddMember from './Pages/Admin/AdminAddMember.jsx';
import ManageCommittees from './Pages/Admin/AdminCommitees.jsx';
import AdminViewAccount from './Pages/Admin/AdminViewAccount.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import ChairDashboard from './Pages/Chair/ChairDashboard.jsx';
import MemberDashboard from './Pages/Member/MemberDashboard.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <div>Page Not Found</div>
  },

  {
    path: "/ChairDashboard",
    element: <ChairDashboard />,
    errorElement: <div>Page Not Found</div>
  },

  {
    path: "/ManageCommittees",
    element: <ManageCommitees />,
    errorElement: <div>Page Not Found</div>
  },

  {
    path: "/ManageTasks",
    element: <ManageTask />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminProjects",
    element: <AdminProjects />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminAddProjects",
    element: <AdminAddProject />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminAddMember",
    element: <AdminAddMember />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminCommittees",
    element: <ManageCommittees />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminViewAccount",
    element: <AdminViewAccount />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
    errorElement: <div>Page Not Found</div>
  },
  {
    path: "/MemberDashboard",
    element: <MemberDashboard />,
    errorElement: <div>Page Not Found</div>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    |<LoginPage />
  </StrictMode>,
)

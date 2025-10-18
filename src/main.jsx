import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Test from './Pages/Test.jsx'
import ManageCommitees from './Pages/Chair/ManageCommitees.jsx'
import ManageTask from './Pages/Chair/ManageTask.jsx'
import AdminProjects from './Pages/Admin/AdminProjects.jsx'
import AdminCommittees from './Pages/Admin/AdminCommitees.jsx'
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx'
import AdminAddProject from './Pages/Admin/AdminAddProject.jsx';



const router= createBrowserRouter([
  {
    path:"/",
    element:<Test/>,
    errorElement:<div>Page Not Found</div>
  },

  {
    path: "/ManageCommittees",
    element: <ManageCommitees/>,
    errorElement:<div>Page Not Found</div>
  },
  // {
  //   path:"/Profile",
  //   element:<Profile/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/My Projects",
  //   element:<MyProjects/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/Rotaract",
  //   element:<Rotaract/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/Manage",
  //   element:<Manage/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/Committees",
  //   element:<Committees/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/Reports",
  //   element:<Reports/>,
  //   errorElement:<div>Page Not Found</div>
  // },
  // {
  //   path:"/Settings",
  //   element:<Settings/>,
  //   errorElement:<div>Page Not Found</div>
  // }
  {
    path:"/Tasks",
    element:<ManageTask/>,
    errorElement:<div>Page Not Found</div>
  },
  {
    path:"/AdminProjects",
    element:<AdminProjects/>,
    errorElement:<div>Page Not Found</div>
  },
  {
    path:"/AdminAddProjects",
    element:<AdminAddProject/>,
    errorElement:<div>Page Not Found</div>
  },
  {
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <RouterProvider router={router}/>

  </StrictMode>,
)

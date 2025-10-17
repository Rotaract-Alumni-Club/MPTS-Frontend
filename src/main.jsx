import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Test from './Pages/Test.jsx'
import ManageCommitees from './Pages/Chair/ManageCommitees.jsx'
import ManageTask from './Pages/Chair/ManageTask.jsx'
import AdminProjects from './Pages/Admin/AdminProjects.jsx'



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
 
  {
    path:"/ManageTasks",
    element:<ManageTask/>,
    errorElement:<div>Page Not Found</div>
  },
  {
    path:"/AdminProjects",
    element:<AdminProjects/>,
    errorElement:<div>Page Not Found</div>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/> 
  </StrictMode>,
)

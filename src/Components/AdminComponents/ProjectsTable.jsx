import { React } from 'react'


import "../../SCSS/AdminStyles/AdminProjectStyles/AdminProjects.scss"

const ProjectsTable = () => {
  return (
    <div className='table'>

      <table border="1">
        <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Add ChairPersons</th>
        </tr>
        <tr>
            <td>Event 1</td>
            <td>01/01/2024</td>
            <td>Some notes about Event 1</td>
            <td><button>Add ChairPersons</button></td>
        </tr>
        <tr>
            <td>Event 2</td>
            <td>02/01/2024</td> 
            <td>Some notes about Event 2</td>
            <td><button>Add ChairPersons</button></td>
        </tr>
        <tr>
            <td>Event 3</td>    
            <td>03/01/2024</td>
            <td>Some notes about Event 3</td>
            <td><button>Add ChairPersons</button></td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><button>Add ChairPersons</button></td>
        </tr>

        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><button>Add ChairPersons</button></td>
        </tr>

        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><button>Add ChairPersons</button></td>  
        </tr>

        
      </table>  
      </div>
  )
}

export default ProjectsTable


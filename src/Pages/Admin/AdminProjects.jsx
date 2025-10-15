import React from 'react'
import {FaSearch,FaPlus,FaFilter} from 'react-icons/fa'
import '../../SCSS/AdminStyles/AdminProjectStyles/AdminProjects.scss'
import SearchAndButton from '../../Components/SerachAnd/SearchAndButton.jsx'

const AdminProjects = () => {
  return (
    <div>
      
      <SearchAndButton

      title1="Search Projects"
      title2="Add New Project"
      
       />

      <div className='search_bar'>
        
        <button><input type="text" placeholder='Search by Event Name'/> <FaSearch/></button> 
      </div>
      
      <div className='filter_bar'>
        <button><FaFilter></FaFilter> Filter</button>
      </div>
      <br />

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

      
      
    </div>
  )
}

export default AdminProjects

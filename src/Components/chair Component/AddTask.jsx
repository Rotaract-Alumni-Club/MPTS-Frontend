import React from 'react'
import '../../SCSS/ChairStyle/AddTask.scss'

const AddTask = () => {
  return (
    <div>
        <table border="3" >
            <tr>
                <th>Task Name</th>
                <th>Due Date</th>
                <th>Notes</th>
                <th>Member</th>
            </tr>
            <tr>
                <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
               <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
             <tr>
                <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
             <tr>
                <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
             <tr>
                <td><input type="text" placeholder='Enter Task Name'/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
        </table>
    </div>
  )
}

export default AddTask
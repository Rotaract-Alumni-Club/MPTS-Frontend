import React from 'react'
import "../../SCSS/AdminStyles/AdminCommitees/AdminCommittees.scss"

const MemberTableComponent = () => {
  return (
    <div>
        <div className="commitee">
                <h3>Committee 1</h3>
                <p>Details about Committee 1</p>
                <table>
                <tr>
                <th><input type="text" id="123" placeholder="ENTER COMMITEE 1" /></th>
                <th><input type="text" id="123" placeholder="ENTER COMMITEE 2" /></th>
                <th><input type="text" id="123" placeholder="ENTER COMMITEE 3" /></th>
                <th><input type="text" id="123" placeholder="ENTER COMMITEE 4" /></th>
                </tr>
                <tr>
                <td><br /></td>
                <td><br /></td>
                <td><br /></td>
                <td><br /></td>
                </tr>
                <tr>
                <td><input type="text" placeholder="Member 1" /></td>
                <td><input type="text" placeholder="Member 1" /></td>
                <td><input type="text" placeholder="Member 1" /></td>
                <td><input type="text" placeholder="Member 1" /></td>
                </tr>
                <tr>
                <td><input type="text" placeholder="Member 2" /></td>
                <td><input type="text" placeholder="Member 2" /></td>
                <td><input type="text" placeholder="Member 2" /></td>
                <td><input type="text" placeholder="Member 2" /></td>
                </tr>
                <tr>
                <td><input type="text" placeholder="Member 3" /></td>
                <td><input type="text" placeholder="Member 3" /></td>
                <td><input type="text" placeholder="Member 3" /></td>
                <td><input type="text" placeholder="Member 3" /></td>
                </tr>
                <tr>
                <td><input type="text" placeholder="Member 4" /></td>
                <td><input type="text" placeholder="Member 4" /></td>
                <td><input type="text" placeholder="Member 4" /></td>
                <td><input type="text" placeholder="Member 4" /></td>
                </tr>
                <tr>
                <td><input type="text" placeholder="Member 5" /></td>
                <td><input type="text" placeholder="Member 5" /></td>
                <td><input type="text" placeholder="Member 5" /></td>
                <td><input type="text" placeholder="Member 5" /></td>
                </tr>
                </table>
                <br />
                <br />
            </div>
      
    </div>
  )
}

export default MemberTableComponent

import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import SearchAndButton from "../../Components/SerachAnd/SearchAndButton";
import "../../SCSS/AdminStyles/AdminCommitees/Manage Committees.scss"


const ManageCommittees = () => {
    return (
        <div>
            <h2>Manage Committees Page</h2>

            <div className="searchandbutton"><SearchAndButton
            title1="Search Committees"
            title2="Add New Committee"
            />
            </div>
            <br />
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

            <div className="arrowbutton">
                <button> <FaArrowAltCircleLeft/></button> &nbsp; &nbsp; &nbsp; &nbsp;
                <button> <FaArrowAltCircleRight/></button>
            </div>

       </div>
    );
}

export default ManageCommittees;
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import SearchAndButton from "../../Components/SerachAnd/SearchAndButton";
import "../../SCSS/AdminStyles/AdminCommitees/Manage Committees.scss"
import Header from "../../Components/Header/Header";
import LeftNavigationBar from "../../Components/LeftNavigationBar/LeftNavigationBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProjectAddForm from "../../Components/AdminComponents/ProjectAddForm";
import ProjectsTable from "../../Components/AdminComponents/ProjectsTable";
import AddCommitteeForm from "../../Components/chair Component/AddCommitteeForm";
import ViewCommittees from "../../Components/chair Component/ViewCommitees";


const ManageCommittees = () => {
    const navigate = useNavigate()

    const [activeView, setActiveView] = useState('add');
      
        const handleViewChange = (view) => {
          setActiveView(view);
        };
      
          const handleCommitteeAdded = () => {
          setActiveView('view');
        };
    
    return (
        <div>
            <Header/>
            <LeftNavigationBar/>
            {/* <h2>Manage Committees Page</h2> */}

            <div className="searchandbutton"><SearchAndButton
            title1="Add New Committees"
            title2="Search Committee"
            onAddClick={() => handleViewChange('add')}
            onViewClick={() => handleViewChange('view')}
            activeView={activeView}
            />
            </div>
            <br />
            {/* <div className="commitee">
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
            </div> */}

            {activeView === 'add' && <AddCommitteeForm onCommitteeAdded={handleCommitteeAdded} />}
            {activeView === 'view' && <ViewCommittees />}

       </div>
    );
}

export default ManageCommittees;
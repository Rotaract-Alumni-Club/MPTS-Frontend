import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import LeftNavigationBar from '../../Components/LeftNavigationBar/LeftNavigationBar'
import Toast from '../../Components/Toast/Toast'
import "../../SCSS/AdminStyles/AdminAddMember/AdminAddMember.scss"
import MemberAddFormComponent from '../../Components/AdminComponents/MemberAddFormComponent'
import TaskBar from '../../Components/SerachAnd/SearchAndButton'
import MemberViewAccountComponent from '../../Components/AdminComponents/MemberViewAccountComponent'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"

const AdminAddMember = () => {
  const navigate = useNavigate()

  const [activeView, setActiveView] = useState('add');
  const [showToast, setShowToast] = useState(false);


  const baseURL = `${import.meta.env.VITE_API_URL}/api`;

  const [members, setMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [membersError, setMembersError] = useState("");

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleMemberAdded = async () => {
    setShowToast(true);
    await fetchMembers();
    setTimeout(() => setActiveView("view"), 300);
  };

  const handleMemberDeleted = (memberId) => {
    setMembers(members.filter(m => m.id !== memberId));
  };

  const handleMemberUpdated = (updatedMember) => {
    setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
  };



  const fetchMembers = async () => {
    try {
      setLoadingMembers(true);
      setMembersError("");

      const token = localStorage.getItem("token");

      const res = await fetch(`${baseURL}/users/all`, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMembersError(data?.message || "Failed to load members");
        setMembers([]);
        return;
      }

      // your API returns {data: users} or directly users
      const list = Array.isArray(data) ? data : data?.data || [];
      setMembers(list);
    } catch (e) {
      setMembersError("Server error while loading members");
      setMembers([]);
    } finally {
      setLoadingMembers(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);
  return (
    <div className="admin-add-member">
      <Header />
      <LeftNavigationBar />
      <Toast message="Account created successfully!" isVisible={showToast} duration={2000} />
      <div className='taskbar-wrapper'>
        <TaskBar
          title1="Add New Member"
          title2="View Members"
          onAddClick={() => handleViewChange('add')}
          onViewClick={() => handleViewChange('view')}
          activeView={activeView}
        />
      </div>
      <div className='content-wrapper'>
        {activeView === 'add' && <MemberAddFormComponent onMemberAdded={handleMemberAdded} />}
        {activeView === 'view' && (
          <MemberViewAccountComponent
            members={members}
            loading={loadingMembers}
            error={membersError}
            onMemberDeleted={handleMemberDeleted}
            onMemberUpdated={handleMemberUpdated}
          />
        )}
      </div>
    </div>
  )
}

export default AdminAddMember

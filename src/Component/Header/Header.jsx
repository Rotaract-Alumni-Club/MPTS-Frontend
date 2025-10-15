import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendar, FaSignOutAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
function Header() {
  return (
    <div className="header">
        <p>Rotaract</p>
        <Link to="/"><FaMessage/></Link>
        <Link to="/Profile"><FaCalendar/></Link>
        <Link to="/My Projects"><FaSignOutAlt/></Link>
        
    </div>
  )
}

export default Header
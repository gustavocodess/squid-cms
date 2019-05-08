import React from 'react'
import { FaChartLine, FaUsers } from 'react-icons/fa'
import { NavLink, withRouter } from 'react-router-dom'
import './styles.css'


const SideBar = () => (
  <div className="side-bar-container">
    {/* <img src={logo} alt="squidSpace" className="logo" /> */}
    <NavLink to="/dashboard" className="button-container">
      <FaChartLine className="side-bar-icon" />
      <span className="button-text">Dashboard</span>
    </NavLink>
    <NavLink to="/users" className="button-container">
      <FaUsers className="side-bar-icon" />
      <span className="button-text">Users</span>
    </NavLink>
  </div>
)

export default withRouter(SideBar)

import React from 'react'
import { FaChartLine, FaUsers, FaBuffer } from 'react-icons/fa'
import { NavLink, withRouter } from 'react-router-dom'
import './styles.css'


const SideBar = () => (
  <div className="side-bar-container">
    {/* <img src={logo} alt="squidSpace" className="logo" /> */}
    <NavLink to="/" exact className="button-container">
      <FaChartLine className="side-bar-icon" />
      <span className="button-text">Dashboard</span>
    </NavLink>
    <NavLink to="/posts" className="button-container">
      <FaBuffer className="side-bar-icon" />
      <span className="button-text">Posts</span>
    </NavLink>
    <NavLink to="/audience" className="button-container">
      <FaUsers className="side-bar-icon" />
      <span className="button-text">Audience</span>
    </NavLink>
  </div>
)

export default withRouter(SideBar)

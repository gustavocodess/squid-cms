import React from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import { FaChartLine, FaUsers, FaBuffer } from 'react-icons/fa'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getUserInfo } from '../../queries/user'
import './styles.css'

const logo = require('../../assets/img/squid logo.png')


const SideBar = (props) => {
  const fullUserInfo = get(props, 'data.influencer', null)
  if (fullUserInfo && !props.currentUser.userId) {
    props.onUserLoaded({
      ...props.currentUser,
      ...fullUserInfo,
      userId: fullUserInfo.id,
    })
  }
  return (
    <div className="side-bar-container">
      <img src={logo} alt="squidSpace" className="logo" />
      <span className="sidebar-logo-text">Squid Space</span>
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
}

SideBar.propTypes = {
  onUserLoaded: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
}

export default withRouter(graphql(getUserInfo, {
  options: (props) => {
    const firebaseUserId = get(props, 'currentUser.uid', {})
    return ({
      variables: {
        firebaseUserId,
      },
    })
  },
})(SideBar))

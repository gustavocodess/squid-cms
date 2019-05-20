import React from 'react'
import Lottie from 'react-lottie'
// import PropTypes from 'prop-types'

const squidLoading = require('../../assets/animations/construction.json')

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: squidLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <div style={{
      display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', height: '50vh',
    }}
    >
      <Lottie
        options={defaultOptions}
        height={300}
        width={400}
      />
      <span style={{ fontFamily: 'GloberSemiBold' }}>Work in progress...</span> 
    </div>
  </div>
)


Dashboard.propTypes = {
  // data: PropTypes.object.isRequired,
}

export default Dashboard

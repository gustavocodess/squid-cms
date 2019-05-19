import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import './styles.css'

const squidLoading = require('../../assets/animations/squid.json')

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: squidLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    if (!this.props.loading) {
      return null
    }
    return (
      <div className="loading-container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
          <span style={{ marginTop: -16, fontFamily: 'GloberSemiBold' }}>Loading...</span>
        </div>

      </div>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loading

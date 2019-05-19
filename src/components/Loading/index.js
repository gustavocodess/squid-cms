import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'evergreen-ui'
import './styles.css'

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
          <Spinner size={40} />
          <span style={{ marginTop: 8, fontFamily: 'GloberSemiBold' }}>Loading...</span>
        </div>

      </div>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loading

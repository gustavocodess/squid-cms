import React, { Component } from 'react'
import { Button, TextInput } from 'evergreen-ui'
import { auth as fAuth } from 'firebase'
import PropTypes from 'prop-types'
import './styles.css'

const backgroundImg = require('../../assets/img/undraw_social_influencer_sgsv.png')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    const { email, password } = this.state
    fAuth().setPersistence(fAuth.Auth.Persistence.SESSION)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        fAuth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
            console.log('firebase auth ', response)
            this.props.history.push('/dashboard')
          })
          .catch(error => console.log('auth error ', error))
      })
      .catch(error => console.log('setPersistence error ', error))
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ color: 'white', marginTop: '8rem' }}>Squid Space CMS</h3>
        <div className="login-card">
          <h4>Login</h4>
          <TextInput
            name="text-input-name"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <TextInput
            name="text-input-name"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
          />
          <br />
          <div className="footer">
            <Button
              appearance="primary"
              onClick={this.handleLogin}
            >
            Login
            </Button>
          </div>
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object,
}

Login.defaultProps = {
  history: {},
}

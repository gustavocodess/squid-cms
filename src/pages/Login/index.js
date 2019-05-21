import React, { Component } from 'react'
import { Button, TextInput } from 'evergreen-ui'
import { auth as fAuth } from 'firebase'
// import PropTypes from 'prop-types'
import Loading from '../../components/Loading'
import './styles.css'

const backgroundImg = require('../../assets/img/undraw_social_influencer_sgsv.png')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    const { email, password } = this.state
    this.setState({
      isLoading: true,
    })
    fAuth().setPersistence(fAuth.Auth.Persistence.SESSION)
      .then(() => {
        fAuth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
            console.log('firebase auth ', response)
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            })
            console.log('auth error ', error)
          })
      })
      .catch(error => console.log('setPersistence error ', error))
  }

  render() {
    return (
      <div className="container">
        <Loading loading={this.state.isLoading} />
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
}

Login.defaultProps = {
  history: {},
}

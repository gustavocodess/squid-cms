import React, { Component } from 'react'
import { Button, TextInput } from 'evergreen-ui'
import firebase from 'firebase/app'
import { auth as fAuth } from 'firebase'
import './styles.css'

const backgroundImg = require('../../assets/img/undraw_social_influencer_sgsv.png')

const firebaseConfig = {
  apiKey: 'AIzaSyB_-l0KL206r76GDE4d3RUzf8oqI5aNiFA',
  authDomain: 'squidspacecms.firebaseapp.com',
  databaseURL: 'https://squidspacecms.firebaseio.com',
  projectId: 'squidspacecms',
  storageBucket: 'squidspacecms.appspot.com',
  messagingSenderId: '458544650290',
  appId: '1:458544650290:web:c5eb8f2b14e5b2b0',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    fAuth()
      .signInWithEmailAndPassword('gustavocms@email.com', '123456')
      .then((response) => {
        console.log('firebase auth ', response)
      })
      .catch(error => console.log('auth error ', error))
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
          />
          <br />
          <TextInput
            name="text-input-name"
            placeholder="Password"
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

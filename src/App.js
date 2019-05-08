import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import cuid from 'cuid'
import firebase from 'firebase/app'
import { auth as fAuth } from 'firebase'
import routes from './routes'
import Login from './pages/Login'

const firebaseConfig = {
  apiKey: 'AIzaSyB_-l0KL206r76GDE4d3RUzf8oqI5aNiFA',
  authDomain: 'squidspacecms.firebaseapp.com',
  databaseURL: 'https://squidspacecms.firebaseio.com',
  projectId: 'squidspacecms',
  storageBucket: 'squidspacecms.appspot.com',
  messagingSenderId: '458544650290',
  appId: '1:458544650290:web:c5eb8f2b14e5b2b0',
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authUser: null,
      authInitialized: false,
    }
  }

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }

  componentDidMount() {
    fAuth().onAuthStateChanged((user) => {
      console.log('USER STATE CHANGED ', user)
      this.setState({
        authUser: user,
        authInitialized: true,
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          {/* <SideBar /> */}
          <div className="page-container">
            {/* <Loading /> */}
            <Switch>
              {
                this.state.authUser || !this.state.authInitialized ? (
                  routes.map(route => (<Route key={cuid()} {...route} />))
                ) : (<Login />)
              }
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

module.hot.accept()

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import cuid from 'cuid'
import firebase from 'firebase/app'
import { auth as fAuth } from 'firebase'
import routes from './routes'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import './app.css'

const firebaseConfig = {
  apiKey: 'AIzaSyB_-l0KL206r76GDE4d3RUzf8oqI5aNiFA',
  authDomain: 'squidspacecms.firebaseapp.com',
  databaseURL: 'https://squidspacecms.firebaseio.com',
  projectId: 'squidspacecms',
  storageBucket: 'squidspacecms.appspot.com',
  messagingSenderId: '458544650290',
  appId: '1:458544650290:web:c5eb8f2b14e5b2b0',
}


const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjuj6y3ym0xga01f4wz55hg24/master',
})


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
      this.setState({
        authUser: user,
        authInitialized: true,
      })
    })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app-container">
            {
              this.state.authUser ? (
                <SideBar />
              ) : null
            }
            {/* <Loading /> */}
            {
              this.state.authUser || !this.state.authInitialized ? (
                <div className="content-container">
                  {
                    this.state.authUser ? (
                      <NavBar />
                    ) : null
                  }
                  <div className="page-container">
                    <Switch>
                      {
                        routes.map(route => (<Route key={cuid()} {...route} />))
                      }
                    </Switch>
                  </div>
                </div>
              ) : (<Login />)
            }
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

module.hot.accept()

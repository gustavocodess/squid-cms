import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import cuid from 'cuid'
import routes from './routes'

const App = () => (
  <Router>
    <div className="app-container">
      {/* <SideBar /> */}
      <div className="page-container">
        {/* <Loading /> */}
        <Switch>
          {
            routes.map(route => (<Route key={cuid()} {...route} />))
          }
        </Switch>
      </div>
    </div>
  </Router>
)

module.hot.accept()

export default App

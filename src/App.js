import React from 'react'

const App = () => (
  <div className="app-container">
    {/* <SideBar /> */}
    <div className="page-container">
      {/* <Loading /> */}
      <h1>Hello world Squid CMS</h1>
      <span style={{ color: 'blue' }}>Pages goes here</span>
      <h2>Page 2</h2>
    </div>
  </div>
)

module.hot.accept()

export default App

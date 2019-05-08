import React from 'react'
import { Button } from 'evergreen-ui'
import { auth as fAuth } from 'firebase'

const Dashboard = () => (
  <div>
    <h1>Here we are at the Dashboard</h1>
    <Button
      onClick={() => console.log('FIREBASE LOGOUT ', fAuth().signOut().then(() => {
        console.log('User Signed Out')
      }, (error) => {
        console.error('Sign Out Error', error)
      }))}
    >
      Logout
    </Button>
  </div>
)

export default Dashboard

import React from 'react'
import Dashboard from '../pages/Dashboard'
import Posts from '../pages/Posts'
import Audience from '../pages/Audience'

const routes = [
  {
    path: '/',
    component: props => (<Dashboard {...props} />),
    exact: true,
  },
  {
    path: '/posts',
    component: props => (<Posts {...props} />),
    exact: true,
  },
  {
    path: '/audience',
    component: props => (<Audience {...props} />),
    exact: true,
  },
]

export default routes

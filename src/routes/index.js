import Dashboard from '../pages/Dashboard'
import Posts from '../pages/Posts'
import Audience from '../pages/Audience'

const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/posts',
    component: Posts,
    exact: true,
  },
  {
    path: '/audience',
    component: Audience,
    exact: true,
  },
]

export default routes

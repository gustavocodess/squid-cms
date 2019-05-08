import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const routes = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
]

export default routes

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Navbar from './components/core/navbar'
import SideNav from './components/core/sidenav'
import MainContent from './components/core/mainContent'
// import Topnav from './components/core/topnav'
import { RouteNames } from './contants'
import './helpers/interceptor'
import { AppState } from './redux/store'
import { connect } from 'react-redux'
import { User } from './components/auth/auth.models'

const menus = [
  {
    label: 'Dashboard',
    route: RouteNames.dashboard,
    icon: 'fas fa-home',
  },
  {
    label: 'Product',
    route: RouteNames.products,
    icon: 'fas fa-tag text-warning',
  },
  {
    label: 'Reports',
    route: RouteNames.reports,
    icon: 'fas fa-file-alt text-secondary',
  },
  {
    label: 'Settings',
    route: RouteNames.settings,
    icon: 'fas fa-cogs text-primary',
  },
  {
    label: 'Users',
    route: RouteNames.users,
    icon: 'fas fa-users text-danger',
  },
  {
    label: 'Roles',
    route: RouteNames.roles,
    icon: 'fas fa-cubes text-success',
  },
]

interface AppProps {
  loggedIn: boolean
  user: User | null
}

const App: React.FC<AppProps> = ({ loggedIn, user }) => {
  return (
    <React.Fragment>
      <Router>
        <Navbar authenticated={loggedIn} currentUser={user} />
        {/* <Topnav menus={menus} /> */}
        <div id="wrapper" className="flex-row flex-grow-1">
          {loggedIn && <SideNav menus={menus} />}
          <MainContent />
        </div>
      </Router>
    </React.Fragment>
  )
}

const mapPropsToState = (state: AppState) => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user,
})

export default connect(mapPropsToState)(App)

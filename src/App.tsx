import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/core/navbar'
import SideNav from './components/core/sidenav'
import MainContent from './components/core/mainContent'
// import Topnav from './components/core/topnav'
import { RouteNames } from './contants'

const App: React.FC = () => {
  const menus = [
    {
      label: 'Dashboard',
      route: RouteNames.dashboard,
      icon: 'fas fa-home'
    },
    {
      label: 'Product',
      route: RouteNames.products,
      icon: 'fas fa-tag text-warning'
    },
    {
      label: 'Reports',
      route: RouteNames.reports,
      icon: 'fas fa-file-alt text-secondary'
    },
    {
      label: 'Settings',
      route: RouteNames.settings,
      icon: 'fas fa-cogs text-primary'
    },
    {
      label: 'Users',
      route: RouteNames.users,
      icon: 'fas fa-users text-danger'
    },
    {
      label: 'Roles',
      route: RouteNames.roles,
      icon: 'fas fa-cubes text-success'
    }
  ]

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        {/* <Topnav menus={menus} /> */}
        <div id="wrapper" className="flex-row flex-grow-1">
          <SideNav menus={menus} />
          <MainContent></MainContent>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './components/core/navbar'
import SideNav from './components/core/sidenav'
import MainContent from './components/core/mainContent'
import Topnav from './components/core/topnav'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Topnav />
      <div id="wrapper" className="flex-row flex-grow-1">
        <SideNav></SideNav> <MainContent></MainContent>
      </div>
    </React.Fragment>
  )
}

export default App

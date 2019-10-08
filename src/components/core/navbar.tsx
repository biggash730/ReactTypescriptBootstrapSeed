import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { RouteNames } from '../../contants'

export interface NavbarProps {}

export interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  //state = { :  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
        <NavLink className="navbar-brand" to={RouteNames.dashboard}>
          React App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar

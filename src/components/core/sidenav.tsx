import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './sidenav.scss'

export interface MenuItem {
  label: string
  route: string
  icon: string
}

export interface SideNavProps {
  menus: MenuItem[]
}

const SideNav: React.FC<SideNavProps> = ({ menus }) => {
  return (
    <nav className="sidebar flex-shrink-0">
      <ul className="nav flex-column flex-nowrap">
        {menus.map((menu) => (
          <li className="nav-item" key={menu.label}>
            <NavLink className="nav-link p-3" to={menu.route} activeClassName="active">
              <i className={menu.icon}></i> {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNav

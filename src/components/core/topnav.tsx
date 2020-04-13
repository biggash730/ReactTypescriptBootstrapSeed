import * as React from 'react'
import './topnav.scss'
import { MenuItem } from './sidenav'

export interface TopnavProps {
  menus: MenuItem[]
}

const Topnav: React.FC<TopnavProps> = ({ menus }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-1">
      <div className="collapse navbar-collapse container">
        <ul className="topnav navbar-nav mr-auto">
          {menus.map((menu) => (
            <li className="nav-item" key={menu.label}>
              <a className="nav-link px-3" href={menu.route}>
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Topnav

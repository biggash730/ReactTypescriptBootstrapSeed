import * as React from 'react'
import './sidenav.scss'

export interface SideNavProps {}

export interface SideNavState {}

class SideNav extends React.Component<SideNavProps, SideNavState> {
  state = {
    menus: [
      {
        label: 'Dashboard',
        route: 'Route.dashboard',
        icon: 'fas fa-home fa-lg'
      },
      {
        label: 'Product',
        route: 'Route.product',
        icon: 'fas fa-tag fa-lg text-warning'
      },
      {
        label: 'Reports',
        route: 'Route.reports',
        icon: 'fas fa-file-alt fa-lg text-secondary'
      },
      {
        label: 'Settings',
        route: 'Route.settings',
        icon: 'fas fa-cogs fa-lg text-primary'
      },
      {
        label: 'Users',
        route: 'Route.users',
        icon: 'fas fa-users fa-lg text-danger'
      },
      {
        label: 'Roles',
        route: 'Route.roles',
        icon: 'fas fa-cubes fa-lg text-success'
      }
    ]
  }
  render() {
    return (
      <nav className="sidebar flex-shrink-0">
        <ul className="nav flex-column flex-nowrap">
          {this.state.menus.map(menu => (
            <li className="nav-item" key={menu.label}>
              <a className="nav-link" href={menu.route}>
                <i className={menu.icon}></i> {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default SideNav

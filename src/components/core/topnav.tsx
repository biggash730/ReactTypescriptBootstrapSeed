import * as React from 'react'
import './topnav.scss'

export interface TopnavProps {}

export interface TopnavState {}

class Topnav extends React.Component<TopnavProps, TopnavState> {
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
      <nav className="navbar navbar-expand-lg navbar-light p-1">
        {' '}
        <div className="collapse navbar-collapse container">
          {' '}
          <ul className="topnav navbar-nav mr-auto">
            {' '}
            {this.state.menus.map(menu => (
              <li className="nav-item" key={menu.label}>
                {' '}
                <a className="nav-link px-3" href={menu.route}>
                  {' '}
                  {menu.label}
                </a>{' '}
              </li>
            ))}
          </ul>{' '}
        </div>{' '}
      </nav>
    )
  }
}

export default Topnav

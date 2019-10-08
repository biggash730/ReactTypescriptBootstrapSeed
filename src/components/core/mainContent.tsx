import * as React from 'react'
import './mainContent.scss'
import { Route, Redirect, Switch } from 'react-router'
import { RouteNames } from '../../contants'
import { AuthRoute } from './authRoute'
import Login from '../auth/login'

export interface MainContentProps {
  loggedIn: boolean
  onLogIn: any
}

export interface MainContentState {}

class MainContent extends React.Component<MainContentProps, MainContentState> {
  state = {}

  render() {
    return (
      <div className="main-content flex-fill p-2">
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => <Redirect to={RouteNames.dashboard} />}
          />
          <Route
            path={RouteNames.login}
            render={routerProps => {
              if (this.props.loggedIn)
                return <Redirect to={RouteNames.dashboard} />
              else
                return <Login {...routerProps} onLogIn={this.props.onLogIn} />
            }}
          />
          <AuthRoute path={RouteNames.dashboard} component={Dashboard} />
          <AuthRoute path={RouteNames.products} component={Dashboard} />
          {/* <Route path={RouteNames.reports} render={() => <h1>Reports</h1>} />
        <Route path={RouteNames.settings} render={() => <h1>Settings</h1>} />
        <Route path={RouteNames.users} render={() => <h1>Users</h1>} />
        <Route path={RouteNames.roles} render={() => <h1>Roles</h1>} /> */}
        </Switch>
      </div>
    )
  }
}

export class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>
  }
}

export default MainContent

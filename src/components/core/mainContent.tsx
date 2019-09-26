import * as React from 'react'
import './mainContent.scss'
import { Route, Redirect } from 'react-router'
import { RouteNames } from '../../contants'

export interface MainContentProps {}

export interface MainContentState {}

class MainContent extends React.Component<MainContentProps, MainContentState> {
  //state = { :  }
  render() {
    return (
      <div className="main-content flex-fill p-2">
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to={RouteNames.dashboard} />}
        />
        <Route path={RouteNames.dashboard} render={() => <h1>Dashboard</h1>} />
        <Route path={RouteNames.products} render={() => <h1>Products</h1>} />
        <Route path={RouteNames.reports} render={() => <h1>Reports</h1>} />
        <Route path={RouteNames.settings} render={() => <h1>Settings</h1>} />
        <Route path={RouteNames.users} render={() => <h1>users</h1>} />
        <Route path={RouteNames.roles} render={() => <h1>Roles</h1>} />
      </div>
    )
  }
}

export default MainContent

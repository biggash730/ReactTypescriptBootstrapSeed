import * as React from 'react'
import './mainContent.scss'
import { Route, Redirect, Switch } from 'react-router'
import { RouteNames } from '../../contants'
import { AuthRoute } from './authRoute'
import Login from '../auth/login'
import Users from '../user/users'
import Roles from '../role/roles'
import PageNotFound from '../pageNotFound'
import BlockUi from 'react-block-ui'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'

export interface MainContentProps {
  loggedIn: boolean
  onLogIn: any
  blocking: boolean
  blockingMessage: string
}

export interface MainContentState {}

class MainContent extends React.Component<MainContentProps, MainContentState> {
  state = {}

  render() {
    return (
      <div className="main-content flex-fill p-2">
        <BlockUi blocking={this.props.blocking} tag="div" message={this.props.blockingMessage}>
          <Switch>
            <Route exact={true} path="/" render={() => <Redirect to={RouteNames.dashboard} />} />
            <Route
              path={RouteNames.login}
              render={(routerProps) => {
                if (this.props.loggedIn) return <Redirect to={RouteNames.dashboard} />
                else return <Login {...routerProps} onLogIn={this.props.onLogIn} />
              }}
            />
            <AuthRoute path={RouteNames.dashboard} component={Dashboard} />
            <AuthRoute path={RouteNames.products} component={Dashboard} />
            {/* <Route path={RouteNames.reports} render={() => <h1>Reports</h1>} /> */}
            {/* <Route path={RouteNames.settings} render={() => <h1>Settings</h1>} /> */}
            <AuthRoute path={RouteNames.users} component={Users} />
            <AuthRoute path={RouteNames.roles} component={Roles} />
            <Route component={PageNotFound} />
          </Switch>
        </BlockUi>
      </div>
    )
  }
}

export class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>
  }
}

const mapStateToProps = (state: AppState) => ({
  blocking: state.apiStatus.blocking,
  blockingMessage: state.apiStatus.blockingMessage,
})

export default connect(mapStateToProps)(MainContent)
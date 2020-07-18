import * as React from 'react'
import './mainContent.scss'
import { Route, Redirect, Switch } from 'react-router'
import { RouteNames } from '../../contants'
import AuthRoute from './authRoute'
import Login from '../auth/login'
import Users from '../user/users'
import Roles from '../role/roles'
import PageNotFound from '../pageNotFound'
import BlockUi from 'react-block-ui'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'
import { makeStyles, createStyles } from '@material-ui/core'
import Visit from '../reception/visit'
import AppointmentForm from '../appointment/appointment-form'
import Patient from '../reception/patient'

export interface MainContentProps {
  loggedIn: boolean
  blocking: boolean
  blockingMessage: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      overflow: 'auto',
    },
  })
)

const MainContent: React.FC<MainContentProps> = ({ blocking, blockingMessage, loggedIn }) => {
  const classes = useStyles()

  return (
    // <div className="main-content flex-fill p-2"></div>
    <div className={classes.root}>
      <BlockUi blocking={blocking} tag="div" message={blockingMessage}>
        <Switch>
          <Route exact={true} path="/" render={() => <Redirect to={RouteNames.dashboard} />} />
          <Route
            path={RouteNames.login}
            render={(routerProps) => {
              if (loggedIn) return <Redirect to={RouteNames.dashboard} />
              else return <Login {...routerProps} />
            }}
          />
          <AuthRoute path={RouteNames.dashboard} component={Dashboard} />
          <AuthRoute path={RouteNames.patients} component={Patient} />
          <AuthRoute path={RouteNames.visits} component={Visit} />
          <AuthRoute path={RouteNames.appointmentForm} component={AppointmentForm} />
          <AuthRoute path={RouteNames.users} component={Users} />
          <AuthRoute path={RouteNames.roles} component={Roles} />
          <Route component={PageNotFound} />
        </Switch>
      </BlockUi>
    </div>
  )
}

export class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>
  }
}

const mapStateToProps = (state: AppState) => ({
  blocking: state.apiStatus.blocking,
  blockingMessage: state.apiStatus.blockingMessage,
  loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(MainContent)

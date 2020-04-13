import React from 'react'
import { Route, Redirect } from 'react-router'
import { RouteNames } from '../../contants'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.loggedIn) return <Component {...props} />
        return <Redirect to={RouteNames.login} />
      }}
    />
  )
}

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(AuthRoute)

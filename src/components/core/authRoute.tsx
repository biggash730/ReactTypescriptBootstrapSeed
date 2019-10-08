import React from 'react'
import { Route, Redirect } from 'react-router'
import { RouteNames } from '../../contants'
import { authService } from '../auth/authService'

export const AuthRoute = ({ component: Component, ...rest }: any) => {
  const loggedIn = authService.authenticated
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedIn) return <Component {...props} />
        return <Redirect to={RouteNames.login} />
      }}
    />
  )
}

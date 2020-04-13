import { User } from '../../components/auth/auth.models'
import { AppAction } from '../reducers'
import { ActionTypes } from './actionTypes'
import { Dispatch } from 'redux'
import { beginApiCall, endApiCall } from './apiStatusActions'
import * as authService from '../../components/auth/authService'
import { LoginParams } from '../../components/auth/login'

const loginSuccess: (user: User) => AppAction = (user: User) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
})

const loginFailed: () => AppAction = () => ({
  type: ActionTypes.LOGIN_FAILED,
})

export const doLogin = (params: LoginParams) => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall('Authenticating'))
    try {
      const res = await authService.login(params)
      dispatch(loginSuccess(res.data))
      dispatch(endApiCall())
    } catch (error) {
      dispatch(loginFailed())
      dispatch(endApiCall())
    }
  }
}

import axios from 'axios'
import { Role } from '../../components/auth/auth.models'
import { Dispatch } from 'redux'
import { ActionTypes } from './action-types'
import { AppAction } from '../reducers'

// export const REQUEST_ROLES = 'REQUEST ROLES'
// export const GET_ROLES = 'GET ROLES'

export const requestRoles: () => AppAction = () => ({
  type: ActionTypes.REQUEST_ROLES
})

export const getRoles: (roles: Role[]) => AppAction = (roles: Role[]) => ({
  type: ActionTypes.GET_ROLES,
  payload: roles
})

export const error: () => AppAction = () => ({
  type: ActionTypes.ERROR
})

export const fetchRoles = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestRoles())
    try {
      const res = await axios.get(`/api/role`)
      dispatch(getRoles(res.data))
    } catch (err) {
      dispatch(error())
    }
  }
}

import axios from 'axios'
import { Role } from '../../components/auth/auth.models'
import { Dispatch } from 'redux'
import { ActionTypes } from './actionTypes'
import { AppAction } from '../reducers'
import { beginApiCall, endApiCall } from './apiStatusActions'

export const getRolesSuccess: (roles: Role[]) => AppAction = (roles: Role[]) => ({
  type: ActionTypes.GET_ROLES_SUCCESS,
  payload: roles,
})

export const createRoleSuccess: (role: Role) => AppAction = (role: Role) => {
  return { type: ActionTypes.CREATE_ROLE_SUCCESS, payload: role }
}

export const updateRoleSuccess: (role: Role) => AppAction = (role: Role) => {
  return { type: ActionTypes.UPDATE_ROLE_SUCCESS, payload: role }
}

export const deleteRoleOptimistic: (id: number) => AppAction = (id: number) => {
  return { type: ActionTypes.DELETE_ROLE, id: id }
}

export const fetchRoles = () => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall('Loading...'))
    try {
      const res = await axios.get(`/api/role`)
      dispatch(getRolesSuccess(res.data))
      dispatch(endApiCall())
    } catch (err) {
      dispatch(endApiCall())
    }
  }
}

export const saveRole = (role: Role) => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall('Saving...'))
    try {
      if (role.id) {
        const res = await axios.put(`/api/role`, role)
        // dispatch(updateRoleSuccess(role))
      } else {
        const res = await axios.post(`/api/role`, role)
        // dispatch(createRoleSuccess(role))
      }

      // dispatch(endApiCall())
    } catch (err) {
      dispatch(endApiCall())
    }
  }
}

export const deleteRole = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteRoleOptimistic(id))
      const res = await axios.delete(`/api/role/${id}`)
    } catch (err) {
      dispatch(endApiCall())
    }
  }
}

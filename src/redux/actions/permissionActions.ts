import axios from 'axios'
import { Permission } from '../../components/auth/auth.models'
import { AppAction } from '../reducers'
import { ActionTypes } from './actionTypes'
import { Dispatch } from 'redux'
import { beginApiCall, endApiCall } from './apiStatusActions'

const getPermissionsSucces: (permissions: Permission[]) => AppAction = (
  permissions: Permission[]
) => ({
  type: ActionTypes.GET_PERMISSIONS_SUCCESS,
  payload: permissions,
})

export const fetchPermissions = () => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall('Loading...'))
    try {
      const res = await axios.get(`/api/role/permissions`)
      dispatch(getPermissionsSucces(res.data))
      dispatch(endApiCall())
    } catch (error) {
      dispatch(endApiCall())
    }
  }
}

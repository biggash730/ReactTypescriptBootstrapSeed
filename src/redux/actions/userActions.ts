import { User } from '../../components/auth/auth.models'
import { AppAction } from '../reducers'
import { ActionTypes } from './actionTypes'
import { Dispatch } from 'redux'
import { beginApiCall, endApiCall } from './apiStatusActions'
import axios from 'axios'

const getuserSuccess: (users: User[]) => AppAction = (users: User[]) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: users,
})

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall('Loading...'))
    try {
      const res = await axios.get(`/api/auth/users`)
      dispatch(getuserSuccess(res.data))
      dispatch(endApiCall())
    } catch (error) {
      dispatch(endApiCall())
    }
  }
}

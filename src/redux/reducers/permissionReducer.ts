import { Permission } from '../../components/auth/auth.models'
import { AppAction } from '.'
import { Reducer } from 'redux'
import { ActionTypes } from '../actions/actionTypes'

const permissionReducer: Reducer<Permission[]> = (state: Permission[] = [], action: AppAction) => {
  switch (action.type) {
    case ActionTypes.GET_PERMISSIONS_SUCCESS:
      return action.payload

    default:
      return state
  }
}

export default permissionReducer

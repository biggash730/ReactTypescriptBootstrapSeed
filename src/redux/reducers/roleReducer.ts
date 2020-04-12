import { AppAction } from '.'
import { Role } from '../../components/auth/auth.models'
import { Reducer } from 'redux'
import { ActionTypes } from '../actions/actionTypes'

const roleReducer: Reducer<Role[]> = (state: Role[] = [], action: AppAction) => {
  switch (action.type) {
    case ActionTypes.GET_ROLES_SUCCESS:
      return action.payload

    case ActionTypes.CREATE_ROLE_SUCCESS:
      console.log(action)
      return [...state, action.payload]

    case ActionTypes.UPDATE_ROLE_SUCCESS:
      return state.map((role) => (role.id === action.payload.id ? action.payload : role))

    case ActionTypes.DELETE_ROLE:
      return state.filter((role) => role.id !== action.id)

    default:
      return state
  }
}

export default roleReducer

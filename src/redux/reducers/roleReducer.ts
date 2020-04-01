import { AppAction } from '.'
import { Role } from '../../components/auth/auth.models'
import { Reducer } from 'redux'
import { ActionTypes } from '../actions/action-types'
import { AppState } from '../store'

export interface RoleState {
  roles: Role[]
  blocking: boolean
}

export const initialState: RoleState = {
  roles: [],
  blocking: false
}

const roleReducer: Reducer<RoleState> = (state: RoleState = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ROLES:
      return { ...state, blocking: true }
    case ActionTypes.GET_ROLES:
      return { roles: action.payload, blocking: false }
    case ActionTypes.ERROR:
      return { ...state, blocking: false }
    default:
      return state
  }
}

export default roleReducer

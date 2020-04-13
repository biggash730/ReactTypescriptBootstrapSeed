import { AppAction } from '.'
import { Reducer } from 'redux'
import { User } from '../../components/auth/auth.models'
import { ActionTypes } from '../actions/actionTypes'

export interface AuthState {
  loggedIn: boolean
  user: User | null
}

const initialState: AuthState = {
  loggedIn: false,
  user: null,
}

const authReducer: Reducer<AuthState> = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loggedIn: true }

    case ActionTypes.LOGIN_FAILED:
      return { ...state, user: null, loggedIn: false }

    default:
      return state
  }
}

export default authReducer

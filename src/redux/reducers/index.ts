import { combineReducers, Action } from 'redux'
import roleReducer from './roleReducer'
import { AppState } from '../store'
import apiStatusReducer from './apiStatusReducer'
import permissionReducer from './permissionReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

export interface AppAction extends Action {
  payload?: any
  id?: number
}

const rootReducer = combineReducers<AppState>({
  roles: roleReducer,
  apiStatus: apiStatusReducer,
  permissions: permissionReducer,
  auth: authReducer,
  users: userReducer,
})

export default rootReducer

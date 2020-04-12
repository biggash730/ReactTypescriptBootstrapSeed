import { combineReducers, Action } from 'redux'
import roleReducer from './roleReducer'
import { AppState } from '../store'
import apiStatusReducer from './apiStatusReducer'

export interface AppAction extends Action {
  payload?: any
  id?: number
}

const rootReducer = combineReducers<AppState>({
  roles: roleReducer,
  apiStatus: apiStatusReducer,
})

export default rootReducer
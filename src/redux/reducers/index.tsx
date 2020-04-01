import { combineReducers, Action } from 'redux'
import roleReducer from './roleReducer'
import { AppState } from '../store'

const rootReducer = combineReducers<AppState>({
  roleState: roleReducer
})

export default rootReducer

export interface AppAction extends Action {
  payload?: any
}

import { Reducer } from 'redux'
import { AppAction } from '.'
import { ActionTypes } from '../actions/actionTypes'

const apiStatusReducer: Reducer<boolean> = (state: boolean = false, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.BEGIN_API_CALL:
      return true
    case ActionTypes.END_API_CALL:
      return false
    default:
      return state
  }
}

export default apiStatusReducer

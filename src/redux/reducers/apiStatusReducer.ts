import { Reducer } from 'redux'
import { AppAction } from '.'
import { ActionTypes } from '../actions/actionTypes'

export interface ApiStatusState {
  blocking: boolean
  blockingMessage: string
}

const initialState: ApiStatusState = {
  blocking: false,
  blockingMessage: '',
}

const apiStatusReducer: Reducer<ApiStatusState> = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.BEGIN_API_CALL:
      return { ...state, blocking: true, blockingMessage: action.payload }
    case ActionTypes.END_API_CALL:
      return { ...state, blocking: false, blockingMessage: '' }
    default:
      return state
  }
}

export default apiStatusReducer

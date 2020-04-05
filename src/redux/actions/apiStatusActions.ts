import { AppAction } from '../reducers'
import { ActionTypes } from './actionTypes'

export const beginApiCall: () => AppAction = () => ({
  type: ActionTypes.BEGIN_API_CALL
})

export const endApiCall: () => AppAction = () => ({
  type: ActionTypes.END_API_CALL
})

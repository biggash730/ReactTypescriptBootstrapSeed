import { AppAction } from '../reducers'
import { ActionTypes } from './actionTypes'

export const beginApiCall: (message: string) => AppAction = (message: string) => ({
  type: ActionTypes.BEGIN_API_CALL,
  payload: message,
})

export const endApiCall: () => AppAction = () => ({
  type: ActionTypes.END_API_CALL,
})

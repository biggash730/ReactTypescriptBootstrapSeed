import { User } from '../../components/auth/auth.models'
import { AppAction } from '.'
import { ActionTypes } from '../actions/actionTypes'

const userReducer = (state: User[] = [], action: AppAction) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return action.payload

    default:
      return state
  }
}

export default userReducer

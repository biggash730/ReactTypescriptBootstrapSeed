import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Role } from '../components/auth/auth.models'
import { ApiStatusState } from './reducers/apiStatusReducer'

export interface AppState {
  roles: Role[]
  apiStatus: ApiStatusState
}

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
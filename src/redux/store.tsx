import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Role } from '../components/auth/auth.models'

export interface AppState {
  roles: Role[]
  blocking: boolean
}

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

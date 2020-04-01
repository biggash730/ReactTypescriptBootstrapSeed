import { RoleState } from './reducers/roleReducer'
import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export interface AppState {
  roleState: RoleState
}

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

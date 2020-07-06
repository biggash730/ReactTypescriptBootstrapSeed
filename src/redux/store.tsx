import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Role, Permission, User } from '../components/auth/auth.models'
import { ApiStatusState } from './reducers/apiStatusReducer'
import { AuthState } from './reducers/authReducer'

export interface AppState {
  roles: Role[]
  apiStatus: ApiStatusState
  permissions: Permission[]
  auth: AuthState
  users: User[]
}

const user = localStorage.getItem('currentUser')
const persistedState = {
  auth: {
    user: !!user ? JSON.parse(user) : null,
    loggedIn: !!user,
  },
}

export const store: Store<AppState> = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  const user = store.getState().auth.user
  user
    ? localStorage.setItem('currentUser', JSON.stringify(store.getState().auth.user))
    : localStorage.clear()
})

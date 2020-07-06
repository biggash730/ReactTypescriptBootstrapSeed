import * as React from 'react'
import { User } from '../auth/auth.models'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/actions/userActions'
import UserList from './userList'
import { Route, RouteProps } from 'react-router-dom'
import { RouteNames } from '../../contants'
import UserForm from './userForm'
import { History } from 'history'

export interface UsersProps {
  users: User[]
  history: History
  match: RouteProps
  fetchUsers(): Promise<void>
}

export interface UsersState {}

class Users extends React.Component<UsersProps, UsersState> {
  componentDidMount() {
    this.props.fetchUsers()
  }

  openForm = () => {
    this.props.history.push(`${this.props.match.path}/${RouteNames.form}`)
  }

  render() {
    return (
      <>
        <Route
          exact
          path={RouteNames.users}
          render={() => (
            <>
              <div className="row mb-3">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={this.openForm}>
                    New User
                  </button>
                </div>
              </div>
              <UserList
                users={this.props.users}
                history={this.props.history}
                match={this.props.match}
              />
            </>
          )}
        />
        <Route exact path={`${this.props.match.path}/${RouteNames.form}`} component={UserForm} />
        <Route path={`${this.props.match.path}/${RouteNames.form}/:id`} component={UserForm} />
      </>
    )
  }
}

const mapPropsToState = (state: AppState) => ({
  users: state.users,
})

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(mapPropsToState, mapDispatchToProps)(Users)

import * as React from 'react'
import axios from 'axios'
import { User } from '../auth/auth.models'

export interface UsersProps {}

export interface UsersState {
  users: User[]
}

class Users extends React.Component<UsersProps, UsersState> {
  state: UsersState = { users: [] }

  componentDidMount() {
    axios.get(`/api/auth/users`).then(res => {
      this.setState({ users: res.data })
    })
  }

  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-sm-12">
            <button type="button" className="btn btn-primary float-right">
              New User
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="table-responsive-sm">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="table-index">#</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user: User, i: number) => (
                      <tr className="pointer" key={user.id}>
                        <td className="table-index">{i + 1}.</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.role.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Users

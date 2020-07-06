import * as React from 'react'
import { User } from '../auth/auth.models'
import { RouteNames } from '../../contants'
import { RouteProps } from 'react-router-dom'
import { History } from 'history'

export interface UserListProps {
  users: User[]
  history: History
  match: RouteProps
}

const UserList: React.FC<UserListProps> = ({ users, history, match }) => {
  const edit = (id: number) => {
    history.push(`${match.path}/${RouteNames.form}/${id}`)
  }

  return (
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
                {users.map((user: User, i: number) => (
                  <tr className="pointer" key={user.id} onClick={() => edit(user.id)}>
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
  )
}

export default UserList

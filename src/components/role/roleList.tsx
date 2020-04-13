import * as React from 'react'
import { History } from 'history'
import { Role } from '../auth/auth.models'
import { RouteNames } from '../../contants'

export interface RoleListProps {
  roles: Role[]
  history: History
  match: any
}

const RoleList: React.FC<RoleListProps> = ({ roles, history, match }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="table-index">#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Privileges</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role: Role, i: number) => (
                  <tr
                    className="pointer"
                    key={role.id}
                    onClick={() => {
                      history.push(`${match.path}/${RouteNames.form}/${role.id}`)
                    }}>
                    <td className="table-index">{i + 1}.</td>
                    <td>{role.name}</td>
                    <td>{role.notes}</td>
                    <td>{role.permissions.split(',').length}</td>
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

export default RoleList

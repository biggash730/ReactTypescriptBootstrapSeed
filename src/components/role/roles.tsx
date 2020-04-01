import * as React from 'react'
import axios from 'axios'
import { Role } from '../auth/auth.models'
import { Route, RouteProps } from 'react-router'
import { RouteNames } from '../../contants'
import RoleForm from './role-form'
import { History } from 'history'
import BlockUi from 'react-block-ui'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchRoles } from '../../redux/actions/roleActions'
import { AppState } from '../../redux/store'

export interface RolesProps {
  history: History
  match: RouteProps
  roles: Role[]
  blocking: boolean
  dispatch: any
}

class Roles extends React.Component<RolesProps> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchRoles())
  }

  gotoForm = () => {
    this.props.history.push(`${this.props.match.path}/${RouteNames.form}`)
  }

  handleRowClick = (role: Role) => {
    this.props.history.push(`${this.props.match.path}/${RouteNames.form}/${role.id}`)
  }

  render() {
    const { path } = this.props.match
    const { roles, blocking } = this.props
    return (
      <div>
        <Route
          exact
          path="/roles"
          render={() => (
            <div>
              <BlockUi blocking={blocking} tag="div" message="Loading...">
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <button
                      type="button"
                      className="btn btn-primary float-right"
                      onClick={this.gotoForm}>
                      New Role
                    </button>
                  </div>
                </div>

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
                                  this.props.history.push(
                                    `${this.props.match.path}/${RouteNames.form}/${role.id}`
                                  )
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
              </BlockUi>
            </div>
          )}
        />
        <Route exact path={`${path}/${RouteNames.form}`} component={RoleForm} />
        <Route path={`${path}/${RouteNames.form}/:id`} component={RoleForm} />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  blocking: state.roleState.blocking,
  roles: state.roleState.roles
})

export default connect(mapStateToProps)(Roles)

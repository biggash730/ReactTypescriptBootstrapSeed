import * as React from 'react'
import { Role } from '../auth/auth.models'
import { Route, RouteProps } from 'react-router'
import { RouteNames } from '../../contants'
import RoleForm from './roleForm'
import { History } from 'history'
import { connect } from 'react-redux'
import { fetchRoles } from '../../redux/actions/roleActions'
import { AppState } from '../../redux/store'
import RoleList from './roleList'

export interface RolesProps {
  history: History
  match: RouteProps
  roles: Role[]
  fetchRoles(): Promise<void>
}

const Roles: React.SFC<RolesProps> = ({ history, match, roles, fetchRoles }) => {
  React.useEffect(() => {
    fetchRoles()
  }, [])

  const gotoForm = () => {
    history.push(`${match.path}/${RouteNames.form}`)
  }

  return (
    <div>
      <Route
        exact
        path="/roles"
        render={() => (
          <>
            <div className="row mb-3">
              <div className="col-sm-12">
                <button type="button" className="btn btn-primary float-right" onClick={gotoForm}>
                  New Role
                </button>
              </div>
            </div>
            <RoleList roles={roles} history={history} match={match} />
          </>
        )}
      />
      <Route exact path={`${match.path}/${RouteNames.form}`} component={RoleForm} />
      <Route path={`${match.path}/${RouteNames.form}/:id`} component={RoleForm} />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  roles: state.roles,
})

const mapDispatchToProps = {
  fetchRoles,
}

export default connect(mapStateToProps, mapDispatchToProps)(Roles)

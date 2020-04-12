import * as React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikActions } from 'formik'
import * as Yup from 'yup'
import { Role } from '../auth/auth.models'
import Select from 'react-select'
import axios from 'axios'
import { History } from 'history'
import { MessageDialog } from '../../helpers/message_helper'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'
import { saveRole, fetchRoles, deleteRole } from '../../redux/actions/roleActions'
import { RouteNames } from '../../contants'

export interface RoleFormProps {
  history: History
  match: any
  role: any
  saveRole(role: Role): Promise<void>
  fetchRoles(): Promise<void>
  deleteRole(id: number): Promise<void>
}

export interface RoleFormState {
  permissions: []
}

const emptyRole = { name: '', permissions: '', notes: '' }

class RoleForm extends React.Component<RoleFormProps, RoleFormState> {
  state: RoleFormState = {
    permissions: [],
  }

  componentDidMount() {
    axios.get(`/api/role/permissions`).then((res) => {
      this.setState({ permissions: res.data })
    })
  }

  handleSubmit = (role: Role, actions: FormikActions<Role>) => {
    role.permissions = (role.perms && role.perms.map((obj: any) => obj.name).join(', ')) || ''
    this.props.saveRole(role).then(() => {
      this.props.fetchRoles()
      this.closeForm()
    })
  }

  handleDelete = () => {
    MessageDialog.confirm('Delete Role', 'Are you sure you want to delete this role').then(
      (confirm) => {
        if (confirm.value) {
          this.props.deleteRole(+this.props.match.params.id)
          this.closeForm()
        }
      }
    )
  }

  closeForm = () => {
    this.props.history.push(RouteNames.roles)
  }

  roleSchema = Yup.object().shape({
    name: Yup.string().required(),
    perms: Yup.array().required(),
  })
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
          <Formik
            initialValues={this.props.role}
            enableReinitialize
            validationSchema={this.roleSchema}
            onSubmit={this.handleSubmit}
            render={(formik) => (
              <Form>
                <div className="card">
                  <div className="card-body mx-md-4">
                    <h5 className="card-title text-uppercase text-muted ml-md-n4">Role Form</h5>
                    <br />
                    <div className="form-group">
                      <label>Name</label>
                      <Field type="text" className="form-control" name="name" />
                      <ErrorMessage name="name" component="div" className="invalid-msg" />
                    </div>
                    <div className="form-group">
                      <label>Privileges</label>
                      <Select
                        name="perms"
                        isMulti
                        options={this.state.permissions}
                        getOptionValue={(option: any) => option['name']}
                        getOptionLabel={(option: any) => option['name']}
                        value={this.props.role.perms}
                        closeMenuOnSelect={false}
                        onChange={(option: any) => {
                          formik.setFieldValue('perms', option)
                        }}
                      />
                      <ErrorMessage name="permissions" component="div" className="invalid-msg" />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <Field
                        component="textarea"
                        rows={3}
                        className="form-control"
                        name="notes"></Field>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-success float-right">
                        <i className="fas fa-save"></i> Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-light border border-dark float-right"
                        onClick={this.closeForm}>
                        <i className="fas fa-times"></i> Close
                      </button>
                      {this.props.match.params.id && (
                        <button
                          type="button"
                          className="btn btn-danger float-left"
                          onClick={this.handleDelete}>
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    )
  }
}

const getRoleById = (roles: Role[], id: number) => {
  const role = roles.find((r) => r.id === id) || emptyRole
  const perms = splitPermissions(role)
  return { ...role, perms: perms }
}

const splitPermissions = (role: Role) => {
  return role
    ? (role.permissions as string).split(', ').map((elm) => {
        return { name: elm }
      })
    : []
}

const mapStateToProps = (state: AppState, ownProps: RoleFormProps) => {
  const { id } = ownProps.match.params
  return {
    role:
      id && state.roles.length > 0
        ? getRoleById(state.roles, +id)
        : { name: '', permissions: '', notes: '' },
  }
}

const mapDispatchToProps = {
  saveRole,
  fetchRoles,
  deleteRole,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleForm)

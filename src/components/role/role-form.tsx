import * as React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikActions } from 'formik'
import * as Yup from 'yup'
import { Role } from '../auth/auth.models'
import Select from 'react-select'
import axios from 'axios'
import { History } from 'history'
import BlockUi from 'react-block-ui'
import { MessageDialog } from '../../helpers/message_helper'

export interface RoleFormProps {
  history: History
  match: any
}

export interface RoleFormState {
  permissions: []
  blocking: boolean
  id: string
  role: Role
  selected: any
}

class RoleForm extends React.Component<RoleFormProps, RoleFormState> {
  state: RoleFormState = {
    permissions: [],
    blocking: false,
    id: '',
    role: { name: '', permissions: '', notes: '' },
    selected: null
  }

  componentDidMount() {
    axios.get(`/api/role/permissions`).then(res => {
      this.setState({ permissions: res.data })
    })

    const { id } = this.props.match.params
    this.setState({ id: id })
    if (id) {
      this.setState({ blocking: true })
      axios
        .get(`/api/role/${id}`)
        .then(res => {
          const selected = (res.data.permissions as string).split(', ').map(elm => {
            return { name: elm }
          })
          const role: Role = res.data
          role.notes = role.notes || ''
          this.setState({ blocking: false, role: role, selected: selected })
        })
        .catch(() => this.setState({ blocking: false }))
    }
  }

  handleSubmit = (values: Role, actions: FormikActions<Role>) => {
    this.setState({ blocking: true })
    axios
      .post('/api/role', values)
      .then(res => {
        this.closeForm()
      })
      .catch(() => this.setState({ blocking: false }))
  }

  handleDelete = () => {
    MessageDialog.confirm('Delete Role', 'Are you sure you want to delete this role').then(
      confirm => {
        if (confirm.value) {
          this.setState({ blocking: true })
          axios.delete(`/api/role/${this.state.id}`).then(res => {
            this.setState({ blocking: false })
            this.closeForm()
          })
        }
      }
    )
  }

  closeForm = () => {
    this.props.history.goBack()
  }

  roleSchema = Yup.object().shape({
    name: Yup.string().required(),
    permissions: Yup.string().required()
  })
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
          <BlockUi blocking={this.state.blocking} tag="div" message="Saving...">
            <Formik
              initialValues={this.state.role}
              enableReinitialize
              validationSchema={this.roleSchema}
              onSubmit={this.handleSubmit}
              render={formik => (
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
                          name="permissions"
                          isMulti
                          options={this.state.permissions}
                          getOptionValue={(option: any) => option['name']}
                          getOptionLabel={(option: any) => option['name']}
                          value={this.state.selected}
                          closeMenuOnSelect={false}
                          onChange={(option: any) => {
                            let perms =
                              option &&
                              option.reduce((acc: string, elm: any, index: number, array: []) => {
                                return index < array.length - 1
                                  ? (acc += `${elm.name}, `)
                                  : (acc += `${elm.name}`)
                              }, '')
                            console.log(option)
                            this.setState({ selected: option })
                            formik.setFieldValue('permissions', perms)
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
                        {this.state.id && (
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
          </BlockUi>
        </div>
      </div>
    )
  }
}

export default RoleForm

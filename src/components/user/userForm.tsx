import * as React from 'react'
import FormCard from '../shared/formCard'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { User, emptyUser, Role } from '../auth/auth.models'
import Select from 'react-select'
import { AppState } from '../../redux/store'
import { connect } from 'react-redux'
import { fetchRoles } from '../../redux/actions/roleActions'
import { RouteNames } from '../../contants'
import { History } from 'history'
import * as Yup from 'yup'

export interface UserFormProps {
  match: any
  history: History
  roles: Role[]
  fetchRoles(): Promise<void>
}

const UserForm: React.FC<UserFormProps> = ({ match, history, roles, fetchRoles }) => {
  React.useEffect(() => {
    if (roles.length === 0) fetchRoles()
  }, [])

  const handleSubmit = (user: User) => {
    console.log(user)
  }

  const closeForm = () => {
    history.push(RouteNames.users)
  }

  const handleDelete = () => {}

  const userSchema = Yup.object().shape({
    name: Yup.string().label('Name').required(),
    email: Yup.string().label('Email').email(),
    password: Yup.string().label('Password').required().min(6),
    passwordConfirmation: Yup.string()
      .required()
      .test('password-match', 'Passwords must  match', function (value) {
        return this.parent.password === value
      }),
  })

  return (
    <FormCard title="User Form">
      <Formik
        initialValues={emptyUser}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
        render={(formik) => (
          <Form>
            <div className="form-group">
              <label>Name</label>
              <Field type="text" className="form-control" name="name" />
              <ErrorMessage name="name" component="div" className="invalid-msg" />
            </div>

            <div className="row">
              <div className="form-group col-sm-12 col-md-6">
                <label>Phone Number</label>
                <Field type="text" className="form-control" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className="invalid-msg" />
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label>Email</label>
                <Field type="email" className="form-control" name="email" />
                <ErrorMessage name="email" component="div" className="invalid-msg" />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-sm-12 col-md-6">
                <label>Username</label>
                <Field type="text" className="form-control" name="username" />
                <ErrorMessage name="username" component="div" className="invalid-msg" />
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label>Password</label>
                <Field type="password" className="form-control" name="password" />
                <ErrorMessage name="password" component="div" className="invalid-msg" />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-sm-12 col-md-6">
                <label>Password Confirmation</label>
                <Field type="password" className="form-control" name="passwordConfirmation" />
                <ErrorMessage name="passwordConfirmation" component="div" className="invalid-msg" />
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label>Role</label>
                <Select
                  name="role"
                  options={roles}
                  getOptionValue={(option: any) => option['id']}
                  getOptionLabel={(option: any) => option['name']}
                  //   value={props.role.perms}
                  onChange={(option: any) => {
                    formik.setFieldValue('role', option)
                  }}
                />
                <ErrorMessage name="role" component="div" className="invalid-msg" />
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-success float-right">
                <i className="fas fa-save"></i> Save
              </button>
              <button
                type="button"
                className="btn btn-light border border-dark float-right"
                onClick={closeForm}>
                <i className="fas fa-times"></i> Close
              </button>
              {match.params.id && (
                <button type="button" className="btn btn-danger float-left" onClick={handleDelete}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              )}
            </div>
          </Form>
        )}
      />
    </FormCard>
  )
}

const mapPropsToState = (state: AppState) => ({
  roles: state.roles,
})

const mapDispatchToProps = {
  fetchRoles,
}

export default connect(mapPropsToState, mapDispatchToProps)(UserForm)

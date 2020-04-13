import * as React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikActions } from 'formik'
import * as Yup from 'yup'
import './login.scss'
import { authService } from './authService'
import { AppState } from '../../redux/store'
import { doLogin } from '../../redux/actions/authActions'
import { connect } from 'react-redux'

export interface LoginProps {
  history: any
  doLogin(params: LoginParams): Promise<any>
  // onLogIn: (loggedIn: boolean) => void
}

export interface LoginState {}

export interface LoginParams {
  username: string
  password: string
  rememberMe: boolean
}

class Login extends React.Component<LoginProps, LoginState> {
  // state = { :  }

  login = (params: LoginParams) => {
    this.props.doLogin(params).then(() => {
      this.props.history.push('/dashboard')
    })
    // authService
    //   .login(params)
    //   .then(user => {
    //     authService.authenticated = true
    //     authService.setUser(user)
    //     this.props.onLogIn(true)
    //     this.props.history.push('/dashboard')
    //   })
    //   .catch(err => {})
  }

  loginSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  })

  render() {
    return (
      <div className="container d-flex align-content-center">
        <div className="card shadow mx-auto login-card">
          <div className="card-body px-5">
            <h5 className="card-title text-center text-uppercase">Login</h5>
            <div className="text-center">
              <img
                src={require('../../assets/images/login.png')}
                alt="Login Logo"
                height="80"
                width="80"
              />
            </div>
            <Formik
              initialValues={{ username: '', password: '', rememberMe: false }}
              validationSchema={this.loginSchema}
              onSubmit={(values: LoginParams, actions: FormikActions<LoginParams>) => {
                this.login(values)
                actions.setSubmitting(false)
              }}
              render={({ errors, status, touched, isSubmitting }) => (
                <Form>
                  <div className="form-group mb-4">
                    <label>Username</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <Field type="text" className="form-control" name="username" />
                    </div>
                    <ErrorMessage name="username" component="div" className="invalid-msg" />
                  </div>

                  <div className="form-group mb-4">
                    <label>Password</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-lock"></i>
                        </div>
                      </div>
                      <Field type="password" className="form-control" name="password" />
                    </div>
                    <ErrorMessage name="password" component="div" className="invalid-msg" />
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <Field
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        name="rememberMe"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Remember Me
                      </label>
                    </div>
                  </div>

                  {!isSubmitting && (
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={isSubmitting}>
                      Login
                    </button>
                  )}
                  {isSubmitting && (
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      disabled={isSubmitting}>
                      <i className="fas fa-spinner fa-spin"></i> &nbsp; Authenticating
                    </button>
                  )}
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = {
  doLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

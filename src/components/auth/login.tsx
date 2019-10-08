import * as React from 'react'
import './login.scss'
import { authService } from './authService'

export interface LoginProps {
  history: any
  onLogIn: (loggedIn: boolean) => void
}

export interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  // state = { :  }

  login = () => {
    authService.login()
    this.props.onLogIn(true)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      //   <div className="row mt-5">
      //     <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      //       <div className="card shadow">
      //         <div className="card-body px-5">
      //           <h5 className="card-title text-center text-uppercase">Login</h5>
      //           <div className="text-center">
      //             <img
      //               src={require('./login.png')}
      //               alt="Login Logo"
      //               height="80"
      //               width="80"
      //             />
      //           </div>
      //           <form>
      //             <div className="form-group mb-4">
      //               <label>Username</label>
      //               {/* <div className="input-group mb-2">
      //                   <div className="input-group-prepend">
      //                     <div className="input-group-text">@</div>
      //                   </div>

      //                 </div> */}
      //               <input
      //                 type="text"
      //                 className="form-control"
      //                 placeholder="Username"
      //               />
      //             </div>

      //             <div className="form-group mb-4">
      //               <label>Password</label>
      //               {/* <div className="input-group mb-2">
      //                   <div className="input-group-prepend">
      //                     <div className="input-group-text">
      //                       <i className="fas fa-lock"></i>
      //                     </div>
      //                   </div>

      //                 </div> */}
      //               <input
      //                 type="password"
      //                 className="form-control"
      //                 placeholder="Password"
      //               />
      //             </div>

      //             <div className="form-group">
      //               <div className="custom-control custom-checkbox">
      //                 <input
      //                   type="checkbox"
      //                   className="custom-control-input"
      //                   id="customCheck1"
      //                 />
      //                 <label
      //                   className="custom-control-label"
      //                   htmlFor="customCheck1"
      //                 >
      //                   Remember Me
      //                 </label>
      //               </div>
      //             </div>

      //             <button
      //               type="submit"
      //               className="btn btn-primary btn-block mb-3"
      //             >
      //               Submit
      //             </button>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      <div className="container d-flex align-content-center">
        <div className="card shadow mx-auto login-card">
          <div className="card-body px-5">
            <h5 className="card-title text-center text-uppercase">Login</h5>
            <div className="text-center">
              <img
                src={require('./login.png')}
                alt="Login Logo"
                height="80"
                width="80"
              />
            </div>
            <form>
              <div className="form-group mb-4">
                <label>Username</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="form-group mb-4">
                <label>Password</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </div>
                  </div>
                  <input type="password" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember Me
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.login}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

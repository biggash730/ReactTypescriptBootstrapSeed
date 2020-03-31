import axios from 'axios'
import { LoginParams } from './login'
import { User } from './auth.models'

class AuthService {
  private static autherService: AuthService
  private _authenticated: boolean
  currentUser: User

  constructor() {
    this.currentUser = this.getUser()
    this._authenticated = !!this.currentUser
  }

  public static get instance() {
    return this.autherService || (this.autherService = new this())
  }

  get authenticated() {
    return this._authenticated
  }

  set authenticated(value: boolean) {
    this._authenticated = value
  }

  login(params: LoginParams) {
    return axios.post(`/api/auth/login`, params)
  }

  logout() {
    this._authenticated = false
    localStorage.clear()
    return axios.delete(`/api/auth/logout`)
  }

  setUser(user: any) {
    this.currentUser = user
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  getUser() {
    const user = localStorage.getItem('currentUser')
    return !!user ? JSON.parse(user) : null
  }

  clear() {
    localStorage.clear()
  }
}

export const authService = AuthService.instance

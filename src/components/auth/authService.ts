import axios from 'axios'
import { LoginParams } from './login'

class AuthService {
  private static autherService: AuthService
  private _authenticated: boolean
  currentUser: any // todo: change to correct type

  constructor() {
    this.currentUser = localStorage.getItem('currentUser')
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

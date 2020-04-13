import axios from 'axios'
import { LoginParams } from './login'

export function login(params: LoginParams) {
  return axios.post(`/api/auth/login`, params)
}

export function logout() {
  localStorage.clear()
  return axios.delete(`/api/auth/logout`)
}

import axios from 'axios'
import { Toast } from './message_helper'
import { authService } from '../components/auth/authService'

axios.interceptors.request.use(
  config => {
    if (authService.currentUser) {
      const user = authService.currentUser
      config.headers = { Authorization: `Bearer ${user.token}` }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.data && response.data.message) {
      Toast.success(response.data.message)
    }
    return response
  },
  err => {
    if (err.response) {
      Toast.error(err.response.data.message)
    }
    return Promise.reject(err)
  }
)

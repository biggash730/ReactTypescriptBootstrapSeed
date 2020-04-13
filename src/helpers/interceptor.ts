import axios from 'axios'
import { Toast } from './message_helper'
import { User } from '../components/auth/auth.models'

axios.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('currentUser')
    if (user) {
      const currentUser: User = JSON.parse(user)
      config.headers = { Authorization: `Bearer ${currentUser.token}` }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 201:
        Toast.success('Record saved successfully')
        break
      case 204:
        if (response.config.method === 'delete') {
          Toast.success('Record deleted successfully')
        } else if (response.config.method === 'put') {
          Toast.success('Record updated successfully')
        }
        break
      default:
        break
    }
    return response
  },
  (err) => {
    if (err.response) {
      Toast.error(err.response.data.message)
    }
    return Promise.reject(err)
  }
)

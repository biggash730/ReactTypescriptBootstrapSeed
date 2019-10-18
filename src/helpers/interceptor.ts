import axios from 'axios'
import { Toast } from './message_helper'

axios.interceptors.request.use(
  config => {
    // todo: get token and set in header
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
    return response.data
  },
  err => {
    if (err.response) {
      Toast.error(err.response.data.message)
    }
    return Promise.reject(err)
  }
)

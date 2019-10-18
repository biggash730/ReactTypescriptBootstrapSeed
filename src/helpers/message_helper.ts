import * as toast from 'toastr'
import swal from 'sweetalert2'
import { SweetAlertType } from 'sweetalert2'

toast.options.positionClass = 'toast-top-center'

export class Toast {
  static success(message: string) {
    this.clear()
    toast.success(message)
  }

  static error(message: string, title?: string) {
    this.clear()
    toast.error(message, title, { timeOut: 0, extendedTimeOut: 0 })
  }

  static info(message: string) {
    this.clear()
    toast.info(message)
  }

  static warning(message: string) {
    this.clear()
    toast.warning(message)
  }

  static show(message: string, success: boolean) {
    success ? this.success(message) : this.error(message)
  }

  static clear() {
    toast.clear()
  }
}

export class MessageDialog {
  static success(message: string) {
    swal.fire('Success', message, 'success')
  }

  static error(message: string) {
    swal.fire('Error', message, 'error')
  }

  static info(message: string) {
    swal.fire('Info', message, 'info')
  }

  static warning(message: string) {
    swal.fire('Warning', message, 'warning')
  }

  static show(message: string, success: boolean) {
    const type: SweetAlertType = success ? 'success' : 'error'
    swal.fire(type.toUpperCase(), message, type)
  }

  static confirm(title: string, message: string) {
    return swal.fire({
      title: title,
      text: message,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#5cb85c',
      cancelButtonColor: '#d33'
    })
  }
}

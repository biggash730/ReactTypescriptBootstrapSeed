export interface User {
  id: number
  name: string
  phoneNumber: string
  email: string
  username: string
  password?: string
  passwordConfirmation?: string
  role: Role
  token?: string
}

export interface Role {
  id?: number
  name: string
  notes?: string
  permissions: string
  perms?: []
}

export interface Permission {
  id: number
  name: string
  notes: string
}

export const emptyRole = { name: '', permissions: '', notes: '' }

export const emptyUser: User = {
  id: 0,
  name: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  email: '',
  phoneNumber: '',
  role: emptyRole,
}

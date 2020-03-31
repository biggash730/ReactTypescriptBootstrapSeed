export interface User {
  id: number
  name: string
  phoneNumber: string
  email: string
  username: string
  role: Role
  token: string
}

export interface Role {
  id?: number
  name: string
  notes?: string
  permissions: string
  perms?: []
}

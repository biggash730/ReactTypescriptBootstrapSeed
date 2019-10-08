class AuthService {
  authenticated: boolean
  private static autherService: AuthService

  constructor() {
    this.authenticated = false
  }

  public static get instance() {
    return this.autherService || (this.autherService = new this())
  }

  login() {
    this.authenticated = true
  }

  logout() {
    this.authenticated = false
  }
}

export const authService = AuthService.instance

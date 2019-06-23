import FirebaseAuthService from './FirebaseAuthService'
import MockAuthService from './MockAuthService'

console.log(process.env.IS_OFFLINE)
export const authService = process.env.IS_OFFLINE
  ? new MockAuthService()
  : new FirebaseAuthService()

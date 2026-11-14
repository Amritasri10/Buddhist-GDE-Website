import { noTokenPostRequest, postRequest } from '../../Helpers'
import { AUTH_ENDPOINTS } from '../../api'
import { ROLES } from '../../data/auth/register'
import { setAuthCookie, deleteAuthCookie } from '../../Hooks/cookie'

export const getRoles = () => {
  return ROLES
}

export const login = async (credentials) => {
  // const res = await noTokenPostRequest(AUTH_ENDPOINTS.LOGIN, credentials)
  // setAuthCookie(res.data.token)
  // return res.data

  return { success: true, message: 'Login successful (static)' }
}

export const register = async (userData) => {
  // const res = await noTokenPostRequest(AUTH_ENDPOINTS.REGISTER, userData)
  // setAuthCookie(res.data.token)
  // return res.data

  return { success: true, message: 'Account created (static)' }
}

export const forgotPassword = async (email) => {
  // const res = await noTokenPostRequest(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email })
  // return res.data

  return { success: true, message: 'Reset link sent (static)' }
}

export const logout = async () => {
  // await postRequest(AUTH_ENDPOINTS.LOGOUT)
  deleteAuthCookie()
  return { success: true }
}

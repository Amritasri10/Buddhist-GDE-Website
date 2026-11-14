import axios from 'axios'
import Cookies from 'js-cookie'
import { API_BASE_URL, SIGNUP_URL, COOKIE_NAME } from '../constants'
import { deleteCookie } from '../Hooks/cookie'

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get(COOKIE_NAME)
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status

    if (status === 401) {
      deleteCookie(COOKIE_NAME)
      if (typeof window !== 'undefined') {
        window.location.href = SIGNUP_URL
      }
      console.error('Unauthorized: Redirecting to login page')
    }

    return Promise.reject(error)
  },
)

//  AUTH REQUESTS  (token attached via interceptor)
export const getRequest    = (url)         => api.get(url)
export const postRequest   = (url, data)   => api.post(url, data)
export const putRequest    = (url, data)   => api.put(url, data)
export const patchRequest  = (url, data)   => api.patch(url, data)
export const deleteRequest = (url)         => api.delete(url)
export const fileUpload = (url, formData) =>
  api.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

//  PUBLIC REQUESTS  (no token — separate instance)
const publicApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

export const noTokenGetRequest    = (url)         => publicApi.get(url)
export const noTokenPostRequest   = (url, data)   => publicApi.post(url, data)
export const noTokenPutRequest    = (url, data)   => publicApi.put(url, data)
export const noTokenPatchRequest  = (url, data)   => publicApi.patch(url, data)
export const noTokenDeleteRequest = (url)         => publicApi.delete(url)
export const noTokenFileUpload = (url, formData) =>
  publicApi.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
export const request = ({ method, url, cred }) =>
  api[method](url, cred)

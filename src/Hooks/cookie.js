import { useCallback } from 'react'
import Cookies from 'js-cookie'
import { COOKIE_NAME } from '../constants'

export default function useCookie() {

  const setCookie = useCallback(function (cname, cvalue, exdays = 30) {
    Cookies.set(cname, cvalue, { expires: exdays, path: '/' })
    return true
  }, [])

  const getCookie = useCallback(function (cname) {
    return Cookies.get(cname)
  }, [])

  // Shorthand helpers using the app's default auth cookie
  const setAuthCookie = useCallback(function (value, exdays = 30) {
    Cookies.set(COOKIE_NAME, value, { expires: exdays, path: '/' })
    return true
  }, [])

  const getAuthCookie = useCallback(function () {
    return Cookies.get(COOKIE_NAME)
  }, [])

  return { setCookie, getCookie, setAuthCookie, getAuthCookie }
}

export const deleteCookie = function (cname) {
  document.cookie = `${cname}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  return true
}

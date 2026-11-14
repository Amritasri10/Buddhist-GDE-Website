import Cookies from 'js-cookie'
import { COOKIE_NAME } from '../constants/index'

// ─────────────────────────────────────────────
//  GENERIC COOKIE UTILS
//  Use these for any cookie — name pass karo
// ─────────────────────────────────────────────
export const setCookie = (name, value, days = 30) => {
  Cookies.set(name, value, { expires: days, path: '/' })
}

export const getCookie = (name) => {
  return Cookies.get(name)
}

export const deleteCookie = (name) => {
  Cookies.remove(name, { path: '/' })
}

// ─────────────────────────────────────────────
//  AUTH COOKIE UTILS
//  Shorthand for the app's main auth cookie.
//  Cookie name comes from constants → env file.
// ─────────────────────────────────────────────
export const setAuthCookie = (value, days = 30) => {
  Cookies.set(COOKIE_NAME, value, { expires: days, path: '/' })
}

export const getAuthCookie = () => {
  return Cookies.get(COOKIE_NAME)
}

export const deleteAuthCookie = () => {
  Cookies.remove(COOKIE_NAME, { path: '/' })
}

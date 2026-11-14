// ============================================================
//  App-wide constants — single source of truth
//  All env variables are read once here.
//  Never read import.meta.env directly in components or helpers.
// ============================================================

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const SIGNUP_URL   = import.meta.env.VITE_SIGNUP_URL
export const COOKIE_NAME = import.meta.env.VITE_COOKIE_NAME || "buddh_auth_token";
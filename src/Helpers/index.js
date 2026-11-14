import { deleteCookie } from '../Hooks/cookie'
import axios from 'axios'
import Cookies from 'js-cookie'
import { confirmDialog } from 'primereact/confirmdialog'
import { API_BASE_URL, SIGNUP_URL, COOKIE_NAME } from '../constants'

// FETCHING TOKEN FROM COOKIE
export const token = Cookies.get(COOKIE_NAME)

export const request = async (props) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios?.[props?.method](
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          Authorization: `${token}`,
        },
        withCredentials: true,
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      // window != undefined && (window.location.href = `${SIGNUP_URL}`);
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const getRequest = async (url) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios.get(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `${token}`,
      },
    })

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const postRequest = async (props) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios?.post(
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      window != undefined && (window.location.href = `${SIGNUP_URL}`)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const putRequest = async (props) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios?.put(
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      window != undefined && (window.location.href = `${SIGNUP_URL}`)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const patchRequest = async (props) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios?.patch(
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      window != undefined && (window.location.href = `${SIGNUP_URL}`)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const deleteRequest = async (url) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios.delete(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `${token}`,
      },
    })

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      window != undefined && (window.location.href = `${SIGNUP_URL}`)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const deleteRequest1 = async (url) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const confirmed = await confirmDeletion('Are you sure you want to delete this item?')
    if (confirmed) {
      const response = await axios.delete(`${API_BASE_URL}${url}`, {
        headers: {
          Authorization: `${token}`,
        },
      })

      return response
    } else {
      throw 'An error occurred while deleting the item'
    }
  } catch (error) {
    if (error?.response?.status) {
      if (error.response.status === 401) {
        deleteCookie(COOKIE_NAME)
        console.error('Unauthorized: Redirecting to login page')
      }
    }
    throw error
  }
}

export const noTokenGetRequest = async (url) => {
  const response = await axios.get(`${API_BASE_URL}${url}`, {
    withCredentials: true,
  })
  return response
}

export const noTokenPostRequest = async (props) => {
  const response = await axios.post(
    `${API_BASE_URL}${props?.url}`,
    props?.cred,
    {
      withCredentials: true,
    },
  )
  return response
}

export const noTokenPutRequest = async (props) => {
  const response = await axios.put(
    `${API_BASE_URL}${props?.url}`,
    props?.cred,
    {
      withCredentials: true,
    },
  )
  return response
}

export const noTokenPatchRequest = async (props) => {
  const response = await axios.patch(
    `${API_BASE_URL}${props?.url}`,
    props?.cred,
    {
      withCredentials: true,
    },
  )
  return response
}

export const noTokenDeleteRequest = async (url) => {
  const response = await axios.delete(`${API_BASE_URL}${url}`, {
    withCredentials: true,
  })
  return response
}

export const fileUpload = async (props) => {
  const token = Cookies.get(COOKIE_NAME)
  try {
    const response = await axios.post(
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie(COOKIE_NAME)
      window != undefined && (window.location.href = `${SIGNUP_URL}`)
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const noTokenfileUpload = async (props) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        responseType: 'arraybuffer',
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      },
    )

    return response
  } catch (error) {
    if (error.response.status === 401) {
      console.error('Unauthorized: Redirecting to login page')
    }

    throw error
  }
}

// Function to display a confirmation dialog
const confirmDeletion = async (message) => {
  return new Promise((resolve) => {
    const accept = () => resolve(true)
    const reject = () => resolve(false)

    confirmDialog({
      message: message,
      header: 'Confirm Deletion',
      icon: 'warning',
      acceptClassName: 'p-button-danger',
      acceptText: 'Delete',
      accept: accept,
      reject: reject,
    })
  })
}

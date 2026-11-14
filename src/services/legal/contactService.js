import { postRequest } from '../../Helpers'
import { LEGAL_ENDPOINTS } from '../../api'

export const submitContact = async (contactData) => {
  // const res = await postRequest(LEGAL_ENDPOINTS.CONTACT, contactData)
  // return res.data

  return { success: true, message: 'Message sent (static)', data: contactData }
}

import { getRequest } from '../../Helpers'
import { LEGAL_ENDPOINTS } from '../../api'
import { FAQS } from '../../data/legal/faq'

export const getFAQData = async () => {
  // const res = await getRequest(LEGAL_ENDPOINTS.FAQ)
  // return res.data

  return { faqs: FAQS }
}

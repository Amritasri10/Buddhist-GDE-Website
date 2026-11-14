import { getRequest } from '../../Helpers'
import { TEMPLES_ENDPOINTS } from '../../api'
import { TEMPLES_DATA, TRADITIONS, COUNTRIES } from '../../data/temples/temples'

export const getTemplesData = async () => {
  // const res = await getRequest(TEMPLES_ENDPOINTS.TEMPLES)
  // return res.data

  return { temples: TEMPLES_DATA, traditions: TRADITIONS, countries: COUNTRIES }
}

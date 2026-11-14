import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { DESTINATIONS, PACKAGES } from '../../data/services/travel'

export const getTravelData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.TRAVEL)
  // return res.data

  return { destinations: DESTINATIONS, packages: PACKAGES }
}

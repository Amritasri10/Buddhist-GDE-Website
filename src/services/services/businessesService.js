import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { BUSINESSES } from '../../data/services/businesses'

export const getBusinessesData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.BUSINESSES)
  // return res.data

  return { businesses: BUSINESSES }
}

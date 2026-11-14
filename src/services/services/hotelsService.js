import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { HOTELS } from '../../data/services/hotels'

export const getHotelsData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.HOTELS)
  // return res.data

  return { hotels: HOTELS }
}

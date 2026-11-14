import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { RESTAURANTS } from '../../data/services/restaurants'

export const getRestaurantsData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.RESTAURANTS)
  // return res.data

  return { restaurants: RESTAURANTS }
}

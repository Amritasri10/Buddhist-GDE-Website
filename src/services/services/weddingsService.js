import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { WEDDING_PACKAGES } from '../../data/services/weddings'

export const getWeddingsData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.WEDDINGS)
  // return res.data

  return { packages: WEDDING_PACKAGES }
}

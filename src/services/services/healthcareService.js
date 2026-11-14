import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { PROVIDERS } from '../../data/services/healthcare'

export const getHealthcareData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.HEALTHCARE)
  // return res.data

  return { providers: PROVIDERS }
}

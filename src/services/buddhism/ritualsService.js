import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { CEREMONY_SERVICES } from '../../data/buddhism/rituals'

export const getRitualsData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.RITUALS)
  // return res.data

  return { ceremonyServices: CEREMONY_SERVICES }
}

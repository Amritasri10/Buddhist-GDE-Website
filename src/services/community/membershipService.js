import { getRequest } from '../../Helpers'
import { COMMUNITY_ENDPOINTS } from '../../api'
import { PLANS } from '../../data/community/membership'

export const getMembershipData = async () => {
  // const res = await getRequest(COMMUNITY_ENDPOINTS.MEMBERSHIP)
  // return res.data

  return { plans: PLANS }
}

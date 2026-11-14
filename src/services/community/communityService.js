import { getRequest } from '../../Helpers'
import { COMMUNITY_ENDPOINTS } from '../../api'
import { GROUPS, DISCUSSIONS } from '../../data/community/community'

export const getCommunityData = async () => {
  // const res = await getRequest(COMMUNITY_ENDPOINTS.COMMUNITY)
  // return res.data

  return { groups: GROUPS, discussions: DISCUSSIONS }
}

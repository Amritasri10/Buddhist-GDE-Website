import { getRequest } from '../../Helpers'
import { COMMUNITY_ENDPOINTS } from '../../api'
import { MEDIA } from '../../data/community/media'

export const getMediaData = async () => {
  // const res = await getRequest(COMMUNITY_ENDPOINTS.MEDIA)
  // return res.data

  return { media: MEDIA }
}

import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { TIMELINE, CORE_TEACHINGS } from '../../data/buddhism/buddha'

export const getBuddhaData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.BUDDHA)
  // return res.data

  return { timeline: TIMELINE, coreTeachings: CORE_TEACHINGS }
}

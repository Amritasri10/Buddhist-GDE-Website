import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { FESTIVALS } from '../../data/buddhism/festivals'

export const getFestivalsData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.FESTIVALS)
  // return res.data

  return { festivals: FESTIVALS }
}

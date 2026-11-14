import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { COUNTRIES } from '../../data/buddhism/heritage'

export const getHeritageData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.HERITAGE)
  // return res.data

  return { countries: COUNTRIES }
}

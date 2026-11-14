import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { SCRIPTURES } from '../../data/buddhism/scriptures'

export const getScripturesData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.SCRIPTURES)
  // return res.data

  return { scriptures: SCRIPTURES }
}

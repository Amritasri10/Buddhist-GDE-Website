import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { TRADITIONS } from '../../data/buddhism/traditions'

export const getTraditionsData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.TRADITIONS)
  // return res.data

  return { traditions: TRADITIONS }
}

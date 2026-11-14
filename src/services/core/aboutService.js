import { getRequest } from '../../Helpers'
import { CORE_ENDPOINTS } from '../../api'
import { TOPICS, TRADITIONS } from '../../data/core/aboutBuddhism'

export const getAboutBuddhismData = async () => {
  // const res = await getRequest(CORE_ENDPOINTS.ABOUT_BUDDHISM)
  // return res.data

  return { topics: TOPICS, traditions: TRADITIONS }
}

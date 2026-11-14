import { getRequest } from '../../Helpers'
import { TEMPLES_ENDPOINTS } from '../../api'
import { BHANTES_DATA, TRADITION_FILTERS } from '../../data/temples/bhantes'

export const getBhantesData = async () => {
  // const res = await getRequest(TEMPLES_ENDPOINTS.BHANTES)
  // return res.data

  return { bhantes: BHANTES_DATA, traditionFilters: TRADITION_FILTERS }
}

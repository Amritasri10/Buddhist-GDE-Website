import { getRequest } from '../../Helpers'
import { EDUCATION_ENDPOINTS } from '../../api'
import { PAPERS, RESEARCH_STATS } from '../../data/education/research'

export const getResearchData = async () => {
  // const res = await getRequest(EDUCATION_ENDPOINTS.RESEARCH)
  // return res.data

  return { papers: PAPERS, stats: RESEARCH_STATS }
}

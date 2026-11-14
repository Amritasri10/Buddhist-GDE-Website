import { getRequest } from '../../Helpers'
import { BUDDHISM_ENDPOINTS } from '../../api'
import { ARTICLES, CATEGORIES } from '../../data/buddhism/knowledge'

export const getKnowledgeData = async () => {
  // const res = await getRequest(BUDDHISM_ENDPOINTS.KNOWLEDGE)
  // return res.data

  return { articles: ARTICLES, categories: CATEGORIES }
}

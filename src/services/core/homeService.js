// ─────────────────────────────────────────────
//  HOME SERVICE
//  - Abhi: static data return karta hai
//  - Backend ready: uncomment API call, remove static
// ─────────────────────────────────────────────
import { getRequest } from '../../Helpers'
import { CORE_ENDPOINTS } from '../../api'
import {
  TEMPLES, BHANTES, COURSES, PRODUCTS, EVENTS,
  DONATIONS, KNOWLEDGE_TOPICS, SERVICES, MEMBERSHIPS,
} from '../../data/core/home'

export const getHomeData = async () => {
  // BACKEND READY:
  // const res = await getRequest(CORE_ENDPOINTS.HOME)
  // return res.data

  // FOR NOW: return static data
  return {
    temples: TEMPLES,
    bhantes: BHANTES,
    courses: COURSES,
    products: PRODUCTS,
    events: EVENTS,
    donations: DONATIONS,
    knowledgeTopics: KNOWLEDGE_TOPICS,
    services: SERVICES,
    memberships: MEMBERSHIPS,
  }
}

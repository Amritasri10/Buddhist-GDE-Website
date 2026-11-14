import { getRequest } from '../../Helpers'
import { SERVICES_ENDPOINTS } from '../../api'
import { EVENTS, EVENT_TYPES } from '../../data/services/events'

export const getEventsData = async () => {
  // const res = await getRequest(SERVICES_ENDPOINTS.EVENTS)
  // return res.data

  return { events: EVENTS, eventTypes: EVENT_TYPES }
}

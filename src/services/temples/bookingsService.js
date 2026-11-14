import { getRequest, postRequest } from '../../Helpers'
import { TEMPLES_ENDPOINTS } from '../../api'
import { BOOKING_SERVICES } from '../../data/temples/bookings'

export const getBookingServices = async () => {
  // const res = await getRequest(TEMPLES_ENDPOINTS.BOOKINGS)
  // return res.data

  return { services: BOOKING_SERVICES }
}

export const createBooking = async (bookingData) => {
  // BACKEND READY:
  // const res = await postRequest(TEMPLES_ENDPOINTS.BOOKING_CREATE, bookingData)
  // return res.data

  return { success: true, message: 'Booking created (static)', data: bookingData }
}

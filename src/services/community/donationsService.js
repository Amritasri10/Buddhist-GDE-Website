import { getRequest, postRequest } from '../../Helpers'
import { COMMUNITY_ENDPOINTS } from '../../api'
import { CAMPAIGNS } from '../../data/community/donations'

export const getDonationsData = async () => {
  // const res = await getRequest(COMMUNITY_ENDPOINTS.DONATIONS)
  // return res.data

  return { campaigns: CAMPAIGNS }
}

export const createDonation = async (donationData) => {
  // const res = await postRequest(COMMUNITY_ENDPOINTS.DONATIONS, donationData)
  // return res.data

  return { success: true, message: 'Donation submitted (static)', data: donationData }
}

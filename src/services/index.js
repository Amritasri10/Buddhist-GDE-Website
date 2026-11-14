// ─────────────────────────────────────────────
//  SERVICES BARREL EXPORT
//  Import any service from here:
//    import { getHomeData } from '../services'
// ─────────────────────────────────────────────

// Core
export { getHomeData }            from './core/homeService'
export { getAboutBuddhismData }   from './core/aboutService'

// Buddhism
export { getBuddhaData }          from './buddhism/buddhaService'
export { getKnowledgeData }       from './buddhism/knowledgeService'
export { getScripturesData }      from './buddhism/scripturesService'
export { getTraditionsData }      from './buddhism/traditionsService'
export { getHeritageData }        from './buddhism/heritageService'
export { getFestivalsData }       from './buddhism/festivalsService'
export { getRitualsData }         from './buddhism/ritualsService'

// Temples
export { getTemplesData }         from './temples/templesService'
export { getBhantesData }         from './temples/bhantesService'
export { getBookingServices, createBooking } from './temples/bookingsService'

// Education
export { getCoursesData }         from './education/coursesService'
export { getResearchData }        from './education/researchService'

// Commerce
export { getProductsData }        from './commerce/shopService'

// Services
export { getTravelData }          from './services/travelService'
export { getHotelsData }          from './services/hotelsService'
export { getHealthcareData }      from './services/healthcareService'
export { getRestaurantsData }     from './services/restaurantsService'
export { getEventsData }         from './services/eventsService'
export { getWeddingsData }        from './services/weddingsService'
export { getBusinessesData }      from './services/businessesService'

// Community
export { getCommunityData }       from './community/communityService'
export { getDonationsData, createDonation } from './community/donationsService'
export { getMembershipData }      from './community/membershipService'
export { getMediaData }           from './community/mediaService'

// Auth
export { getRoles, login, register, forgotPassword, logout } from './auth/authService'

// Legal
export { getFAQData }             from './legal/faqService'
export { submitContact }          from './legal/contactService'

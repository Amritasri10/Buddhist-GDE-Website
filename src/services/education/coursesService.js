import { getRequest } from '../../Helpers'
import { EDUCATION_ENDPOINTS } from '../../api'
import { COURSES_DATA, LEVELS, COURSE_CATEGORIES } from '../../data/education/courses'

export const getCoursesData = async () => {
  // const res = await getRequest(EDUCATION_ENDPOINTS.COURSES)
  // return res.data

  return { courses: COURSES_DATA, levels: LEVELS, categories: COURSE_CATEGORIES }
}

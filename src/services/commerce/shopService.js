import { getRequest } from '../../Helpers'
import { COMMERCE_ENDPOINTS } from '../../api'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/commerce/shop'

export const getProductsData = async () => {
  // const res = await getRequest(COMMERCE_ENDPOINTS.PRODUCTS)
  // return res.data

  return { products: PRODUCTS, categories: PRODUCT_CATEGORIES }
}

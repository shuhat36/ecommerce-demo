import { useQuery } from "react-query"
import { IProduct } from "../interfaces"
import { fetchProductData } from "../services/api/ProductListApi"

export const useProductData = () => {
    return useQuery<IProduct[]>("products", fetchProductData)
}
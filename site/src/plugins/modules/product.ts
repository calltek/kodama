import { $http } from '../../plugins'
import { Product, ProductFetchParams } from '../../types/Product'

export default {
    /**
     * Fetch products from API
     * @param params ShopFilter
     * @returns Promise
     */
    fetchStock(params: ProductFetchParams): Promise<{ data: Product[]; total: number }> {
        return new Promise((resolve, reject) => {
            $http
                .get('index.php?controller=AdminCalltekProducts&action=getStocks', { params })
                .then((res: any) => {
                    resolve({
                        data: res.data,
                        total: res.total,
                    })
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}

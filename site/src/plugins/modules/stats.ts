import { $http } from '../../plugins'
import { StatsParams, ShopResult } from '../../types/Stats'

export default {
    /**
     * Fetch stats from API
     * @param params StatsParams
     * @returns Promise
     */
    fetch(params?: StatsParams): Promise<ShopResult> {
        return new Promise((resolve, reject) => {
            $http
                .get(
                    'index.php?controller=AdminCalltekDashboard&action=getStats',
                    { params }
                )
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

import { $http } from '../../plugins'
import { GroupingProduct, Grouping } from '../../types/GroupingProduct'
import { KTableParams } from '@kodama/ui'

interface PendingLinesParams {
    date_from: string
    date_to: string
    shops: string
}

export default {
    /**
     * Fetch order lines from API
     * @param params ShopFilter
     * @returns Promise
     */
    fetch(params?: KTableParams): Promise<Grouping[]> {
        return new Promise((resolve, reject) => {
            $http
                .get('index.php?controller=AdminCalltekGrouping&action=getGroupings', { params })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    /**
     * Fetch order lines from API
     * @param params ShopFilter
     * @returns Promise
     */
    fetchPendingLines(params?: PendingLinesParams): Promise<GroupingProduct[]> {
        return new Promise((resolve, reject) => {
            $http
                .get('index.php?controller=AdminCalltekGrouping&action=getOrderDetails', { params })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    /**
     * Add new Order Group
     * @param name Grouping Name
     * @param details Array of Order details
     * @returns Promise
     */
    add(name, details, date): Promise<number> {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('ajax', 'true')
            formData.append('controller', 'AdminCalltekGrouping')
            formData.append('action', 'addGrouping')
            formData.append('name', name)

            formData.append('details', JSON.stringify(details))
            formData.append('date_from', date[0])
            formData.append('date_to', date[1])

            $http
                .post('index.php', formData)
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    /**
     * Remove grouping ID
     * @param id Grouping ID
     * @returns Promise<Boolean>
     */
    delete(id) {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('ajax', 'true')
            formData.append('controller', 'AdminCalltekGrouping')
            formData.append('action', 'deleteGrouping')
            formData.append('id', id)

            $http
                .post('index.php', formData)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    /**
     * Render specific document
     * @param id Grouping ID
     * @param type File type
     * @returns
     */
    doc(id, type): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('ajax', 'true')
            formData.append('controller', 'AdminCalltekGrouping')
            formData.append('action', type)
            formData.append('id', id)

            $http
                .post('index.php', formData)
                .then(() => {
                    resolve(true)
                })
                .catch((err) => {
                    console.error(err)
                    reject(false)
                })
        })
    },

    /**
     * Download specific document
     * @param id ID Grouping
     * @param slug File slug
     * @returns base64 file
     */
    download(id, slug): Promise<string> {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('ajax', 'true')
            formData.append('controller', 'AdminCalltekGrouping')
            formData.append('action', 'docDownload')
            formData.append('id', id)
            formData.append('slug', slug)

            $http
                .post('index.php', formData)
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}

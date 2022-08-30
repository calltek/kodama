import { $grouping } from '../../../plugins'
import { notify, KTableParams } from '@kodama/ui'
import { loading, data } from './_variables'

// List
export const list = (params?: KTableParams) => {
    loading.listing = true

    $grouping
        .fetch(params)
        .then((groupings) => {
            data.value = groupings
        })
        .catch(() => {
            notify.error('No se encontraron resultados')
        })
        .finally(() => {
            loading.listing = false
        })
}

// Delete grouping
export const removeGrouping = (id: number) => {
    loading.deleting = true

    $grouping
        .delete(id)
        .then(() => {
            notify.success('Agrupación eliminada correctamente')
            list()
        })
        .catch(() => {
            notify.error('No se pudo eliminar la agrupación')
        })
        .finally(() => {
            loading.deleting = false
        })
}

// Regenerate docs
export const renderDocs = (id_grouping: number) => {
    const docs = ['docGeneralGrouping', 'docImageTech', 'docClientDetail', 'docProductDetail', 'docProductSizeDetail']

    notify.success({
        message: 'Se están generando los documentos de la agrupación. Es posible que el proceso tarde unos minutos.',
        duration: 10000,
    })

    docs.forEach((doc) => {
        $grouping.doc(id_grouping, doc)
    })
}

// Download document
export const downloadDoc = (id_grouping: number, slug: string, filename: string) => {
    loading.exporting = true

    $grouping
        .download(id_grouping, slug)
        .then((pdf) => {
            const link = document.createElement('a')
            link.href = pdf
            link.setAttribute('download', filename)
            document.body.appendChild(link)
            link.click()

            if (link.parentNode) {
                link.parentNode.removeChild(link)
            }
        })
        .catch((err) => {
            console.error(err)
            notify.error('Ocurrio un error al descargar el documento. Es posible que aún no se haya generado')
        })
        .finally(() => {
            loading.exporting = false
        })
}

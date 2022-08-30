import { notify } from '@kodama/ui'
import { $grouping } from '@/plugins'

export default {
    renderDocs(id_grouping: number) {
        const docs = [
            'docGeneralGrouping',
            'docImageTech',
            'docClientDetail',
            'docProductDetail',
            'docProductSizeDetail',
        ]

        notify.success({
            message:
                'Se están generando los documentos de la agrupación. Es posible que el proceso tarde unos minutos.',
            duration: 10000,
        })

        docs.forEach((doc) => {
            $grouping.doc(id_grouping, doc)
        })
    },
    downloadDoc(id_grouping: number, slug: string, filename: string) {
        return $grouping
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
    },
}

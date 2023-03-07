import cogoToast from 'cogo-toast'

type KodamaToastPosition =
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'

type KodamaToastOptions = {
    title?: string
    position?: KodamaToastPosition
}

export default {
    info(message: string, options?: KodamaToastOptions) {
        return cogoToast.info(message, {
            heading: options?.title,
            position: options?.position
        })
    },
    success(message: string, options?: KodamaToastOptions) {
        return cogoToast.success(message, {
            heading: options?.title,
            position: options?.position
        })
    },
    danger(message: string, options?: KodamaToastOptions) {
        return cogoToast.error(message, {
            heading: options?.title,
            position: options?.position
        })
    },
    warning(message: string, options?: KodamaToastOptions) {
        return cogoToast.warn(message, {
            heading: options?.title,
            position: options?.position
        })
    },
    loading(message: string, options?: KodamaToastOptions) {
        return cogoToast.loading(message, {
            heading: options?.title,
            position: options?.position
        })
    }
}

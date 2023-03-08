import { toast, ToastOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

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
    info(message: string, options?: ToastOptions) {
        return toast.info(message, options)
    },
    success(message: string, options?: KodamaToastOptions) {
        return toast.success(message, options)
    },
    error(message: string, options?: KodamaToastOptions) {
        return toast.error(message, options)
    },
    warning(message: string, options?: KodamaToastOptions) {
        return toast.warn(message, options)
    },
    loading(message: string, options?: KodamaToastOptions) {
        return toast.loading(message, options)
    }
}

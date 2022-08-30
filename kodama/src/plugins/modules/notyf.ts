import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const notyf = new Notyf({
    duration: 5000,
    dismissible: true,
    position: {
        x: 'center',
        y: 'bottom'
    }
})

export default notyf

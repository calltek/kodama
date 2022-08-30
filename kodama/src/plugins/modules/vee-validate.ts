import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { setLocale } from 'yup'
import es from '@vee-validate/i18n/dist/locale/es.json'

setLocale({
    // use constant translation keys for messages without values
    mixed: {
        default: 'Valor incorrecto',
        required: 'El campo ${path} es obligatorio'
    },
    string: {
        email: 'Introduce un email válido',
        min: '${path} debe tener al menos ${min} caracteres'
    },
    // use functions to generate an error object that includes the value from the schema
    number: {
        min: '${path} debe ser igual o superior a ${min}',
        max: '${path} debe ser igual o inferior a ${max}'
    }
})

export default function initVeeValidate() {
    // Updating default vee-validate configuration
    configure({
        validateOnBlur: true,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: true,
        generateMessage: localize({
            es
        })
    })
}

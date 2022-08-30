import { computed } from 'vue'
import { useRouter } from '@kodama/ui'
import { useShop } from '@/store'
import { $grouping } from '@/plugins'
import { dates, name, step, lines, loading } from './_variables'
import docs from '../list/_docs'
import { notify } from '@kodama/ui'

export const validateStep1 = computed(() => {
    if (name.value) return true
    return false
})

export const validateStep2 = computed(() => {
    if (validateStep1.value && dates.value !== null && dates.value[0] && dates.value[1]) return true
    return false
})

export const validateStep3 = computed(() => {
    const shop = useShop()
    const selectedShops = shop.selected

    if (validateStep1.value && validateStep2.value && selectedShops.length > 0) return true
    return false
})

export const validateStep4 = computed(() => {
    if (validateStep1.value && validateStep2.value && validateStep3.value && lines.value.length > 0) return true
    return false
})

export function increaseStep() {
    if (step.value < 4) {
        const nextStep = step.value + 1
        setStep(nextStep)
    }
}

export function decreaseStep() {
    if (step.value > 1) {
        const nextStep = step.value - 1
        setStep(nextStep)
    }
}

export function setStep(value: number) {
    if (step.value >= 1 && step.value <= 4) {
        if (!validateStep1.value) return
        if (value > 2 && !validateStep2.value) return
        if (value > 3 && !validateStep3.value) return

        step.value = value
    }
}

export const addGrouping = () => {
    loading.value = true
    $grouping
        .add(name.value, lines.value, dates)
        .then((id_grouping) => {
            const $router = useRouter()

            loading.value = false
            name.value = ''
            dates.value = null
            lines.value = []
            notify.success('La agrupación se ha creado correctamente')
            $router.push({ name: 'groupingList' })
            docs.renderDocs(id_grouping)
        })
        .catch(() => {
            notify.error('No se pudo crear la agrupación. Contacta con el sysadmin.')
        })
        .finally(() => {
            loading.value = false
        })
}

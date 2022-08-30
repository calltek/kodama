import { computed, ref, Ref, defineProps } from 'vue'
import gTableProps from '../k-table.props'

const Props = defineProps(gTableProps)

export default function (props: typeof Props): any {
    const rowsOpen: Ref<number[]> = ref([])

    const isRowOpen = computed(() => {
        return props.data.map((r, i) => {
            return rowsOpen.value.includes(i)
        })
    })

    const toggleRow = (index: number) => {
        if (rowsOpen.value.includes(index)) {
            rowsOpen.value = rowsOpen.value.filter((r) => r !== index)
        } else {
            rowsOpen.value.push(index)
        }
    }

    return {
        isRowOpen,
        toggleRow
    }
}

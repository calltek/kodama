import { computed, ref, Ref } from 'vue'
import { KTableProps } from '../k-table.types'

export default function (props: KTableProps): any {
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

import { computed } from 'vue'
import { KTableProps } from '../k-table.types'

export default function (props: KTableProps): any {
    const toggleCheck = (index: number) => {
        if (props.selected) {
            const key = props.index || 'id'

            const findIndex = props.selected.findIndex(
                (s) => s[key] === props.data[index][key]
            )

            if (findIndex > -1) {
                props.selected.splice(findIndex, 1)
            } else {
                props.selected.push(props.data[index])
            }
        }
    }

    const isRowChecked = computed(() => {
        const key = props.index || 'id'

        return props.data.map((data) => {
            if (props.selected) {
                const findIndex = props.selected.findIndex(
                    (s) => s[key] === data[key]
                )

                if (findIndex > -1) {
                    return true
                }
            }

            return false
        })
    })

    const isRowDisabled = computed(() => {
        const key = props.index || 'id'

        return props.data.map((data) => {
            if (props.disabledRows) {
                const isDisabled = props.disabledRows.includes(data[key])
                if (isDisabled) return true
            }

            return false
        })
    })

    const toggleGlobalCheck = () => {
        if (props.selected) {
            const checked = props.selected
            const allPosibleData = props.data.filter((c) => {
                const key = props.index || 'id'
                const isDisabled = props.disabledRows.includes(c[key])

                return !isDisabled
            })

            if (checked.length >= allPosibleData.length) {
                props.selected.splice(0, props.selected.length)
            } else {
                props.selected.splice(0, props.selected.length)

                for (let i = 0; i < props.data.length; i++) {
                    const isDisabled = isRowDisabled.value[i]
                    if (!isDisabled) props.selected.push(props.data[i])
                }
            }
        }
    }

    const uncheckDisabledRows = () => {
        if (props.selected) {
            for (let i = 0; i < props.selected.length; i++) {
                const selected = props.selected[i]

                const findIndex = props.disabledRows.findIndex(
                    (d) => d === selected[props.index || 'id']
                )

                if (findIndex > -1) {
                    props.selected.splice(i, 1)
                }
            }
        }
    }

    const populateChecks = () => {
        if (props.selected) {
            const key = props.index || 'id'

            for (let i = 0; i < props.selected.length; i++) {
                const selected = props.selected[i]

                const findIndex = props.data.findIndex(
                    (d) => d[key] === selected[i][key]
                )

                if (findIndex === -1) {
                    props.selected.splice(findIndex, 1)
                }
            }
        }

        // if (props.selected !== undefined) {
        //     if (props.selected.length > props.data.length) {
        //         const diff = props.selected.length - props.data.length

        //         props.selected.splice(0, -diff)
        //     } else if (props.selected.length < props.data.length) {
        //         const diff = props.data.length - props.selected.length

        //         for (let i = 0; i < diff; i++) {
        //             props.selected.push(false)
        //         }
        //     }
        // }
    }

    const isCheckedAll = computed(() => {
        if (props.selected) {
            const checked = props.selected
            const allPosibleData = props.data.filter((c) => {
                const key = props.index || 'id'
                const isDisabled = props.disabledRows.includes(c[key])

                return !isDisabled
            })

            if (checked.length >= allPosibleData.length) {
                return true
            }
        }

        return false
    })

    return {
        toggleCheck,
        isRowChecked,
        isRowDisabled,
        toggleGlobalCheck,
        populateChecks,
        isCheckedAll,
        uncheckDisabledRows
    }
}

import { computed, defineProps } from 'vue'
import Column from '../k-table.props'

const Props = defineProps(Column)

export default function (props: typeof Props): any {
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

    const toggleGlobalCheck = () => {
        if (props.selected) {
            const checked = props.selected

            if (checked.length >= props.data.length) {
                props.selected.splice(0, props.selected.length)
            } else {
                props.selected.splice(0, props.selected.length)

                for (let i = 0; i < props.data.length; i++) {
                    props.selected.push(props.data[i])
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
            if (checked.length >= props.data.length) {
                return true
            }
        }

        return false
    })

    return {
        toggleCheck,
        isRowChecked,
        toggleGlobalCheck,
        populateChecks,
        isCheckedAll
    }
}

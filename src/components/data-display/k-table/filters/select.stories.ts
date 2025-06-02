import KTableFilterSelect from './select.vue'
import { ref } from 'vue'
import type { StoryFn } from '@storybook/vue3'

export default {
    title: 'KTable/Filtros/Select',
    component: KTableFilterSelect
}

const Template = (args) => ({
    components: { KTableFilterSelect },
    setup() {
        const selectedValue = ref(null)

        const handleFilter = (val) => {
            selectedValue.value = val
            console.log('💡 Evento @filter emitido con:', val)
        }

        return {
            args,
            selectedValue,
            handleFilter
        }
    },
    template: `
  <div class="p-6 w-80 bg-gray-100 text-gray-500 shadow rounded">
    <k-table-filter-select
      v-bind="args"
      :value="selectedValue"
      @filter="handleFilter"
    />
      Seleccionar ...

    <pre class="mt-4 bg-gray-400 text-white p-2 text-xs rounded">Valor activo: {{ JSON.stringify(selectedValue, null, 2) }}</pre>
  </div>
`
})

export const Default: StoryFn = Template.bind({})
Default.args = {
    modal: false,
    options: [
        { value: 'pending', title: 'Pendiente', icon: 'clock' },
        { value: 'approved', title: 'Aprobado', icon: 'check' },
        { value: 'rejected', title: 'Rechazado', icon: 'x' }
    ]
}

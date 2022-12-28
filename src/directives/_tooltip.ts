import { App } from 'vue'

const tooltipDirective = (app: App) => {
    app.directive('tooltip', {
        mounted(el, binding) {
            init(el, binding)
        },
        updated(el, binding) {
            init(el, binding)
        }
    })
}

function init(el: any, binding: any) {
    const position = binding.arg || 'top'
    const tooltipText = binding.value || ''

    if (tooltipText) {
        el.setAttribute('position', position)
        el.setAttribute('tooltip', tooltipText)
    }
}

export default tooltipDirective

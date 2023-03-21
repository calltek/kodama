import { App } from 'vue'

// Layouts
import KLayout from '../layouts/main/partials/layout/layout.vue'

// General
import KButton from '../components/general/k-button/k-button.vue'
import KIcon from '../components/general/k-icon/k-icon.vue'
import KTitle from '../components/general/k-title/k-title.vue'

// Data entry
import KInput from '../components/data-entry/k-input/k-input.vue'
import KDatepicker from '../components/data-entry/k-datepicker/k-datepicker.vue'
import KSwitch from '../components/data-entry/k-switch/k-switch.vue'
import KTextarea from '../components/data-entry/k-textarea/k-textarea.vue'
import KCheckbox from '../components/data-entry/k-checkbox/k-checkbox.vue'
import KDropzone from '../components/data-entry/k-dropzone/k-dropzone.vue'
import KSelect from '../components/data-entry/k-select/k-select.vue'
import KSelectOption from '../components/data-entry/k-select/k-select-option.vue'

// Data Display Components
import KAvatar from '../components/data-display/k-avatar/k-avatar.vue'
import KBadge from '../components/data-display/k-badge/k-badge.vue'
import KCount from '../components/data-display/k-count/k-count.vue'
import KImage from '../components/data-display/k-image/k-image.vue'
import KLogo from '../components/data-display/k-logo/k-logo.vue'
import KTable from '../components/data-display/k-table/k-table.vue'
import KDate from '../components/data-display/k-date/k-date.vue'
import KCard from '../components/data-display/k-card/k-card.vue'
import KTooltip from '../components/data-display/k-tooltip/k-tooltip.vue'
import KDrawer from '../components/data-display/k-drawer/k-drawer.vue'
import KAccordion from '../components/data-display/k-accordion/k-accordion.vue'
import KAccordionItem from '../components/data-display/k-accordion/k-accordion-item.vue'

// Feedback
import KModal from '../components/feedback/k-modal/k-modal.vue'
import KConfirm from '../components/feedback/k-confirm/k-confirm.vue'
import KEmpty from '../components/feedback/k-empty/k-empty.vue'
import KLoading from '../components/feedback/k-loading/k-loading.vue'
import KHelp from '../components/feedback/k-help/k-help.vue'
import KAlert from '../components/feedback/k-alert/k-alert.vue'
import KSkeleton from '../components/feedback/k-skeleton/k-skeleton.vue'

// Navigation
import KDropdown from '../components/navigation/k-dropdown/k-dropdown.vue'
import KDropdownItem from '../components/navigation/k-dropdown/k-dropdown-item.vue'
import KDropdownDivider from '../components/navigation/k-dropdown/k-dropdown-divider.vue'

// Other
import KBubbles from '../components/miscelanea/k-bubbles/k-bubbles.vue'

// Vendor
import 'flowbite'

export default (
    app: App,
    frontendComponents?: Record<string, { [key: string]: any }>
): void => {
    // Layouts
    app.component('KLayout', KLayout)

    // General
    app.component('KButton', KButton)
    app.component('KIcon', KIcon)
    app.component('KTitle', KTitle)

    // Data entry
    app.component('KInput', KInput)
    app.component('KDatepicker', KDatepicker)
    app.component('KSwitch', KSwitch)
    app.component('KTextarea', KTextarea)
    app.component('KCheckbox', KCheckbox)
    app.component('KDropzone', KDropzone)
    app.component('KSelect', KSelect)
    app.component('KSelectOption', KSelectOption)

    // Data Display Components
    app.component('KAvatar', KAvatar)
    app.component('KBadge', KBadge)
    app.component('KCount', KCount)
    app.component('KImage', KImage)
    app.component('KLogo', KLogo)
    app.component('KTable', KTable)
    app.component('KDate', KDate)
    app.component('KCard', KCard)
    app.component('KTooltip', KTooltip)
    app.component('KDrawer', KDrawer)
    app.component('KAccordion', KAccordion)
    app.component('KAccordionItem', KAccordionItem)

    // Feedback
    app.component('KModal', KModal)
    app.component('KEmpty', KEmpty)
    app.component('KConfirm', KConfirm)
    app.component('KLoading', KLoading)
    app.component('KHelp', KHelp)
    app.component('KAlert', KAlert)
    app.component('KSkeleton', KSkeleton)

    // Navigation
    app.component('KDropdown', KDropdown)
    app.component('KDropdownItem', KDropdownItem)
    app.component('KDropdownDivider', KDropdownDivider)

    // Other
    app.component('KBubbles', KBubbles)

    // Custom components
    if (frontendComponents) {
        Object.entries(frontendComponents).forEach(([path, definition]) => {
            const key = path
                .split('/')
                .pop()
                ?.replace(/\.\w+$/, '')
            const component = definition.default
            const name = component.name || key

            if (name) {
                app.component(name, component)
            } else {
                console.error(
                    `No se ha podido cargar el componente ${key} ya que no dispone de nombre`
                )
            }
        })
    }
}

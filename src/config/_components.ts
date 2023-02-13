import { App } from 'vue'

// Layouts
import KLayout from '../layouts/main/partials/layout.vue'

// General
import KButton from '../components/general/k-button/k-button.vue'
import KIcon from '../components/general/k-icon/k-icon.vue'
import KTitle from '../components/general/k-title/k-title.vue'

// Data entry
import KInput from '../components/data-entry/k-input/k-input.vue'
import KDatepicker from '../components/data-entry/k-datepicker/k-datepicker.vue'
import KSwitch from '../components/data-entry/k-switch/k-switch.vue'
import KTextarea from '../components/data-entry/k-textarea/k-textarea.vue'

// Data Display Components
import KAvatar from '../components/data-display/k-avatar/k-avatar.vue'
import KBadge from '../components/data-display/k-badge/k-badge.vue'
import KCount from '../components/data-display/k-count/k-count.vue'
import KImage from '../components/data-display/k-image/k-image.vue'
import KLogo from '../components/data-display/k-logo/k-logo.vue'
import KTable from '../components/data-display/k-table/k-table.vue'
import KDate from '../components/data-display/k-date/k-date.vue'

// Feedback
import KModal from '../components/feedback/k-modal/k-modal.vue'
import KConfirm from '../components/feedback/k-confirm/k-confirm.vue'
import KEmpty from '../components/feedback/k-empty/k-empty.vue'
import KLoading from '../components/feedback/k-loading/k-loading.vue'
import KHelp from '../components/feedback/k-help/k-help.vue'

// Navigation
import KDropdownMenu from '../components/navigation/k-dropdown/k-dropdown-menu.vue'
import KDropdownSeparator from '../components/navigation/k-dropdown/k-dropdown-separator.vue'
import KDropdownSubmenu from '../components/navigation/k-dropdown/k-dropdown-submenu.vue'
import KDropdownTitle from '../components/navigation/k-dropdown/k-dropdown-title.vue'
import KDropdown from '../components/navigation/k-dropdown/k-dropdown.vue'

// Other
import KBubbles from '../components/miscelanea/k-bubbles/k-bubbles.vue'

// Vendor
import Popper from 'vue3-popper'

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

    // Data Display Components
    app.component('KAvatar', KAvatar)
    app.component('KBadge', KBadge)
    app.component('KCount', KCount)
    app.component('KImage', KImage)
    app.component('KLogo', KLogo)
    app.component('KTable', KTable)
    app.component('KDate', KDate)

    // Feedback
    app.component('KModal', KModal)
    app.component('KEmpty', KEmpty)
    app.component('KConfirm', KConfirm)
    app.component('KLoading', KLoading)
    app.component('KHelp', KHelp)

    // Navigation
    app.component('KDropdown', KDropdown)
    app.component('KDropdownMenu', KDropdownMenu)
    app.component('KDropdownSeparator', KDropdownSeparator)
    app.component('KDropdownSubmenu', KDropdownSubmenu)
    app.component('KDropdownTitle', KDropdownTitle)

    // Other
    app.component('KBubbles', KBubbles)

    // Vendor
    app.component('Popper', Popper)

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

import { App } from 'vue'

// Layouts
import KLayout from '../layouts/main/partials/layout.vue'

// Data Display Components
import KAvatar from '../components/data-display/k-avatar/k-avatar.vue'
import KBadge from '../components/data-display/k-badge/k-badge.vue'
import KCount from '../components/data-display/k-count/k-count.vue'
import KEmpty from '../components/data-display/k-empty/k-empty.vue'
import KHelp from '../components/data-display/k-help/k-help.vue'
import KIcon from '../components/data-display/k-icon/k-icon.vue'
import KImage from '../components/data-display/k-image/k-image.vue'
import KLoading from '../components/data-display/k-loading/k-loading.vue'
import KLogo from '../components/data-display/k-logo/k-logo.vue'
import KTable from '../components/data-display/k-table/k-table.vue'
import KTitle from '../components/data-display/k-title/k-title.vue'
import KDate from '../components/data-display/k-date/k-date.vue'

// Miscelanea Components
import KBubbles from '../components/miscelanea/k-bubbles/k-bubbles.vue'

// User Action Components
import KButton from '../components/user-actions/k-button/k-button.vue'
import KConfirm from '../components/user-actions/k-confirm/k-confirm.vue'
import KDatepicker from '../components/user-actions/k-datepicker/k-datepicker.vue'
import KDropdownMenu from '../components/user-actions/k-dropdown/k-dropdown-menu.vue'
import KDropdownSeparator from '../components/user-actions/k-dropdown/k-dropdown-separator.vue'
import KDropdownSubmenu from '../components/user-actions/k-dropdown/k-dropdown-submenu.vue'
import KDropdownTitle from '../components/user-actions/k-dropdown/k-dropdown-title.vue'
import KDropdown from '../components/user-actions/k-dropdown/k-dropdown.vue'
import KInput from '../components/user-actions/k-input/k-input.vue'
import KSwitch from '../components/user-actions/k-switch/k-switch.vue'

// Feedback
import KModal from '../components/feedback/k-modal/k-modal.vue'

export default (
    app: App,
    frontendComponents?: Record<string, { [key: string]: any }>
): void => {
    // Layouts
    app.component('KLayout', KLayout)

    // Data Display Components
    app.component('KAvatar', KAvatar)
    app.component('KBadge', KBadge)
    app.component('KCount', KCount)
    app.component('KEmpty', KEmpty)
    app.component('KHelp', KHelp)
    app.component('KIcon', KIcon)
    app.component('KImage', KImage)
    app.component('KLoading', KLoading)
    app.component('KLogo', KLogo)
    app.component('KTable', KTable)
    app.component('KTitle', KTitle)
    app.component('KDate', KDate)

    // Miscelanea Components
    app.component('KBubbles', KBubbles)

    // User Action Components
    app.component('KButton', KButton)
    app.component('KConfirm', KConfirm)
    app.component('KDatepicker', KDatepicker)
    app.component('KDropdown', KDropdown)
    app.component('KDropdownMenu', KDropdownMenu)
    app.component('KDropdownSeparator', KDropdownSeparator)
    app.component('KDropdownSubmenu', KDropdownSubmenu)
    app.component('KDropdownTitle', KDropdownTitle)
    app.component('KInput', KInput)
    app.component('KSwitch', KSwitch)

    // Feedback
    app.component('KModal', KModal)

    // Vendor
    // app.component('Loading', Loading)

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

import { App } from 'vue'

import tooltip from './_tooltip'

// Register directives
const directives = (app: App) => {
    tooltip(app)
}

export default directives

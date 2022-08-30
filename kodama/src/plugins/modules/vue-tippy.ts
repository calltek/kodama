import { App } from 'vue'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

export default function initVueTippy(app: App<Element>) {
    app.use(VueTippy, { defaultProps: { allowHTML: true } })
    // app.component('Tippy', TippyComponent)
}

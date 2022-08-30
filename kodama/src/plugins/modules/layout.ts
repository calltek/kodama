import objectPath from 'object-path'
import { useBody } from '../../store'
import { config } from '../../helpers/config'

class LayoutService {
    /**
     * @description initialize default layout
     */
    public static init(): void {
        LayoutService.initLayout()
        LayoutService.initHeader()
        // LayoutService.initToolbar()
        LayoutService.initAside()
        LayoutService.initFooter()
    }

    /**
     * @description init layout
     */
    public static initLayout(): void {
        const body = useBody()
        body.addAttribute('id', 'kt_body')

        if (objectPath.get(config.value, 'loader.display')) {
            body.addClass('page-loading-enabled')
            body.addClass('page-loading')
        }
    }

    /**
     * @description init header
     */
    public static initHeader(): void {
        const body = useBody()

        if (objectPath.get(config.value, 'header.fixed.desktop')) {
            body.addClass('header-fixed')
        }

        if (objectPath.get(config.value, 'header.fixed.tabletAndMobile')) {
            body.addClass('header-tablet-and-mobile-fixed')
        }
    }

    /**
     * @description init toolbar
     */
    // public static initToolbar(): void {
    //     if (!objectPath.get(config.value, 'toolbar.display')) {
    //         return
    //     }

    //     const body = useBody()

    //     body.addClass('toolbar-enabled')

    //     if (objectPath.get(config.value, 'toolbar.fixed')) {
    //         body.addClass('toolbar-fixed')
    //     }

    //     body.addClass('toolbar-tablet-and-mobile-fixed')
    // }

    /**
     * @description init aside
     */
    public static initAside(): void {
        if (!objectPath.get(config.value, 'aside.display')) {
            return
        }

        const body = useBody()

        // Enable Aside
        body.addClass('aside-enabled')

        // Minimized
        if (
            objectPath.get(config.value, 'aside.minimized') &&
            objectPath.get(config.value, 'aside.toggle')
        ) {
            body.addAttribute('data-kt-aside-minimize', 'on')
        }

        if (objectPath.get(config.value, 'aside.fixed')) {
            // Fixed Aside
            body.addClass('aside-fixed')
        }

        // Default minimized
        if (objectPath.get(config.value, 'aside.minimized')) {
            body.addAttribute('data-kt-aside-minimize', 'on')
        }
    }

    /**
     * @description init footer
     */
    public static initFooter(): void {
        const body = useBody()

        // Fixed header
        if (objectPath.get(config.value, 'footer.width') === 'fixed') {
            body.addClass('footer-fixed')
        }
    }
}

export default LayoutService

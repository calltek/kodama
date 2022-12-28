import { defineStore } from 'pinia'

const defaultState = {
    classes: {}
}

export interface StoreInfo {
    classes: {
        header?: Array<string>
        headerContainer?: Array<string>
        headerMobile?: Array<string>
        headerMenu?: Array<string>
        aside?: Array<string>
        asideMenu?: Array<string>
        asideToggle?: Array<string>
        toolbar?: Array<string>
        toolbarContainer?: Array<string>
        content?: Array<string>
        contentContainer?: Array<string>
        footerContainer?: Array<string>
        sidebar?: Array<string>
        pageTitle?: Array<string>
    }
}

export default defineStore('body', {
    state: () => defaultState as StoreInfo,
    getters: {
        getClass: (state) => (position?: string) => {
            if (typeof position !== 'undefined') {
                const classes: Record<string, Array<string>> = state.classes
                return classes[position]
            }

            return state.classes
        }
    },
    actions: {
        addClass(className: string) {
            document.body.classList.add(className)
        },
        removeClass(className: string) {
            document.body.classList.remove(className)
        },
        addAttribute(attribute: string, value: string) {
            document.body.setAttribute(attribute, value)
        },
        removeAttribute(attribute: string) {
            document.body.removeAttribute(attribute)
        }
    }
})

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export function createPageLoadingGuard(router) {
    NProgress.configure({showSpinner: false, trickleSpeed: 800})
    router.beforeEach(() => {
        NProgress.start()
    })

    router.afterEach(() => {
        setTimeout(() => {
            NProgress.done()
        }, 100)
    })
}

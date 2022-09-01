import {createRouter, createWebHashHistory} from 'vue-router'
import {basicRoutes,asyncRoutes} from './routes'
import {setupRouterGuard} from "@/router/guard";


const router = createRouter({
    // @ts-ignore
    routes: [...basicRoutes,...asyncRoutes],
    history: createWebHashHistory('/'),
    scrollBehavior: () => ({top: 0, left: 0}),
})

function setupRouter(app: any) {
    app.use(router)
    setupRouterGuard(router)
}

export {setupRouter, router}

import {defineStore} from "pinia";
import {asyncRoutes, basicRoutes} from "@/router/routes";

function hasPermission(route, role) {
    const routeRole = route.meta?.role ? route.meta.role : []

    // 如果没有设置权限直接返回true
    if (!route.meta?.requireAuth || !routeRole.length) return true

    if (!role.length || !routeRole.length) return false

    return role.some((item) => routeRole.includes(item))
}

function filterAsyncRoutes(routes: Array<any> = [], role) {
    const res = []
    routes.forEach((route) => {
        if (hasPermission(route, role)) {
            const curRoute = {
                ...route,
                children: []
            }
            if (route.children && route.children.length) {
                curRoute.children = filterAsyncRoutes(route.children, role)
            } else {
                Reflect.deleteProperty(curRoute, 'children')
            }
            res.push(curRoute)
        }
    })
    return res
}

export const usePermissionStore = defineStore('premission', {
    state() {
        return {
            accessRoutes: []
        }
    },
    getters: {
        routes() {
            return basicRoutes.concat(this.accessRoutes)
        },
        menuList() {
            return this.routes.filter((route) => route?.name && !route.isHidden)
        }
    },
    actions: {
        generateRoutes(role: Array<string> = []) {
            const accessRoutes = filterAsyncRoutes(asyncRoutes,role)
            accessRoutes.sort((a,b) => a.meta.sort - b.meta.sort)
            this.accessRoutes = accessRoutes
            return accessRoutes
        }
    }
})
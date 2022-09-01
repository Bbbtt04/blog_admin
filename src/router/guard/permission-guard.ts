import {useUserStore} from "@/store/modules/user";
import {usePermissionStore} from "@/store/modules/permission";
import {ElMessage} from 'element-plus'
import {NOT_FOUND_ROUTE} from "@/router/routes";

const WHITE_LIST = ['/login', '/register']

export function createPermissionGuard(router) {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    router.beforeEach(async (to) => {
        const token = localStorage.getItem('token')
        // 没用token
        if (!token) {
            if (WHITE_LIST.includes(to.path)) return true
            return {path: 'login', query: {...to.query, redirect: to.path}}
        }
        //有token
        if (to.path === '/login') return {path: '/', replace: true}
        // 获取用户信息
        if (!userStore.userInfo) {
            await userStore.getUserInfo().catch((error) => {
                ElMessage.error("获取用户信息失败")
            })
        }
        //获取用户路由表
        const accessRoutes = permissionStore.generateRoutes(userStore.role)
        accessRoutes.forEach((route) => {
            !router.hasRoute(route.name) && router.addRoute(route)
        })
        router.addRoute(NOT_FOUND_ROUTE)
        return true
    })
}
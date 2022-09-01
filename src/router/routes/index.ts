const Layout = () => import('@/layout/index.vue')

const basicRoutes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {title: '登录页'},
        isHidden: true,
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/views/register/index.vue'),
        meta: {title: '注册页'},
        isHidden: true,
    },

]

export const NOT_FOUND_ROUTE = {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    isHidden: true,
}

const modules = import.meta.globEager('@/views/**/route.ts')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
    // @ts-ignore
    asyncRoutes.push(modules[key].default)
})
export {basicRoutes, asyncRoutes}
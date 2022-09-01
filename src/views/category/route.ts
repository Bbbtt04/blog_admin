const Layout = () => import('@/layout/index.vue')

export default {
    name: 'category',
    path: '/category',
    component: Layout,
    meta: {
        title: "分类管理",
        sort:3,
        icon: 'Finished'
    },
    children: [
        {
            name: 'category',
            path: '/category',
            component: () => import('./index.vue'),
            meta: {
                title: '标签管理',
            },
        },
    ],
}

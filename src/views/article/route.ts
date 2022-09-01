const Layout = () => import('@/layout/index.vue')

export default {
    name: 'article',
    path: '/content',
    component: Layout,
    meta: {
        icon: 'House',
        title: '文章管理'
    },
    children: [
        {
            name: 'list', path: '/content/list', component: () => import('./AriticleList.vue'),
            meta: {
                title: '文章列表'
            }
        },
        {
            name: 'add', path: '/content/add', component: () => import('./ArticleEdit.vue'),
            meta: {
                title: '新增文章'
            }
        }
    ]
}
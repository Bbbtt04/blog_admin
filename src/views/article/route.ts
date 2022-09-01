const Layout = () => import('@/layout/index.vue')

export default {
    name: 'article',
    path: '/content',
    component: Layout,
    meta: {
        icon: 'Document',
        title: '文章管理',
        sort:2
    },
    children: [
        {
            name: 'list', path: '/content/list', component: () => import('./ArticleList.vue'),
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
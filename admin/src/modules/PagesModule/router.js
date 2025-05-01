const routes = [
  {
    path: '/pages',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'PagesIndex',
        component: () => import('./pages/PagesIndex.vue')
      },
      {
        path: 'create',
        name: 'PagesCreate',
        component: () => import('./pages/PagesCreate.vue')
      },
      {
        path: 'edit/:id',
        name: 'PagesEdit',
        component: () => import('./pages/PagesEdit.vue')
      },
      {
        path: ':id',
        name: 'PagesShow',
        component: () => import('./pages/PagesShow.vue')
      },
    ]
  }
]

export default routes

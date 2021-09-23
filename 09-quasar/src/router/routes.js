
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Index') },
      { path: 'typography', name:'typography', component: () => import('pages/Typography') },
      { path: 'flex', name:'flex', component: () => import('pages/Flex') },
      { path: 'dialog', name:'dialog', component: () => import('pages/Dialog') },
      { path: 'forms', name:'forms', component: () => import('pages/Forms') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [<% for (const page of pages) { %>
      { path: '<%= page.url %>', component: () => import('pages/<%= page.name %>.vue') },<% } %>
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/route', component: () => import('pages/Route.vue') },
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

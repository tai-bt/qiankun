import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../views/brand.vue')
  },
  {
    path: '/app1/:pathMatch(.*)*',
    component: () => import('../views/children.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/partent'),
  routes,
});

export default router;
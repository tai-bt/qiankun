import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/app1/home',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/app1/about',
    name: 'About',
    component: () => import('../views/about.vue'),
  },
  // 可以添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
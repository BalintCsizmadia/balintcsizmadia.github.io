import { createRouter, createWebHashHistory } from 'vue-router';
import StackView from '../views/StackView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stack',
      component: StackView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
});

export default router;

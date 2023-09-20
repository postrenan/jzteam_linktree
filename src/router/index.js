import { createRouter, createWebHistory } from 'vue-router'
import LinkPage from '../views/LinkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LinkPage
    },

  ]
})

export default router

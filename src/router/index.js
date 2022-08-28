import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import videoshow from '../views/videoshow.vue'
import frontPage from '../views/frontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/videoshow',
      name: 'videoshow',
      component: videoshow
    },
    {
      path: '/frontPage',
      name: 'frontPage',
      component: frontPage
    }
   
  ]
})

export default router

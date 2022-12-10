import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConverterView from '../views/ConverterView.vue'
import ResumeView from '../views/ResumeView.vue'
import ResumeValidView from '../views/ResumeValidView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  ,
  {
    path: '/converter',
    name: 'converter',
    component: ConverterView
  }
  ,
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  }
  ,
  {
    path: '/resumeValid',
    name: 'reresumeValid',
    component: ResumeValidView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

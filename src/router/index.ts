import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import OptionApi from '../views/OptionApi.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'option',
    component: OptionApi
  },
  {
    path: '/composition',
    name: 'composition',
    component: () => import('../views/CompositionApi.vue')
  },
  {
    path: '/scriptSetup',
    name: 'scriptSetup',
    component: () => import('../views/ScriptSetup.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

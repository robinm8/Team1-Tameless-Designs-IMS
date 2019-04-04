import Dashboard from './components/Dashboard.vue'
import Login from './components/auth/Login.vue'
import Settings from './components/Settings.vue'

export const routes = [
  { path: '*', redirect: '/', meta: { requiresLogin: true }},
  { path: '/', component: Dashboard, name: 'mainpage', meta: { requiresLogin: true }},
  { path: '/settings', component: Settings, name: 'settings', meta: { requiresLogin: true }},
  { path: '/login', component: Login, name: 'login' }
]

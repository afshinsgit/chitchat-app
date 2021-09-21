import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { projectAuth } from '../firebase/firebase'

// @ts-ignore
function requireAuthentication(to, from, next) {
  const user = projectAuth.currentUser;
  if(!user) {
    next({ name: 'Home'})
  } else {
    next();
  }
}

// @ts-ignore
function requireNoAuthentication(to, from, next) {
  const user = projectAuth.currentUser;
  if(user) {
    next({ name: 'Chatroom'})
  } else {
    next();
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireNoAuthentication
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: requireAuthentication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

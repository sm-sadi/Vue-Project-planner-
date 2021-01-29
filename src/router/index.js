import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

import Projects from '../views/Projects.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/AddProject',
    name: 'AddProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component : AddProject
  },
  {
    path: '/Projects/:id',
    name: 'EditProject',
    component: EditProject,
    props : true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

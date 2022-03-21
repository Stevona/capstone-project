import { createRouter, createWebHistory}  from 'vue-router'
import HelloWorld from '@/views/HelloWorld'


const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
]

export default new createRouter ({
  history: createWebHistory(),
  routes
})

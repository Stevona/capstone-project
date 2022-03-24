import { createRouter, createWebHistory}  from 'vue-router'
import dashboard from '@/views/DashBoard'
import manageCurstomers from '@/views/ManageCustomers'
import manageOrders from '@/views/ManageOrders'
import products from '@/views/ProductS'
import addCustomer from '@/views/AddCustomer'
import addOrder from '@/views/AddOrder'
import editCustomer from '@/views/EditCustomer'
import editOrder from '@/views/EditOrder'
import login from '@/views/LogIn'

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: dashboard
  },
  {
    path: '/manageCustomers',
    name: 'ManageCustomers',
    component: manageCurstomers
  },
  {
    path: '/manageOrders',
    name: 'ManageOrders',
    component: manageOrders
  },
  {
    path: '/products',
    name: 'Products',
    component: products
  },
  {
    path: '/addOrders',
    name: 'AddOrder',
    component: addOrder
  },
  {
    path: '/addCustomer',
    name: 'AddCustomer',
    component: addCustomer
  },
  {
    path: '/editCustomer/:id',
    name: 'EditCustomer',
    component: editCustomer
  },
  {
    path: '/editOrder',
    name: 'EditOrder',
    component: editOrder
  },
  {
    path: '/login',
    name: 'LogIn',
    component: login
  }
]

export default new createRouter ({
  history: createWebHistory(),
  routes
})

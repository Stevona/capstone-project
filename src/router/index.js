import { createRouter, createWebHistory}  from 'vue-router'
import dashboard from '@/views/DashBoard'
import manageCurstomers from '@/views/ManageCustomers'
import manageOrders from '@/views/ManageOrders'
import products from '@/views/ProductS'
import addCustomer from '@/views/AddCustomer'
import addOrder from '@/views/AddOrder'
import editCustomer from '@/views/EditCustomer'

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
    path: '/addOrder',
    name: 'AddOrder',
    component: addOrder
  },
  {
    path: '/addCustomer',
    name: 'AddCustomer',
    component: addCustomer
  },
  {
    path: '/editCustomer',
    name: 'EditCustomer',
    component: editCustomer
  },
]

export default new createRouter ({
  history: createWebHistory(),
  routes
})

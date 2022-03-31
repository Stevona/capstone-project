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
import detailCustomer from '@/views/DetailCustomer'
import detailOrder from '@/views/DetailOrder'

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: dashboard,
    meta: {
      title: "Dashboard"
    }
  },
  {
    path: '/manageCustomers',
    name: 'ManageCustomers',
    component: manageCurstomers,
    meta: {
      title: "Manage Customers"
    }
  },
  {
    path: '/manageOrders',
    name: 'ManageOrders',
    component: manageOrders,
    meta: {
      title: "Manage Orders"
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: products,
    meta: {
      title: "Products"
    }
  },
  {
    path: '/addOrder',
    name: 'AddOrder',
    component: addOrder,
    meta: {
      title: "Create Order"
    }
  },
  {
    path: '/addCustomer',
    name: 'AddCustomer',
    component: addCustomer,
    meta: {
      title: "Create Customer"
    }
  },
  {
    path: '/editCustomer/:id',
    name: 'EditCustomer',
    component: editCustomer,
    meta: {
      title: "Edit Customer"
    }
  },
  {
    path: '/editOrder/:id',
    name: 'EditOrder',
    component: editOrder,
    meta: {
      title: "Edit Order"
    }
  },
  {
    path: '/login',
    name: 'LogIn',
    component: login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/detailCustomer/:id',
    name: 'DetailCustomer',
    component: detailCustomer,
    meta:{
      title: "Customer Details"
    }
  },
  {
    path: '/detailOrder/:id',
    name: 'DetailOrder',
    component: detailOrder,
    props: true,
    meta:{
      title: "Order Details"
    }
  }
]

export default new createRouter ({
  history: createWebHistory(),
  routes
})

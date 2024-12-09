import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/layout.vue';
import Customer from '../views/Customers.vue'
import Dashboard from '../views/Dashboard.vue';
import Product from '@/views/Product.vue';
import Income from '@/views/Income.vue';
import Na from '@/views/Navigation.vue';
import Help from '@/views/Help.vue';

const routes = [
  {
    path: "/",
    component: Layout,
    children:[
      {
        path: '',
        name: 'Customer',
        component: Customer,
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
      },
      {
        path: 'income',
        name: 'Income',
        component: Income,
      },
      {
        path: 'na',
        name: 'Na',
        component: Na,
      },
      {
        path: 'help',
        name: 'Help',
        component: Help,
      },
    ]
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Delivery from '@/components/Delivery'
import Shipment from '@/components/Shipment'
import Finish from '@/components/Finish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/shipment',
      name: 'Shipment',
      component: Shipment
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})

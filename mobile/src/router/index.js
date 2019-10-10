import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Details from '../pages/details/Details'
import Parent from '../pages/parent/Parent'
Vue.use(VueRouter)
const router = new VueRouter({
	routes:[
          {
            path:'/',
            name:'Home',
            component:Home
           },
           {
             path:'/city',
             name:'City',
             component:City
            },
            {
              path:'/details/:id',

              name:'Details',
              component:Details
            },
            {
              path:'/parent',

              name:'Parent',
              component:Parent
            }
	 ],
        scrollBehavior (to, from, savedPosition) {
           return { x: 0, y: 0 }
        }
})

export default router
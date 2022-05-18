import {createRouter , createWebHashHistory} from 'vue-router'
import store from '../store'
// 1. Define route components.
import Home from '../screens/Home.vue'
import About from '../screens/About.vue'
import Register from '../authScreens/Register.vue'
import Signin from '../authScreens/Signin.vue'
import Dashboard from '../Dashboard/Dashboard.vue'
import MyAccount from '../Dashboard/MyAccount.vue'
import CarDetails from '../Dashboard/CarDetails.vue'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
  { 
    path: '/', 
    name:'Dashboard',
    component: Home 
  },

  { 
    path: '/Dashboard', 
    name:'Dashboard',
    component: Dashboard  
  },
  { 
    path: '/Dashboard/MyAccount', 
    name:'MyAccount',component: 
    MyAccount  , 
    meta:{requireLogin:true}
  },

  { path: '/Home', 
    name:'Home',
    component: Home , 
    meta:{requireLogin:true}
  },
  { 
    path: '/About', 
    name:'About', 
    component: About 
  },
  { 
    path: '/car-details/:id', 
    name:'CarDetails', 
    component: CarDetails 
  },
  { 
    path: '/Register',
    name:'Register', 
    component: Register 
  },
  { 
    path: '/Signin',
    name:'Signin', 
    component: Signin 
  },

  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
router.beforeEach((to, from , next )=>{
    if(to.matched.some(record =>  record.meta.requireLogin && !store.state.isAuthenticated)){
        next('/Signin')
    } else {
        next()
    }

})
export default router
  
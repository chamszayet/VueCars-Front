<template>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative place-content-end place-items-end place-self-end top-0 right-0  bg-slate-800">
  <div class="top-0 right-0  max-w-7xl mx-auto px-4 sm:px-6">
    <div class="top-0 right-0  flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1 top-0 right-0 ">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
        </a>

<Filter></Filter>

      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div v-if="!$store.state.isAuthenticated" class="md:flex items-center justify-end md:flex-1 lg:w-0">
  
              <router-link class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" to='/Signin'> Sign In </router-link>
            

              <router-link class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" to='/Register'> Register </router-link>

      </div>
      <div v-else class="md:flex items-center justify-end md:flex-1 lg:w-0">
  
              <button @click="hanldeOut()" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-red-700" > Logout</button>
            


      </div>
    </div>
  </div>



































</div>



</template>

<script>
import axios from 'axios'
import Filter from './Filter.vue'
export default {
  components: { 
    Filter
   },
    name:'Navbar',

    methods:{
      async hanldeOut (){
        await axios.get('api/v1/token/logout/')
        .then(response => {
          console.log('logout');
          
        })
        .catch(error=>{
          console.log(error);
        })


        axios.defaults.headers.common['Authorization'] = ''
          localStorage.removeItem('token')
          this.$store.commit('removeToken')

          this.$router.push('/Signin')
        
      }
      
    }

}
</script>

<style>

</style>
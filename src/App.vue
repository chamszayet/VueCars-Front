<script >
import axios from 'axios'
import "tailwindcss/tailwind.css"
export default  {
    name: 'App',
    components: {
      Navbar
    },
    beforeCreate(){
      this.$store.commit('initializeStore')

      if(this.$store.state.token){
        axios.defaults.headers.common['Authorization'] = 'Token ' + this.$store.state.token
      } else{
        axios.defaults.headers.common['Authorization'] = ''

      }

    }

  }

import Navbar from './Layout/Navbar.vue'
</script>

<template>
 <div >
  <div id="nav">  <Navbar/> </div>

  <router-view />
</div>

</template>

<style>
.nav{
  background-color: brown;
  float: left;
}
</style>

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state : {
    isLoading: false,
    isAuthenticated: false,
    token:'',

    
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true

      } else{
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setIsLoading(state , status){
      state.isLoading = status


    },

    setToken(state , token){
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
    }
    
  }
})


export default store
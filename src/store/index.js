import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menus:[]
  },
  mutations: {
    SET_MENUS(state,data){
        state.menus=data
    },
  },
  getters:{
    

    findPageBySlug: (state) => (slug) => {

      state.menus.map((item)=>{
        
      })

      return state.menus;
    },
  },
  actions: {
    async getMenus({commit}){
      return await axios.get('http://localhost:8000/api/get-categories').then(res=>{
         commit('SET_MENUS', res.data.pages)
         return res.data;
      })
    },

  
  
  },
})



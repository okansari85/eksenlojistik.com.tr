import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menus:[],
    pages:[],
    
  },
  mutations: {
    SET_MENUS(state,data){
        state.menus=data
    },
    SET_PAGES(state,data){
      state.pages=data
  },
  },
  getters:{
    findPageBySlug: (state) => (id,slug) => {
      return state.pages.filter(a=>a.slug==slug)[0]
    },
  },
  actions: {
    async getMenus({commit}){
      return await axios.get('http://eksenlojistik.com.tr/api/get-categories').then(res=>{
         commit('SET_MENUS', res.data.pages)
         commit ('SET_PAGES', res.data.all)
         return res.data;
      })
    },
   
  
  },
})



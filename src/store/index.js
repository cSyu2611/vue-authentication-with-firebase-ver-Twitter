import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: null,
    profile_image_url: null,
  },
  mutations: {
    setCredential(state, user_info) {
      state.user_name = user_info.profile.name
      state.profile_image_url = user_info.profile.profile_image_url
    },
  },
  actions: {
  },
  modules: {
  }
})

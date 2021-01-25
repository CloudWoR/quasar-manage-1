import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from 'src/store/mutations'
import actions from './actions'
import modules from './modules'
// import example from './module-example'

Vue.use(Vuex)

const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log('提交mutation:', mutation, state)
  })
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  // enable strict mode (adds overhead!)
  // for dev mode only
  plugins: [myPlugin],
  strict: process.env.DEBUGGING
})

export default store
// }

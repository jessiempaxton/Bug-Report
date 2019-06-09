import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'


const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jessietest'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {}
  },
  mutations: {
    setBugs(state, id) {
      state.bugs = id
    },
    setBug(state, bug) {

      state.bug = bug
    }
  },
  actions: {
    async setBug({ commit, dispatch }, id) {
      try {
        let res = await _api.get("/bugs/" + id)
        commit('setBug', res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res)
        commit('setBugs', res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    async createBug({ commit, dispatch }, data) {
      try {
        let res = await _api.post('bugs', data)
        router.push({ name: 'bugs', params: { id: res.data.id } })
      } catch (error) {
        console.error(error)
      }
    },
    async addNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.put("bugs/" + payload.id)
        commit('getBug', res.data)
      } catch (error) {
        console.error(error)
      }
    }

    // async addNote({ commit, dispatch }, payload) {
    //   try {
    //     let res = await _api.post('bugs', payload)
    //     router.push({ name: 'bugs', params: { id: res.data._id } })
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },

    //below is from the food-is-fun addFood
    //   addNote({ commit, dispatch, state }, data) {
    //     state.bug.push(data)
    //     _api(state.bug._id, state.bug)
    //       .then(res => {
    //         dispatch('getBug', state.bug._id)
    //       })
    //       .catch(err => {
    //         state.bug.pop()
    //       })
    //   }
    // }
  }
})

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
    notes: [],
    //notes
    bug: {}
  },
  mutations: {
    //setnotes
    setNotes(state, noteArr) {
      state.notes = noteArr
    },
    setBugs(state, id) {
      state.bugs = id
    },
    setBug(state, bug) {
      state.bug = bug
    },
    addNote(state, note) {
      state.notes.push(note);
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
        let res = await _api.post("bugs/" + payload.bugId + '/notes', payload)
        // dispatch('setBug', payload.bugId)
        // console.log(res)
        commit('addNote', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },

    async getNotes({ commit, dispatch }, bugId) {
      try {
        let res = await _api.get("bugs/" + bugId + '/notes')
        commit('setNotes', res.data.results)
        // dispatch('setNotes', bugId)
        //setnotes
      } catch (error) {
        console.error(error)
      }
    }

  }
})

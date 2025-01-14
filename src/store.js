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
    //below is getBugById
    async setBug({ commit, dispatch }, id) {
      try {
        let res = await _api.get("/bugs/" + id)
        commit('setBug', res.data.results)
      } catch (e) { console.error(e) }
    },
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res)
        commit('setBugs', res.data.results)
      } catch (e) { console.error(e) }
    },
    async createBug({ commit, dispatch }, data) {
      try {
        let res = await _api.post('bugs', data)
        // router.push({ name: 'bugs', params: { id: res.data.id } })
        dispatch('getBugs')
      } catch (error) { console.error(error) }
    },

    async addNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.post("bugs/" + payload.bugId + '/notes', payload)
        commit('addNote', res.data.results)
      } catch (error) { console.error(error) }
    },

    async getNotes({ commit, dispatch }, bugId) {
      try {
        let res = await _api.get("bugs/" + bugId + '/notes')
        commit('setNotes', res.data.results)
      } catch (error) { console.error(error) }
    },

    deleteNote({ commit, dispatch }, note) {
      _api.delete('/bugs/' + note.bug + '/notes/' + note._id)
        .then(() => dispatch('getNotes', note.bug))
    },

    async resolveBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload._id)
        dispatch('getNotes', payload._id)
        dispatch('setBug', payload._id)
      } catch (e) { console.error(e) }
    },
  }
})

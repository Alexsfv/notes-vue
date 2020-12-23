import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notes from './notes'
import newNote from './newNote'
import message from './message'
import search from './search'

export default new Vuex.Store({
    modules: {
        notes,
        newNote,
        message,
        search
    }
})
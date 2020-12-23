export default {
    namespaced: true,
    state: {
        title: '',
        description: '',
        priority: 'low',
    },
    mutations: {
        resetFields(state) {
            state.title = ''
            state.description = ''
            state.priority = 'low'
        },
        setTitle(state, payload) {
            state.title = payload
        },
        setDescription(state, payload) {
            state.description = payload
        },
        setPriority(state, payload) {
            state.priority = payload
        }
    },
    actions: {
        resetFields({commit}) {
            commit('resetFields')
        },
        setTitle({commit}, payload) {
            commit('setTitle', payload)
        },
        setDescription({commit}, payload) {
            commit('setDescription', payload)
        },
        setPriority({commit}, payload) {
            commit('setPriority', payload)
        }
    },
    getters: {
        getNoteFields(state) {
            return ({
                title: state.title,
                description: state.description,
                priority: state.priority,
            })
        },
        getTitle(state) {
            return state.title
        },
        getDescription(state) {
            return state.description
        },
        getPriority(state) {
            return state.priority
        }
    },

}
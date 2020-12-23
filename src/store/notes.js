export default {
    state: {
        notes: [
            {
                id: 1,
                title: 'First Note',
                descr: 'Description for first Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'low',
                edit: {
                    isEditing: false,
                    hasEdited: false,
                    editedDate: '21312'
                }
            },
            {
                id: 2,
                title: 'Second Note',
                descr: 'Description for Second Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'medium',
                edit: {
                    isEditing: false,
                    hasEdited: false,
                    editedDate: ''
                }
            },
            {
                id: 3,
                title: 'Third Note',
                descr: 'Description for Third Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'hight',
                edit: {
                    isEditing: false,
                    hasEdited: false,
                    editedDate: ''
                }
            },
        ],
    },
    mutations: {
        changeNotes(state, newNotes) {
            state.notes = [...newNotes]
        },
        addNote(state, newNote) {
            state.notes.push(newNote)
        }
    },
    actions: {
        removeNote({commit, state}, removeId) {
            const newNotes = state.notes.filter(note => note.id !== removeId)
            commit('changeNotes', newNotes)
        },
        addNote({commit}, newNote) {
            commit('addNote', newNote)
        },
        saveEditData({commit, state}, changes) {
            const editNote = state.notes.find(nt => nt.id === changes.id)
            const isChanged = changes.title !== editNote.title || changes.description !== editNote.descr
            if (isChanged) {
                editNote.title = changes.title
                editNote.descr = changes.description
                editNote.edit.editedDate = changes.date
                editNote.edit.hasEdited = true
            }
            editNote.edit.isEditing = false
            const newNotes = state.notes.map(nt => nt.id === changes.id ? editNote : nt)
            commit('changeNotes', newNotes)
        },
        changeNoteEditStatus({commit, state}, editNoteId) {
            const newNotes = state.notes.map(note => {
                if (editNoteId === note.id) {
                    note.edit.isEditing = true
                } else if (note.edit.isEditing === true) {
                    note.edit.isEditing = false
                }
                return note
            })
            commit('changeNotes', newNotes)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getNotesIds(state) {
            return state.notes.map(note => note.id)
        },
        getSearchNotes(state, getters) {
            const searchValue = getters['search/getValue']
            if (!searchValue) {
                return state.notes
            }
            const searchLower = searchValue.trim().toLowerCase()
            return state.notes.filter( item => item.title.toLowerCase().indexOf(searchLower) !== -1 )
        },
    },
}
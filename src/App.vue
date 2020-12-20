<template>
    <div class="wrapper">
        <div class="wrapper-content">
            <section>
                <div class="container">

                    <message v-if="message" :message="message"/>

                    <newNote :note="note" @addNote="addNote" />

                    <div class="note-header note-header_center" style="margin: 36px 0;">
                        <h1>{{ title }}</h1>

                        <search
                            :value="search"
                            @search="search = $event"
                            placeholder="Find note"
                        />

                        <!-- icons controls -->
                        <div class="icons">
                            <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                        </div>
                    </div>

                    <notes
                        :notes="notesFilter"
                        :grid="grid"
                        @remove="removeNote"
                        @changeData="changeData"
                        @changeNoteEditStatus="changeNoteEditStatus"
                    />

                </div>
            </section>
        </div>
    </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'

export default {
    name: 'App',
    components: {
        message, newNote, notes, search
    },
    data() {
        return ({
            title: 'Notes App',
            search: '',
            message: null,
            grid: true,
            note: {
                title: '',
                descr: '',
                priority: 'low',
            },
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
            ]
        })
    },
    computed: {
        notesFilter() {
            let search = this.search
            let array = this.notes
            if (!search) {
                return array
            }
            search = search.trim().toLowerCase()
            array = array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(search) !== -1) {
                    return item
                }
            })
            return array
        }
    },
    methods: {
        addNote() {
            const {title, descr} = this.note
            const id = this.getRandomId()
            if (title === '') {
                this.message = 'title cant be blank!'
                return null
            }

            this.notes.push({
                id,
                title,
                descr,
                date: new Date(Date.now()).toLocaleString(),
                priority: this.note.priority,
                edit: {
                    isEditing: false,
                    hasEdited: false,
                    editedDate: ''
                }
            })
            this.note.title = ''
            this.note.descr = ''
            this.note.priority = 'low'
            this.message = null
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        changeData(noteChanges) {
            const editNote = this.notes.filter(nt => nt.id === noteChanges.id)[0]
            const isChanged = noteChanges.title !== editNote.title || noteChanges.description !== editNote.descr
            if (isChanged) {
                editNote.title = noteChanges.title
                editNote.descr = noteChanges.description
                editNote.edit.editedDate = noteChanges.date
                editNote.edit.hasEdited = true
            }
            editNote.edit.isEditing = false
            this.notes = this.notes.map(nt => nt.date === noteChanges.date ? editNote : nt)
        },
        changeNoteEditStatus(editNote) {
            this.notes = this.notes.map(note => {
                if (editNote.id === note.id) {
                    note.edit.isEditing = true
                } else if (note.edit.isEditing === true) {
                    note.edit.isEditing = false
                }
                return note
            })
        },
        getRandomId() {
            const id = Math.round( Math.random() * 9999999)
            const hasSameId = this.notes.some(note => note.id === id)
            if (hasSameId) {
                this.getRandomId
                return this.getRandomId()
            } else {
                return id
            }
        },
    }
};
</script>

<style lang="scss">
@media all and (max-width: 768px) {
  .icons {
      margin: 40px auto 0;
  }
}
</style>

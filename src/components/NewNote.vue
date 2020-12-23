<template>
    <div class="new-note">
        <label class="text">Title</label>
        <input type="text" v-model.lazy="title" />

        <label class="text">Description</label>
        <textarea v-model.lazy="description"></textarea>

        <label class="text">Priority</label>
        <div>
            <a-radio-group default-value="low" v-model="priority" button-style="solid">
                <a-radio-button value="low" > Low </a-radio-button>
                <a-radio-button value="medium" > Medium </a-radio-button>
                <a-radio-button value="hight" > Hight </a-radio-button>
            </a-radio-group>
        </div>

        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
import getRandomId from '../mixins/getRandomId'

export default {
    mixins: [getRandomId],
    computed: {
        priority: {
            set (value) {
                this.$store.dispatch('newNote/setPriority', value)
            },
            get () {
                return this.$store.getters['newNote/getPriority']
            },
        },
        title: {
            set (value) {
                this.$store.dispatch('newNote/setTitle', value)
            },
            get () {
                return this.$store.getters['newNote/getTitle']
            },
        },
        description: {
            set (value) {
                this.$store.dispatch('newNote/setDescription', value)
            },
            get () {
                return this.$store.getters['newNote/getDescription']
            },
        }
    },
    methods: {
        addNote() {
            const { title, descr, priority } = this.$store.getters['newNote/getNoteFields']
            if (title === '') {
                this.$store.dispatch('message/setMessage', 'title cant be blank!')
                return null
            }
            const id = this.$getRandomId(this.$store.getters.getNotesIds)
            const newNote = {
                id,
                title,
                descr,
                date: new Date(Date.now()).toLocaleString(),
                priority,
                edit: {
                    isEditing: false,
                    hasEdited: false,
                    editedDate: ''
                }
            }
            this.$store.dispatch('addNote', newNote)
            this.$store.dispatch('newNote/resetFields')
            this.$store.dispatch('message/setMessage', null)
        },
    },
};
</script>

<style lang="scss" scoped>
.new-note {
    text-align: center;

    .btn {
        margin: 20px auto;
    }
}
label.text {
    margin-top: 15px;
    font-weight: bold;
}
</style>
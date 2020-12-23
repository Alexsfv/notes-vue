<template>
    <div class="notes">
        <div 
            v-for="(note, i) in $store.getters.getSearchNotes" 
            :key="i" class="note" 
            :class="{ 
                full: !grid,
                editing: note.edit.isEditing ,
                low: note.priority === 'low',
                medium: note.priority === 'medium',
                hight: note.priority === 'hight',
            }"
        >

            <div class="note-header" :class="{ grid: !grid }">
                <p v-if="!note.edit.isEditing">{{ note.title }}</p>
                <input 
                    v-else 
                    v-model="edit.title" 
                    type="text" 
                    class="edit-input-title"
                >
                <a-icon 
                    v-if="!note.edit.isEditing"
                    type="edit" 
                    class="editBtn" 
                    @click="startEditData(note)"
                />
                <a-icon 
                    v-else
                    type="check-circle" 
                    class="editBtn editBtn_check" 
                    @click="saveEditData()"
                />

                <p style="cursor: pointer;" @click="removeNote(note.id)" class="deleteBtn">x</p>
            </div>

            <div class="note-body">
                <p v-if="!note.edit.isEditing">{{ note.descr }}</p>
                <textarea 
                    v-else
                    v-model="edit.description"
                    class="edit-input-description"
                />
                <span>{{ note.edit.editedDate || note.date }}</span>
                <span v-if="note.edit.hasEdited"> (ред.)</span>
            </div>

        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue'


export default {
    props: {
        grid: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            edit: {
                id: null,
                title: '',
                description: '',
            },
        }
    },
    methods: {
        removeNote(removeId) {
            this.$store.dispatch('removeNote', removeId)
        },
        cleanEditData() {
            this.edit.id = ''
            this.edit.title = ''
            this.edit.description = ''
        },
        startEditData(editNote) {
            const { id, title, descr } = editNote
            this.cleanEditData()
            this.edit.id = id
            this.edit.title = title
            this.edit.description = descr

            this.$store.dispatch('changeNoteEditStatus', editNote.id)
        },
        saveEditData() {
            const changes = {
                id: this.edit.id,
                title: this.edit.title,
                description: this.edit.description,
                date: new Date(Date.now()).toLocaleString()
            }
            this.$store.dispatch('saveEditData', changes)
        },
    },
}
</script>

<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}


.editBtn {
    font-size: 24px;
    margin: 0 25px 0 auto;

    svg {
        transition: all .3s ease;
    }

    &:hover {
        svg {
            fill: red;
        }
    }

    &_check {
        &:hover {
        svg {
            fill: green;
        }
    }
    }
}

.edit-input-title, .edit-input-description {
    padding: 0;
    border: none;
    border-radius: 0;
}

.edit-input-title {
    font-size: 22px;
    color: #402caf;
}

.edit-input-description {
    max-width: 100%;
    min-height: 100px;
    margin: 20px 30px 20px 0;
    font-size: 14px;
}

.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 5px 5px rgba(204, 204, 204, 0.096);
    transition: .4s ease;
    transform: translateY(0px);
    &.editing {
        transition: none;
        border: 2px dashed rgb(0, 98, 245);
    }
    &.full {
        width: 100%;
    }
    &.medium {
        box-shadow: 0 3px 5px 5px rgba(204, 204, 204, 0.096), inset 0 0 12px 0 rgba(229, 255, 0, 0.753);
        &:hover {
            box-shadow: 0 0 15px 2px rgba(229, 255, 0, 0.753);
        }
    }
    &.hight {
        box-shadow: 0 3px 5px 5px rgba(204, 204, 204, 0.096), inset 0 0 12px 0 rgba(255, 38, 0, 0.753);
        &:hover {
            box-shadow: 0 0 15px 2px rgba(255, 38, 0, 0.753);
        }
    }
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 3px 5px 5px rgba(204, 204, 204, 0.342);
    }
}

.note-header {
    display: flex;
    align-items: center;
    &_center {
        justify-content: space-between;
    }
    .deleteBtn {
    display: block;
    margin-top: -7px;
    font-size: 26px;
    }
    &.grid {
        justify-content: center;
        p {
            margin-right: 20px;
        }
        p:last-child {
            margin-right: 0;
        }
    }
    h1 {
        font-size: 32px;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 22px;
        color: #402caf
    }
    svg {
        margin-right: 12px;
        color: #999999;
        &.active {
            color: #402caf;
        }
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            cursor: pointer;
        }
    }
}

.note-body {
    p {
        margin: 20px;
        word-break: break-all;
    }
    span {
        font-size: 14px;
        color: #999999;
    }
}

@media all and (max-width: 992px) {
    .note-header {
        flex-wrap: wrap;

        h1 {
            margin-bottom: 15px;
        }
    }
}
</style>
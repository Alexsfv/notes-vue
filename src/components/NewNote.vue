<template>
    <div class="new-note">
        <label class="text">Title</label>
        <input type="text" v-model="note.title" />

        <label class="text">Description</label>
        <textarea v-model="note.descr"></textarea>

        <label class="text">Priority</label>
        <div>
            <a-radio-group default-value="low" v-model="note.priority" button-style="solid">
                <a-radio-button value="low" > Low </a-radio-button>
                <a-radio-button value="medium" > Medium </a-radio-button>
                <a-radio-button value="hight" > Hight </a-radio-button>
            </a-radio-group>
        </div>

        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        addNote() {
            this.$emit("addNote");
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
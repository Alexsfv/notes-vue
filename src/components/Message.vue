<template>
    <div class="message">
        <p>{{ $store.getters['message/getMessage'] }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .message {
        text-align: center;
        padding: 20px;
        
        p::first-letter {
            text-transform: uppercase;
        }

        p {
            color: red;
        }
    }
</style>
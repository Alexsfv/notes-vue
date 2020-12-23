export default {
    methods: {
        $getRandomId(forbiddenIds) {
            const id = Math.round( Math.random() * 99999999)
            const hasSameId = forbiddenIds.some(forbiddenId => forbiddenId === id)
            if (hasSameId) {
                return this.getRandomId()
            } else {
                return id
            }
        }
    }
}
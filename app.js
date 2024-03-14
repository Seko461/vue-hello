const { createApp } = Vue

createApp({
    data() {
        return {
            msg: 'Hello Vue!',
            image: 'https://picsum.photos/id/237/200/300'
        }

    },

}).mount('#app')
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({store}) {
    Vue.use(new VueSocketIO({
        debug: false,
        connection: 'https://akunin94.github.io/nuxt_chat:1992',
        vuex: {
            store,
            actionPrefix: 'SOCKET_',
            mutationPrefix: 'SOCKET_'
        }
    }))
}
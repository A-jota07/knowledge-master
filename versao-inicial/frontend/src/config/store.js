import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            name: 'Administrador',
            email: 'admin@email.com',
            admin: true,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE3NjY1ODU3NzEsImV4cCI6MTc2Njg0NDk3MX0.uQpebya4QJhcAC3vgaNjoaYol-nlZljC18lM1FOg0vI"
        }
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        }
    }
})
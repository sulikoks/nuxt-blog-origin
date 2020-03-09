export const state = () => ({
    token: true,
    list: [],
})

export const mutations = {
    setList(state, list) {
        state.list = list
    },
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    },
}

export const actions = {
    async loadList({ commit }) {
        const list = await this.axios('/list')
        commit('setList', list)
    },
    async newLogin({ commit }, formData) {
        try {
            setTimeout(() =>
                console.log('User is create', formData)
            ,2000)
        } catch (e) {
            console.error(e);
        }
    },
    async login({ state, commit }, { login, password}) {
        try {
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (login === 'suliko' && !!password) {
                        resolve('mock-token')
                    } else {
                        resolve('')
                    }
                }, 500)
            })
            commit('setToken', token)
        } catch (e) {
            commit('setError', e, { root: true })
            throw Error(e)
        }
        //89961340353 телефон автосервиса
    },
    logout({commit}) {
        commit('clearToken')
    },
}

export const getters = {
    isAuth: state => !!state.token
}
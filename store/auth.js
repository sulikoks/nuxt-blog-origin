import { resolve } from "url";

export const state = () => ({
    token: true
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    async newLogin({commit},formData) {
        try {
            setTimeout(() =>
                console.log('User is create', formData)
            ,2000)
            
            //debugger
        } catch (e) {
            console.error(e);
        }
    },
    async login({commit, dispatch}, formData) {
        //if (formData.login == 'suliko') {
            try {
                const token = await new Promise((resolve, reject) => {
                    setTimeout(() => resolve('mock-token'), 500)
                })
                dispatch('setToken', token)
            } catch (e) {
                //debugger
                commit('setError', e, {root: true})
                //debugger
                throw e
            }
        //    return true
        //} else {
        //    return false
        //}
     //89961340353 телефон автосервиса
    },
    setToken({commit}, token) {
        commit('setToken', token)
    },
    logout({commit}) {
        commit('clearToken')
    },
    
}

export const getters = {
    isAuth: state => Boolean(state.token)
}
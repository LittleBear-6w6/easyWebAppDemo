export const state = () => ({
    isLoggedIn:false,
    user: null
})

export const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    user:(state) => state.user
}

export const mutations = {
    setUser(state, { user }){
        state.user = user
        state.isLoggedIn = true
    }
}

export const actions = {
    async login({ commit }, payload){
        const user = {'id': 'user', 'passwd':'pass'}
        if(payload.passwd !== user.passwd) throw new Error("invalid user")
        commit('setUser' , {user})
    }
}
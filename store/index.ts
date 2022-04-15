

import Server from 'moralis';
import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  user: [] as Object[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    user: state => state.user,
}  

export const mutations: MutationTree<RootState> = {
    SET_USER: (state, user: Object[]) => (state.user = user),
}

export const actions: ActionTree<RootState, RootState> = {

    async loginEmailAuth({ commit }, credential: { email: string, password: string }) {
        try{
            const send = await Server.User.logIn(
                credential.email, credential.password
            );
            if(!send) {
                commit('SET_USER', send);
                return {
                    status: false,
                    title: "Authenticated",
                    message: 'Successfully logged in'
                }
            }
        }catch(error:any) {
            return {
                status: false,
                title: "Authentication Error",
                message: error.message
            }
        }
    },

    async nuxtServerInit  ({ commit }, { req }) {
        console.log("Hello")
    }
}



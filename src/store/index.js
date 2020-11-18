import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allData: [],
        errGet: [],
    },
    getters: {
        all: (state) => {
            return state.allData;
        },
    },
    mutations: {
        set(state, payload) {
            // eslint-disable-next-line no-unused-vars
            let newARR = payload;
            newARR.forEach((element) => {
                state.allData.push(element);
            });
        },
        setERR(state, payload) {
            state.errGet = payload;
        },
        addNewUser: (state, user) => state.allData.push(user),
        removeUser: (state, id) => (
            state.allData.filter((user) => {
                user.id !== id;
            }),
            state.allData.splice((user) => user.id, 1)
        ),
    },
    actions: {
        fetchUsers({ commit }, id) {
            axios
                .get(`https://node-hnapi.herokuapp.com/news?page=${id}`)
                .then((res) => {
                    commit('set', res.data);
                })
                .catch((err) => {
                    console.log(err);
                    commit('setERR', err);
                });
        },

        addUsers({ commit }, user) {
            axios
                .post('https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo', user)
                .then((response) => {
                    console.log(response);
                    commit('addNewUser', response.data);
                });
        },
        deleteUser({ commit }, id) {
            axios
                .delete(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/${id}`)
                .then((response) => {
                    console.log(response);
                    commit('removeUser', id);
                });
        },
    },
    modules: {},
});
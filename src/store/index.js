import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        tabsList: []
    },
    mutations: {
        handleTabsList: (state,tabsList) => {
            state.tabsList = tabsList;
        }
    },
    actions: {

    },
    getters: {
        tabsList: (state) => state.tabsList
    }
})
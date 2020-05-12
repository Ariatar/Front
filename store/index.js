export const state = () => ({
    loadingStatus: false,
    isAccount: false,
    topHeight: 100,
    menu: null,
    userIp: ''
});

export const getters = {
    locale (state) {
        return state.i18n.locale
    },
    headerMenu (state) {
        return state.menu[0]
    },
    footerMenu (state) {
        return state.menu[1]
    },
    getIp (state) {
        return state.userIp
    }
};

export const mutations = {
    SET_LOADING_STATUS(state, payload) {
        state.loadingStatus = payload
    },
    SET_IS_ACCOUNT(state, payload) {
        state.isAccount = payload
    },
    SET_TOP_HEIGHT(state, payload) {
        state.topHeight = payload
    },
    SET_MENU(state, payload) {
        state.menu = payload
    },
    SET_USER_IP(state, payload) {
        state.userIp = payload
    }
};

export const actions = {
    async GET_MENU({ commit }) {
        try {
            const { data } = await this.$axios.get('menu');
            commit('SET_MENU', data);
        } catch (e) {

        }
    },
    async GET_USER_IP({ commit }) {
        try {
            const { data } = await this.$axios.get('https://api.my-ip.io/ip.json');
            commit('SET_USER_IP', data.ip);
        } catch (e) {

        }
    },
    async nuxtServerInit({ dispatch }) {
        await dispatch('GET_USER_IP');
        await dispatch('GET_MENU');
    }
};

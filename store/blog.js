export const state = () => ({
    isShowFilter: false,
    isOpenFilter: false,
    typeFilter: 'full',
    isShowMore: true,
    isEnableScroll: false,
    redirectFromArticle: false,
    sortItems: [
        {
            params: {
                sort: 'date',
                dir: 'DESC'
            },
            key: 'dateDESC',
            label: 'Вначале новые'
        },
        {
            params: {
                sort: 'date',
                dir: 'ASC'
            },
            key: 'dateASC',
            label: 'Новые в конце'
        },
        {
            params: {
                sort: 'views',
                dir: 'DESC'
            },
            key: 'viewsDESC',
            label: 'По количеству просмотров'
        },
        {
            params: {
                sort: 'likes',
                dir: 'DESC'
            },
            key: 'likesDESC',
            label: 'По количеству лайков'
        }
        // {
        //     params: {
        //         sort: 'comments',
        //         dir: 'DESC'
        //     },
        //     key: 'commentsDESC',
        //     label: 'По количеству комментариев'
        // }
    ],
    sortItemDefault: {
        params: {
            sort: 'date',
            dir: 'DESC'
        },
        key: 'dateDESC',
        label: 'Вначале новые'
    },
    sortItem: {
        params: {
            sort: 'date',
            dir: 'DESC'
        },
        key: 'dateDESC',
        label: 'Вначале новые'
    },
    paramsDefault: {
        limit: 6,
        offset: 0
    },
    params: {
        limit: 6,
        offset: 0
    },
    categories: [],
    tags: [],
    posts: []
});

export const mutations = {
    SET_SHOW_FILTER(state, payload) {
        state.isShowFilter = payload
    },
    SET_OPEN_FILTER(state, payload) {
        state.isOpenFilter = payload
    },
    SET_TYPE_FILTER(state, payload) {
        state.typeFilter = payload
    },
    SET_SHOW_MORE(state, payload) {
        state.isShowMore = payload
    },
    SET_REDIRECT_FROM(state, payload) {
        state.redirectFromArticle = payload
    },
    SET_ENABLE_SCROLL(state, payload) {
        state.isEnableScroll = payload
    },
    SET_PARAMS(state, payload) {
        state.params = Object.assign(state.params, payload)
    },
    RESET_PARAMS(state) {
        state.params = state.paramsDefault
    },
    SET_SORT_ITEM(state, payload) {
        state.sortItem = payload
    },
    RESET_SORT_ITEM(state) {
        state.sortItem = state.sortItemDefault
    },
    SET_CATEGORIES(state, payload) {
        state.categories = payload
    },
    SET_TAGS(state, payload) {
        state.tags = payload
    },
    SET_POSTS(state, payload) {
        state.posts = payload
    }
};

export const actions = {
    async GET_CATEGORIES({ state, commit }) {
        if (!state.categories.length) {
            try {
                const { data } = await this.$axios.get('/blog/category');
                commit('SET_CATEGORIES', data.categories);
            } catch (e) {

            }
        }
    },
    async GET_TAGS({ state, commit }) {
        if (!state.tags.length) {
            try {
                const { data } = await this.$axios.get('/blog/tag');
                commit('SET_TAGS', data.categories);
            } catch (e) {

            }
        }
    },
    async GET_POSTS({ commit }, endpoint) {
        try {
            const { data } = await this.$axios.get(endpoint);
            commit('SET_POSTS', data.posts);
        } catch (e) {

        }
    }
};

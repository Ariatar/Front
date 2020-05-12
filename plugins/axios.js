import qs from 'qs'

export default function ({ $axios, store, app }) {
    $axios.onRequest(config => {
        store.commit('SET_LOADING_STATUS', true)

        return {
            ...config,
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
            headers: {
                ...config.headers,
                'Accept-Language': app.i18n.locale,
                'X_REAL_IP': app.store.getters.getIp
            },
            params: {
                ...config.params
            }
        }
    })

    $axios.onResponse(response => {
        store.commit('SET_LOADING_STATUS', false)
        return {
            ...response,
            data: typeof response.data === 'string' ? app.$decodeResponse(response.data) : response.data
        }
    })

    $axios.onError(({ response }) => {
        store.commit('SET_LOADING_STATUS', false)
        return Promise.reject(response)
    })
}

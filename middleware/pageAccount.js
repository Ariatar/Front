export default function ({ route, app, store }) {
    if (route.name) {
        const pageName = route.name.replace('___' + app.i18n.locale, '')
        store.commit('SET_IS_ACCOUNT', pageName.includes('account'))
    }
}

import { mapState } from 'vuex'

export default {
    head () {
        const routeName = this.$route.name ?
            this.$route.name.replace('___' + this.locale, '') :
            this.$route.name
        const indexPage = this.isAccount ? 'noindex, nofollow' : 'index, follow'
        return {
            title: this.$t(`pages.${routeName}.title`),
            meta: [
                { hid: 'description', name: 'description', content: this.$t(`pages.${routeName}.description`) },
                { hid: 'robots', name: 'robots', content: indexPage }
            ]
        }
    },
    computed: {
        ...mapState(['isAccount'])
    }
}

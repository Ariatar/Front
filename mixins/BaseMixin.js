import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState(['loadingStatus', 'topHeight']),
        ...mapGetters(['locale'])
    },
    methods: {
        toggleBodyClass (status, className) {
            const body = document.querySelector('body')
            status ? body.classList.add(className) : body.classList.remove(className)
        },
        stripTags(html) {
            return html.replace(/(<([^>]+)>)/ig,"");
        },
        truncateString(str, num) {
            if (str.length <= num) {
                return str
            }
            return str.slice(0, num) + '...'
        }
    }
}

import CoursePage from '~/components/course/CoursePage'

export default {
    components: {
        CoursePage
    },
    async asyncData(context) {
        async function getCategories() {
            try {
                const { data } = await context.$axios.get(context.route.fullPath)
                return data.categories
            } catch (e) {

            }
        }
        return {
            categories: await getCategories()
        }
    }
}

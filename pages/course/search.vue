<template>
    <course-page
        type="search"
        :categories="categories"/>
</template>

<script>
    import coursePageMixin from '~/mixins/coursePageMixin'

    export default {
        name: "CourseSearch",
        layout: 'page',
        mixins: [coursePageMixin],
        data: () => ({
            categories: []
        }),
        watch: {
            $route: async function () {
                await this.fetch()
            }
        },
        methods: {
            async fetch() {
                try{
                    const { data } = await this.$axios.get(this.$route.fullPath)
                    this.categories = data.categories
                } catch (e) {

                }
            }
        }
    }
</script>

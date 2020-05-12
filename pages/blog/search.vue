<template>
    <blog-page type="search" :items-popular="popularPosts" />
</template>

<script>
export default {
    name: "BlogSearch",
    layout: "page",

    async asyncData(context) {
        async function getPopularPost() {
            try {
                const params = {
                    sort: "views",
                    dir: "DESC"
                };
                const { data } = await context.$axios.get("blog", { params });
                return data.posts;
            } catch (e) {}
        }

        return {
            popularPosts: await getPopularPost()
        };
    },
    watch: {
        $route: async function() {
            await this.fetch();
        }
    },
    methods: {
        async fetch() {
            try {
                const { data } = await this.$axios.get(this.$route.fullPath);
                this.$store.commit("blog/SET_POSTS", data.posts);
            } catch (e) {}
        }
    }
};
</script>

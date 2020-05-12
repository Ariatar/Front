<template>
    <blog-page :items-popular="popularPosts" />
</template>

<script>
export default {
    name: "BlogCategory",
    layout: "page",

    async validate({ params, store }) {
        await store.dispatch("blog/GET_CATEGORIES");
        return store.state.blog.categories.some(
            category => category.url === `/blog/c/${params.url}`
        );
    }
};
</script>

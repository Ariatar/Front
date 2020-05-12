<template>
    <course-page :categories="categories"/>
</template>

<script>
    import coursePageMixin from '~/mixins/coursePageMixin'

    export default {
        name: 'Course',
        layout: 'page',
        mixins: [coursePageMixin]
    }
</script>

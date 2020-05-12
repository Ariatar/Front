<template>
    <div class="page">
        <the-header/>
        <nuxt/>
        <the-footer v-if="true"/>
    </div>
</template>

<script>
    import TheHeader from '~/components/common/TheHeader'
    import TheFooter from '~/components/common/TheFooter'
    import PageMeta from '~/mixins/PageMeta'
    import { mapState } from 'vuex'

    export default {
        components: {
            TheHeader,
            TheFooter
        },
        mixins: [PageMeta],
        computed: {
            ...mapState({
                topHeight: state => state.topHeight
            })
        }
    }
</script>

<style lang="scss">
    .page {
        & > .container {
            background: #fff;
        }
    }
</style>

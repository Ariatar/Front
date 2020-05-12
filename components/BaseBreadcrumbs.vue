<template>
    <div class="breadcrumbs">
        <ul class="breadcrumbs_list">
            <li class="breadcrumbs_item">
                <n-link
                    :to="localePath('index')"
                    class="breadcrumbs_link">
                    <svg class="icon">
                        <use xlink:href="/img/sprite.svg#home"/>
                    </svg>
                </n-link>
            </li>
            <li
                v-for="(item, index) in items"
                :key="index"
                class="breadcrumbs_item">
                <n-link
                    v-if="item.link && isLinks"
                    :to="localePath(item.link)"
                    class="breadcrumbs_link">
                    {{ item.name }}
                </n-link>
                <span
                    v-else
                    class="breadcrumbs_name">
                    {{ item.name }}
                </span>
            </li>
        </ul>
        <slot name="prepend"/>
    </div>
</template>

<script>
    export default {
        name: 'BaseBreadcrumbs',
        props: {
            items: {
                type: Array,
                default: () => ([])
            }
        },
        computed: {
            isLinks() {
                return this.items.length > 1
            }
        }
    }
</script>

<style lang="scss">
    .breadcrumbs {
        padding: 15px 0 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @include media-breakpoint-up(md) {
            padding: 40px 0 0 0;
        }

        &_list {
            @include reset-list();
            display: flex;
            align-items: center;
        }

        &_item {
            position: relative;
            padding-right: 30px;
            display: inline-block;

            &:not(:last-child)::after {
                content: '';
                display: block;
                height: 4px;
                width: 4px;
                border-top: 1px solid $grey;
                border-right: 1px solid $grey;
                transform: translate(0, -50%) rotate(45deg);
                position: absolute;
                top: 50%;
                right: 15px;
            }
        }

        &_link {
            font-size: 12px;
            line-height: 15px;
            color: $dark-grey;
            transition: .25s ease;

            &:hover {
                color: $dark-grey;
                opacity: .5;
                text-decoration: none;
            }
        }

        &_name {
            font-size: 12px;
            line-height: 15px;
            color: $dark-grey;
        }
    }
</style>

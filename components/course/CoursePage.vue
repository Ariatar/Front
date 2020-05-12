<template>
    <div>
        <div class="container bg-white search-container">
            <div class="wrapper">
                <base-breadcrumbs :items="breadcrumbs"/>
                <div class="search-block">
                    <div class="header-2 search-block_title">
                        Категории
                    </div>
                    <div class="general-text">
                        В нашей библиотеке есть курсы по всем направлениям: от мастер-классов по кулинарии, до полугодового обучения в лучших школах страны.
                    </div>
                    <base-search-panel
                        :dropdown-items="searchTypes"
                        :show-drop-down="true"
                        input-placeholder="Чему вы хотите научиться?"
                        drop-down-placeholder="В каком формате?"
                        btn-text="Найти курсы"
                        @onSearch="search($event)"/>
                </div>
            </div>
        </div>
        <div class="container bg-white pt pb3">
            <div class="wrapper">
                <div class="spacer"></div>
                <div
                    v-if="categories"
                    class="row">
                    <div
                        v-for="(item, index) in categories"
                        :key="index"
                        class="col-lg-3">
                        <n-link
                            :to="localePath({ path: item.url})"
                            class="category_block">
                            <div
                                :style="{ 'background': item.hex_color }"
                                class="category_icon">
                                <img
                                    :src="item.image"
                                    :alt="item.title">
                            </div>
                            <div class="category_info">
                                <div class="category_title header-6">
                                    {{ item.title }}
                                </div>
                                <div
                                    v-if="item.count"
                                    class="general-text category_count">
                                    {{ item.count }}
                                    {{ parseCount(item.count) }}
                                </div>
                            </div>
                        </n-link>
                        <ul class="category_list">
                            <li
                                v-for="(itemCat, indexCat) in item.sub_sections"
                                :key="indexCat">
                                <n-link
                                    :to="localePath({ path: itemCat.url})"
                                    class="category_link general-text">
                                    <span v-if="indexCat < item.sub_sections.length - 1">
                                        {{ itemCat.title }},
                                    </span>
                                    <span v-else>
                                        {{ itemCat.title }}
                                    </span>
                                </n-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    v-if="!categories.length && isSearchPage"
                    class="text-center">
                    <div class="header-4 mb-1">Нет совпадений</div>
                    <p class="general-text">
                        К сожалению мы ничего не смогли найти по твоему запросу
                    </p>
                    <div
                        class="text-center">
                        <n-link
                            :to="localePath({path: '/course'})"
                            class="btn btn--primary">
                            Смотреть все Категории
                        </n-link>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="mb b">
                    <div class="banner banner--long">Рекламный баннер 345х100</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CoursePage',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            categories: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data: () => ({
            breadcrumbs: [
                {
                    link: '/course',
                    name: 'Категории'
                }
            ],
            searchTypes: [
                {
                    key: null,
                    label: 'Все'
                },
                {
                    key: 1,
                    label: 'Онлайн'
                },
                {
                    key: 0,
                    label: 'Оффлайн'
                }
            ]
        }),
        computed: {
            isSearchPage() {
                return this.type === 'search'
            }
        },
        methods: {
            parseCount(n) {
                n = Math.abs(n) % 100;
                const nD = n % 10;

                if (nD > 1 && nD < 5) {
                    return 'курса';
                }
                if (nD === 1) {
                    return 'курс';
                }

                return 'курсов';
            },
            search(event) {
                this.$router.push(this.localePath(
                    {
                        path: '/course/search',
                        query: event
                    }
                ));
            }
        }
    }
</script>

<style lang="scss">
    .category {
        &_icon {
            min-width: 50px;
            height: 50px;
            display: flex;
            border-radius: 50%;
            margin: 0 20px 0 0;

            img {
                filter: brightness(0) invert(1);
                margin: auto;
            }
        }

        &_block {
            display: flex;

            @include media-breakpoint-up(lg) {
                min-height: 76px;
            }

            &:hover {
                text-decoration: none;
            }
        }

        &_info {
            flex: 1;
        }

        &_title {
            letter-spacing: -.02em;
            &:hover {
                color: $black;
                text-decoration: none;
            }
        }

        &_list {
            @include reset-list();
            margin: 20px 0;
            li {
                display: inline-block;
                margin: 0 10px 10px 0;
            }
        }

        &_link {
            border-bottom: 1px solid $light-grey;
            padding: 0 0 2px 0;
            transition: border .15s ease-in-out;

            &:hover {
                color: $dark-grey;
                text-decoration: none;
                border-bottom: 1px solid $primary;
            }
        }
    }

    .b {
        .banner {
            display: flex !important;
        }
    }
</style>

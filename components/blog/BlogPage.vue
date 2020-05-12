<template>
    <div>
        <div class="container bg-white search-container">
            <div class="wrapper">
                <base-breadcrumbs />
                <div class="search-block">
                    <div class="header-2 search-block_title">
                        Блог
                    </div>
                    <div class="general-text">
                        Обсуждайте, делитесь своими впечатлениями, помогайте
                        друг-другу и развивайтесь!
                    </div>
                    <div v-if="false" class="new-post btn btn--icon">
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#create" />
                        </svg>
                        <span>
                            Написать статью
                        </span>
                    </div>
                    <base-search-panel
                        input-placeholder="Поиск статей и новостей"
                        btn-text="Найти статью"
                    />
                    <div id="posts" class="blog-anchor"></div>
                </div>
            </div>
        </div>
        <div class="container bg-white pt pb3 padding">
            <blog-slider />
            <div class="wrapper">
                <div class="spacer"></div>
                <div class="row">
                    <div ref="aside" class="col-md-4 col-lg-3">
                        <div class="blog-aside">
                            <blog-side>
                                <template v-slot:tags>
                                    <div class="header-6">
                                        Популярные теги
                                    </div>
                                    <div class="divder"></div>
                                    <blog-tags />
                                </template>
                            </blog-side>
                            <div class="spacer d-none d-md-block"></div>
                            <div class="d-none d-md-block">
                                <div class="banner banner--side">
                                    Рекламный баннер 270х360
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <div class="banner banner--square d-sm-none">
                            Рекламный баннер 345х250
                        </div>
                        <div
                            class="d-md-flex justify-content-between align-items-center"
                        >
                            <div
                                class="d-sm-none d-md-block header-6 blog-subtitle"
                            >
                                Статьи блога
                            </div>
                            <div class="d-none d-md-block">
                                <blog-sort />
                            </div>
                        </div>
                        <div class="d-none d-md-block divder"></div>
                        <div id="search"></div>

                        <template>
                            <div class="posts">
                                <div>
                                    <blog-post :item="item" />
                                    <div class="mb d-sm-none">
                                        <div class="banner banner--long">
                                            Рекламный баннер 345х100
                                        </div>
                                    </div>
                                    <div class="mb d-none d-sm-block">
                                        <div class="banner banner--long">
                                            Рекламный баннер 870х100
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                <button class="btn btn-more">
                                    <svg class="icon">
                                        <use
                                            xlink:href="/img/sprite.svg#dropdown"
                                        />
                                    </svg>
                                    Показать еще
                                </button>
                            </div>
                        </template>
                        <div class="text-center">
                            <div class="header-4 mb-1">Нет совпадений</div>
                            <p class="general-text">
                                К сожалению мы ничего не смогли найти по твоему
                                запросу
                            </p>
                            <div class="text-center">
                                <n-link class="btn btn--primary">
                                    Смотреть все статьи
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import _isEqual from "lodash/isEqual";

import BlogSlider from "~/components/blog/BlogSlider";
import BlogPost from "~/components/blog/BlogPost";
import BlogSide from "~/components/blog/BlogSide";
import BlogSort from "~/components/blog/BlogSort";
import BlogTags from "~/components/blog/BlogTags";

export default {
    name: "BlogPage",
    components: {
        BlogSlider,
        BlogPost,
        BlogSide,
        BlogSort,
        BlogTags
    },
    props: {
        type: {
            type: String,
            default: "default"
        }
    },
    data: () => ({
        breadcrumbs: [
            {
                link: "blog",
                name: "Блог"
            }
        ],
        endpoint: null
    }),

    methods: {}
};
</script>

<style lang="scss">
.padding {
    padding-bottom: 170px !important;
}

.blog-anchor {
    height: 20px;
}

.blog-aside {
    @include media-breakpoint-up(md) {
        position: sticky;
    }
}

.new-post {
    padding-left: 0;
    padding-right: 0;
    position: relative;
    top: 5px;

    @include media-breakpoint-up(sm) {
        position: absolute;
        right: 30px;
        top: 0;
        padding-left: 20px;
        padding-right: 20px;
    }
}

.blog-subtitle {
    @include media-breakpoint-down(sm) {
        margin: 20px 0;
    }
}
</style>

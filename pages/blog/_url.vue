<template>
    <div class="container bg-white">
        <article
            v-if="post"
            class="wrapper article">
            <base-breadcrumbs :items="breadcrumbs"/>
            <div
                class="mt d-lg-none post-cat general-text">
                <div class="post-cat_icon">
                    <div
                        :style="{ 'background': post.hex_color }"
                        class="icon-circle icon-circle--bg">
                        <img
                            :src="post.section_image"
                            :alt="post.section_title">
                    </div>
                </div>
                {{ post.section_title }}
            </div>
            <div class="main-title">
                <h1
                    class="header-2"
                    v-html="post.title">
                </h1>
                <div
                    class="blog-text"
                    v-html="stripTags(post.short_description)">
                </div>
            </div>
            <div class="divder d-none d-md-block"></div>
            <div class="d-md-flex justify-content-between">
                <div class="d-md-flex">
                    <base-info-panel
                        class="mt-2 mt-md-0 order-md-2"
                        :favorite="post.favorite"
                        :views="post.views"
                        :likes="likes"
                        :show-favorite="false"/>
                    <div class="d-md-none divder divder--small"></div>
                    <div class="avatar order-md-1 mr">
                        <template v-if="post.first_name && post.last_name">
                            <img
                                class="avatar_img"
                                :src="post.user_image"
                                alt="">
                            <span class="avatar_name">
                                {{ post.first_name }} {{ post.last_name }}
                            </span>
                        </template>
                    </div>
                </div>
                <div class="d-none d-lg-flex">
                    <div
                        class="post-cat general-text">
                        <div class="post-cat_icon">
                            <div
                                :style="{ 'background': post.hex_color }"
                                class="icon-circle icon-circle--bg">
                                <img
                                    :src="post.section_image"
                                    :alt="post.section_title">
                            </div>
                        </div>
                        {{ post.section_title }}
                    </div>
                </div>
            </div>
            <div class="article_preview">
                <img
                    :src="post.post_image"
                    alt="">
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-3">
                    <div
                        :style="{top: `${topHeight}px`}"
                        class="blog-aside">
                        <blog-side
                            type-filter="onlyFilter"
                            type-menu="inArticle"/>
                        <div class="d-none d-md-block mb">
                            <div class="banner banner--side">
                                Рекламный баннер 270х360
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-9">
                    <div class="article_content clearfix">
                        <div class="d-none d-md-block float-right ml mb">
                            <div class="banner banner--side">
                                Рекламный баннер 270х360
                            </div>
                        </div>
                        <div v-html="post.description"></div>
                        <div class="d-md-none mb">
                            <div class="banner banner--square">
                                Рекламный баннер 345х250
                            </div>
                        </div>
                        <div class="mb">
                            <div
                                class="d-sm-none">
                                <div class="banner banner--long">Рекламный баннер 345х100</div>
                            </div>
                            <div
                                class="d-none d-sm-block">
                                <div class="banner banner--long">Рекламный баннер 870х100</div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="post.tags.length"
                        class="tags">
                        <template v-for="(item, index) in post.tags">
                            <n-link
                                v-if="item.url"
                                :key="index"
                                :to="localePath({path: item.url, hash: 'posts'})"
                                class="tag"
                                @click.native="clickTag">
                                {{ item.title }}
                            </n-link>
                            <div
                                v-else
                                :key="index"
                                class="tag"
                                @click="clickTag">
                                {{ item.title }}
                            </div>
                        </template>
                    </div>
                    <div class="divder"></div>
                    <div class="align-items-center d-flex justify-content-between">
                        <div
                            class="liking"
                            :class="{'active': !like}"
                            @click="likeing">
                            <svg
                                v-if="like"
                                class="icon">
                                <use xlink:href="/img/sprite.svg#liking"/>
                            </svg>
                            <svg
                                v-else
                                class="icon">
                                <use xlink:href="/img/sprite.svg#liking-black"/>
                            </svg>
                            <span class="general-text">
                                {{ likes }}
                            </span>
                        </div>
                        <social-sharing
                            :url="shareLink"
                            :title="post.title"
                            :description="shareLink"
                            :quote="stripTags(post.short_description)"
                            :media="post.post_image"
                            network-tag="li"
                            inline-template>
                            <ul class="social">
                                <network
                                    network="facebook"
                                    class="social_item">
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#facebook"/>
                                    </svg>
                                </network>
                                <network
                                    network="twitter"
                                    class="social_item">
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#twitter"/>
                                    </svg>
                                </network>
                                <network
                                    network="telegram"
                                    class="social_item">
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#telegram"/>
                                    </svg>
                                </network>
                                <network
                                    network="vk"
                                    class="social_item">
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#vk"/>
                                    </svg>
                                </network>
                                <network
                                    network="linkedin"
                                    class="social_item">
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#linkedin"/>
                                    </svg>
                                </network>
                            </ul>
                        </social-sharing>
                    </div>
                    <div class="divder"></div>
                    <h1 class="bold">Похожие cтатьи</h1>

                    <div class="row">
                        <div class="col-sm-6">
                            <div
                                class="popular-post"
                                :style="{'background-image': `url('${post.previous.image}')`}">
                                <n-link
                                    :to="localePath({path: post.previous.url})"
                                    class="popular-post_title">
                                    {{ post.previous.title }}
                                </n-link>
                                <div class="popular-post_button">
                                    <base-info-panel
                                        :views="post.previous.views"
                                        :likes="post.previous.likes"/>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-sm-block col-sm-6 mt-3 mt-sm-0">
                            <div
                                class="popular-post"
                                :style="{'background-image': `url('${post.next.image}')`}">
                                <n-link
                                    :to="localePath({path: post.next.url})"
                                    class="popular-post_title">
                                    {{ post.next.title }}
                                </n-link>
                                <div class="popular-post_button">
                                    <base-info-panel
                                        :views="post.next.views"
                                        :likes="post.next.likes"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt mb">
                            <div
                                class="d-sm-none">
                                <div class="banner banner--long">Рекламный баннер 345х100</div>
                            </div>
                            <div
                                class="d-none d-sm-block">
                                <div class="banner banner--long">Рекламный баннер 870х100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="false"
                class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-9">
                    <comments/>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import Comments from "~/components/comments/Comments";
    import BlogSide from '~/components/blog/BlogSide'

    export default {
        name: 'BlogArticle',
        layout: 'page',
        components: {
            Comments,
            BlogSide
        },
        head () {
            return {
                title: this.stripTags(this.post.title),
                meta: [
                    { hid: 'description', name: 'description', content: this.stripTags(this.post.short_description) },
                    { hid: 'robots', name: 'robots', content: 'index, follow' },
                    { hid: 'og:title', property:'og:title', content: this.stripTags(this.post.title) },
                    { hid: 'og:description', property:'og:description', content: this.stripTags(this.post.short_description) },
                    { hid: 'og:url', property:'og:url', content: this.shareLink },
                    { hid: 'og:image', property:'og:image', content: this.post.post_image },
                    { hid: 'og:type', property:'og:type', content: 'article' },
                    { hid: 'twitter:title', property:'twitter:title', content: this.stripTags(this.post.title) },
                    { hid: 'twitter:description', property:'twitter:description', content: this.stripTags(this.post.short_description) },
                    { hid: 'twitter:image', property:'twitter:image', content: this.post.post_image },
                    { hid: 'twitter:card', property:'twitter:card', content: 'summary_large_image' }
                ]
            }
        },
        async fetch ({ store }) {
            await store.dispatch('blog/GET_CATEGORIES')
        },
        async asyncData(context) {
            async function getPost() {
                try {
                    const { data } = await context.$axios.get(context.route.path)
                    return data
                } catch (e) {
                    if (e.status === 404) {
                        context.redirect('/404')
                    }
                }
            }
            return {
                post: await getPost()
            }
        },
        data: () => ({
            likes: 0,
            likesStorage: [],
            like: false,
            shareLink: '',
            hashtags: '',
            breadcrumbs: [
                {
                    link: 'blog',
                    name: 'Блог'
                },
                {
                    name: 'Статья'
                }
            ]
        }),
        methods: {
            async likeing() {
                try {
                    let body = {
                        id: this.post.id,
                        type: this.post.type
                    }

                    this.like ? body.operation = 'decr' : body.operation = 'inc'

                    const res = await this.$axios.post('like',  body)
                    if (res.status === 201) {
                        if (this.like) {
                            this.likesStorage = this.likesStorage.filter(item => item !== this.post.id)
                        } else {
                            this.likesStorage.push(this.post.id)
                        }

                        localStorage.setItem('postLike', JSON.stringify(this.likesStorage));

                        this.like = !this.like
                        this.like ? this.likes++ : this.likes--
                    }
                } catch (e) {

                }
            },
            setHashtags() {
                if (this.post && this.post.tags.length) {
                    this.hashtags = []
                    this.post.tags.forEach((item) => {
                        this.hashtags.push(item.title.toLowerCase())
                    })
                    this.hashtags = this.hashtags.join(',')
                }
            },
            clickTag() {
                this.$store.commit('blog/SET_REDIRECT_FROM', false);
            },
            setLikes() {
                if (this.post && this.post.likes) {
                    this.likes = this.post.likes
                }

                const localStorageLikes = localStorage.getItem('postLike')
                if (localStorageLikes) {
                    this.likesStorage = JSON.parse(localStorageLikes)
                    if (this.likesStorage.includes(this.post.id)) {
                        this.like = true
                    }
                }
            },
            setShareUrl() {
                this.shareLink = location.href
            }
        },
        created() {
            this.setHashtags()
            this.$store.commit('blog/SET_SHOW_FILTER', true)
            this.$store.commit('blog/SET_REDIRECT_FROM', true);
            this.$store.commit('blog/SET_TYPE_FILTER', 'onlyFilter');
        },
        mounted() {
            this.setLikes()
            this.setShareUrl()
        },
        destroyed() {
            this.$store.commit('blog/SET_SHOW_FILTER', false)
        }
    }
</script>

<style lang="scss">
    .liking {
        cursor: pointer;
        display: flex;
        align-items: center;

        &.active {
            .subtitle {
                color: $black;
            }
        }
        .icon {
            width: 30px;
            height: 30px;
            margin: 0 5px 0 0;
        }
    }
    .article {
        &_preview {
            overflow: hidden;
            margin: 25px 0;
            height: 300px;
            position: relative;

            img {
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &_content {
            padding: 0 0 10px 0;

            h1 {
                font-size: 2.5rem !important;

                & * {
                    font-size: 2.5rem !important;
                }
            }

            h1, h2, h3, h4, h5, h4 {
                font-weight: 400 !important;
                color: $black !important;
                font-family: "Roboto", sans-serif !important;

                & * {
                    font-weight: 400 !important;
                    color: $black !important;
                    font-family: "Roboto", sans-serif !important;
                }
            }
            p {
                margin: 0 0 20px 0;
                font-family: "Roboto", sans-serif !important;

                & * {
                    font-family: "Roboto", sans-serif !important;
                }
            }
            p, ul, ol {
                font-weight: 300;
                font-size: 20px;
                line-height: 30px;
                letter-spacing: -0.02em;
            }

            img {
                max-width: 100%;
                margin-bottom: 20px;
            }

            video {
                margin-bottom: 20px;
            }

            blockquote {
                color: $black;
                border-left: 1px solid $light-grey;
                padding: 0 0 0 30px;
                margin: 0 0 15px 0;

                & > * {
                    font-size: 20px;
                    font-weight: 400;
                }

                cite {
                    font-size: 16px;
                    font-style: normal;
                    color: $grey;
                    position: relative;
                    padding: 0 0 0 30px;
                    display: block;

                    &::before {
                        content: '';
                        display: block;
                        height: 1px;
                        width: 15px;
                        background: $grey;
                        position: absolute;
                        left: 0;
                        top: 50%;
                    }
                }
            }

            table {
                width: 100% !important;
                border: 0 !important;
                text-align: center;
                margin: 0 0 20px 0;

                tbody {
                    tr:nth-child(odd) {
                        background: #f6f5f3;
                    }

                    tr:nth-child(even) {
                        background: #fff;
                    }
                }

                td {
                    padding: 11px 3px;
                    border: 0 !important;
                }
            }
        }
    }
.bold {
    padding: 30px 0px;
    margin-top: -20px;
    font-stretch: bold;
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    color: #2f4858;
}
    .post-cat {
        display: flex;
        align-items: center;
        color: $black;

        &:hover {
            color: $black;
        }

        &_icon {
            margin: 0 10px 0 0;
        }
    }
</style>

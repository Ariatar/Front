<template>
    <div
        id="top"
        ref="top"
        class="top">
        <div class="d-none d-sm-block">
            <div class="banner banner--header">
                Рекламный баннер 1920х50
            </div>
        </div>
        <div class="d-sm-none">
            <div class="banner banner--header">
                Рекламный баннер 375х50
            </div>
        </div>
        <header class="header header--fixed">
            <div class="header_container container-custom">
                <div
                    :class="{'header-block--full': isOpenSearch}"
                    class="header-block">
                    <n-link
                        class="logo"
                        :to="localePath('index')"
                        @click.native="scrollTop()"/>
                    <template v-if="true">
                        <div class="header_item d-lg-flex d-none">
                            <span
                                class="pointer header_hover"
                                @click="toggleSearch">
                                <svg class="icon icon-search">
                                    <use xlink:href="/img/sprite.svg#search"/>
                                </svg>
                            </span>
                        </div>
                        <div
                            v-show="!isOpenSearch"
                            class="header_dropdown header_hover">
                            Все курсы
                            <svg class="icon">
                                <use xlink:href="/img/sprite.svg#dropdown"/>
                            </svg>
                        </div>
                        <div
                            v-show="isOpenSearch"
                            class="search">
                            <input
                                class="search_field"
                                placeholder="werwer"
                                type="text">
                            <button
                                class="search_btn"
                                @click="toggleSearch">
                                <svg class="icon">
                                    <use xlink:href="/img/sprite.svg#times"/>
                                </svg>
                            </button>
                        </div>
                    </template>
                </div>
                <template v-if="true">
                    <div
                        v-show="!isOpenSearch"
                        :class="{'header-mobile--open': isOpenMenu}"
                        class="header-block header-mobile">
                        <div class="header_menu">
                            <div class="header_item toggle-list">
                                <span class="header_dropdown">
                                    Меню
                                    <svg class="icon">
                                        <use xlink:href="/img/sprite.svg#dropdown"/>
                                    </svg>
                                </span>
                            </div>
                            <nav class="menu">
                                <ul class="menu_list">
                                    <li
                                        v-for="(item, index) in headerMenu"
                                        :key="index"
                                        class="menu_item">
                                        <n-link
                                            :to="item.url"
                                            class="menu_link header_hover"
                                            @click.native="clickHandler">
                                            {{ item.title }}
                                        </n-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header_item">
                            <span class="header_dropdown header_hover">
                                Москва
                                <svg class="icon">
                                    <use xlink:href="/img/sprite.svg#dropdown"/>
                                </svg>
                            </span>
                        </div>
                        <div class="header_item d-none d-lg-flex header_hover">
                            <div class="notify">
                                <svg class="icon notify_icon">
                                    <use xlink:href="/img/sprite.svg#notification"/>
                                </svg>
                                <div class="notify_count">
                                    45
                                </div>
                            </div>
                        </div>
                        <!--<div class="header_item">
                            <n-link
                                :to="'#'"
                                class="avatar header_avatar">
                                <img
                                    class="avatar_img"
                                    src="https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png"
                                    alt="">
                                <span class="avatar_name">
                                    Анастасии Иващенко
                                </span>
                            </n-link>
                        </div>-->
                        <button class="header_btn btn btn--outline">
                            Войти
                        </button>
                        <button class="header_btn btn btn--primary">
                            Добавить курс
                        </button>
                    </div>
                    <div class="d-flex d-lg-none">
                        <div class="notify ml-4">
                            <svg class="icon notify_icon">
                                <use xlink:href="/img/sprite.svg#notification"/>
                            </svg>
                            <div class="notify_count">
                                45
                            </div>
                        </div>
                        <div class="ml-4">
                            <svg class="icon">
                                <use xlink:href="/img/sprite.svg#user"/>
                            </svg>
                        </div>
                        <div class="toggle-menu ml-4">
                            <span @click="toggleMenu">
                                <svg class="icon">
                                    <use xlink:href="/img/sprite.svg#menu"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </template>
            </div>
        </header>
        <client-only>
            <blog-filter v-if="isShowFilter"/>
        </client-only>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';
    import BlogFilter from '~/components/blog/BlogFilter'

    export default {
        name: 'TheHeader',
        components: {
            BlogFilter
        },
        data: () => ({
            isOpenSearch: false,
            isOpenMenu: false
        }),
        computed: {
            ...mapGetters(['headerMenu']),
            ...mapState({
                isShowFilter: state => state.blog.isShowFilter
            })
        },
        methods: {
            toggleSearch() {
                // this.isOpenSearch = !this.isOpenSearch
            },
            toggleMenu() {
                this.isOpenMenu = !this.isOpenMenu
            },
            scrollTop() {
                if (this.$route.path === '/') {
                    window.scrollTo(0,0)
                }
            },
            clickHandler() {
                setTimeout(() => {
                    this.isOpenMenu = false
                }, 200)
                this.$store.commit('blog/SET_ENABLE_SCROLL', false)
            },
            stickyHeader() {
                window.addEventListener('scroll', stickyHeader);
                window.addEventListener('resize', stickyHeader);

                const _this = this
                const header = document.querySelector("header.header")
                const top = document.querySelector(".top")
                const page = document.querySelector('.page')
                const banner = document.querySelector('.top .banner')
                const classFixed = 'header--fixed'

                function stickyHeader() {
                    if (window.pageYOffset > header.offsetTop - banner.offsetHeight) {
                        header.classList.remove(classFixed);
                    } else {
                        header.classList.add(classFixed);
                    }

                    if (window.pageYOffset > top.offsetTop) {
                        top.classList.add('position-fixed');
                        page.style.paddingTop = `${top.offsetHeight}px`
                    } else {
                        top.classList.remove('position-fixed');
                        page.style.paddingTop = 0
                    }

                    _this.$store.commit('SET_TOP_HEIGHT', top.offsetHeight)
                }

                if (window.scrollY > 0) {
                    stickyHeader()
                }

                this.$store.commit('SET_TOP_HEIGHT', top.offsetHeight)
            }
        },
        mounted () {
            this.stickyHeader()
        }
    }
</script>

<style lang="scss">
    .top {
        left: 0;
        right: 0;
        top: 0;
        z-index: 200;
    }

    .header {
        display: flex;
        align-items: center;
        height: $header-height;
        transition: background .25s ease;
        border-bottom: 1px solid $light-grey;
        background: #fff;

        @include media-breakpoint-up(lg) {
            border: 0;
        }

        &_container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }

        @include media-breakpoint-up(lg) {
            height: $header-height-lg;
        }


        &--fixed {
            @include media-breakpoint-up(lg) {
                background: transparent;

                .logo {
                    background-image: url('~assets/logos/logo_white.svg');
                }

                .header_item {
                    border-left: 1px solid rgba(255,255,255,.3);
                }

                .header_dropdown {
                    color: #fff;

                    .icon {
                        stroke: #fff;
                    }
                }

                .notify_icon {
                    fill: #fff;
                }

                .icon-search {
                    stroke: #fff;
                }

                .btn--primary {
                    background: #fff;
                    color: $primary-dark;

                    &:hover {
                        background: #fff;
                        color: $primary-dark;
                    }
                }

                .btn--outline {
                    color: #fff;
                    background: transparent;
                    border-color: #fff;
                }

                .header_avatar {
                    color: #fff;
                }
            }

            @media (min-width: 1281px) {
                .menu_link {
                    color: #fff;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }

        &_item {
            border-left: 1px solid $light-grey;
            padding: 0 0 0 20px;
            margin: 0 20px;
            display: flex;
            align-items: center;
            min-height: 30px;

            & + .header_item {
                margin: 0 20px 0 0;
            }
        }

        &_menu {
            position: relative;

            &:hover {
                .menu {
                    display: block;
                }
            }
        }

        &_dropdown {
            color: $dark-grey;
            align-items: center;
            display: flex;

            .icon {
                margin: 0 0 0 8px;
                fill: transparent;
                stroke: $dark-grey;
            }
        }

        &_avatar {
            color: $dark-grey;
        }

        &_btn {
            width: 160px;
            margin: 0 0 20px 0;

            @include media-breakpoint-up(lg) {
                margin: 0;

                & + .header_btn {
                    margin: 0 0 0 20px;
                };
            }
        }

        &_hover {
            cursor: pointer;

            &:hover {
                opacity: 0.6;
                transition: opacity .15s ease-in-out;
            }
        }
    }

    .header-mobile {
        @include media-breakpoint-down(md) {
            position: fixed;
            z-index: 2000;
            top: 100px;
            right: 0;
            background: #fff;
            flex-direction: column;
            align-items: flex-start;
            padding: 0 20px;
            transform: translate(100%, 0);
            transition: transform 0.3s ease-in-out;
            overflow: auto;

            &--open {
                transform: translate(0, 0);
            }

            .header_item {
                border: 0;
                padding: 0;
                margin: 10px 0;
            }
        }
    }

    .header-block {
        display: flex;

        @include media-breakpoint-up(lg) {
            align-items: center;
        }

        &--full {
            width: 100%;
        }
    }

    .logo {
        background-image: url('~assets/logos/logo.svg');
        height: 20px;
        width: 90px;
        display: block;
        margin: 3px 10px 0 0;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 124%;

        @include media-breakpoint-up(lg) {
            margin: 0;
        }

        @include media-breakpoint-up(xl) {
            width: 225px;
            margin: 0;
            background-size: contain;
        }

        @media (max-width: 360px) {
            width: 58px;
            background-size: 126%;
        }
    }

    .icon-search {
        color: $dark-grey;

        &_search {
            margin: 0 20px;
        }
    }

    .menu {
        @media (max-width: 1290px) and (min-width: 992px)  {
            display: none;
            position: absolute;
            background: #fff;
        }

        &_list {
            @include reset-list();

            @media (max-width: 1290px) and (min-width: 992px)  {
                border: 1px solid $light-grey;
            }

            @media (min-width: 1291px) {
                display: flex;
            }
        }

        &_item {
            @media (max-width: 1290px) and (min-width: 992px)  {
                margin: 0 15px;
            }

            @media (min-width: 1291px) {
                margin: 0 10px;

                &:first-child {
                    margin: 0 10px 0 0;
                }

                &:last-child {
                    margin: 0  0 0 10px;
                }
            }
        }

        &_link {
            color: $dark-grey;
            display: block;
            line-height: 25px;

            @media (max-width: 1290px) and (min-width: 992px)  {
                line-height: 40px;
            }

            &:hover {
                color: $dark-grey;
                text-decoration: none;
            }
        }
    }

    .notify {
        position: relative;

        &_icon {
            fill: $dark-grey;
        }

        &_count {
            height: 14px;
            min-width: 14px;
            position: absolute;
            font-size: 9px;
            color: #fff;
            text-align: center;
            background: $primary;
            border-radius: 7px;
            top: 0;
            left: 9px;
            line-height: 14px;
            padding: 0 3px;
        }
    }

    .search {
        width: 100%;
        position: relative;

        &_field {
            width: 100%;
            background: transparent;
            border: 0;
            outline: 0;
            color: #fff;
            padding: 0 16px 0 0;

            @include placeholder {
                font-style:italic;
                color: white;
                font-weight:100;
            }
        }

        &_btn {
            position: absolute;
            right: 0;
            @include reset-button()
        }
    }

    .icon-search {
        fill: transparent;
        stroke: $dark-grey;
    }

    .toggle-list {
        display: none;
        margin: 0;

        @media (min-width: 992px) and (max-width: 1290px) {
            display: flex;
        }
    }

    .toggle-menu {

    }
</style>

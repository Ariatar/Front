<template>
    <footer class="footer">
        <div class="container bg-white position-relative">
            <div class="wrapper">
                <div
                    v-if="true"
                    class="row">
                    <div
                        v-for="(item, index) in footerMenu"
                        :key="index"
                        :class="[{'col-lg-3': index === 2}, {'col-lg-2': index !== 2}]"
                        class="col-sm-4 footer_group">
                        <div class="footer_title header-6">
                            {{ item.title }}
                        </div>
                        <ul class="footer_menu">
                            <li
                                v-for="(itemMenu, indexMenu) in item.submenu"
                                :key="indexMenu">
                                <n-link
                                    :to="itemMenu.url"
                                    class="footer_link general-text">
                                    {{ itemMenu.title }}
                                </n-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="footer_title header-6">
                            Подписка на рассылку
                        </div>
                        <div class="subscribe">
                            <div
                                class="general-text">
                                Оставьте свою почту, чтобы получать новости, акции и актуальные курсы
                            </div>
                            <ValidationObserver
                                ref="subscribe"
                                tag="form"
                                class="subscribe_form"
                                @submit.prevent="subscribe">
                                <ValidationProvider
                                    v-slot="{ errors, classes }"
                                    tag="div"
                                    class="field-card subscribe_field"
                                    name="Email"
                                    rules="required|email">
                                    <input
                                        id="subscribe"
                                        v-model="form.email"
                                        class="form-control"
                                        :class="classes"
                                        type="email">
                                    <label for="subscribe">Ваш email</label>
                                    <div class="invalid-feedback">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>

                                <button class="btn btn--primary subscribe_btn">
                                    Подписаться
                                </button>
                            </ValidationObserver>
                        </div>
                        <div class="footer_title header-6">
                            Мы в соцсетях
                        </div>
                        <ul class="social">
                            <li
                                v-for="(item, index) in social"
                                :key="index"
                                class="social_item">
                                <span :href="item.url">
                                    <svg class="icon">
                                        <use :xlink:href="`/img/sprite.svg#${item.icon}`"/>
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright container-custom">
            <div>
                <template v-if="true">
                    <n-link to="#">
                        Privacy Policy
                    </n-link>
                    <n-link to="#">
                        Terms & Conditions
                    </n-link>
                </template>
            </div>
            <div>
                © copyright 2020
            </div>
        </div>
        <div
            v-show="isShowScroll"
            v-scroll-to="'#top'"
            class="scroll-top">
            <span class="subtitle">
                ВВЕРХ
            </span>
            <svg class="icon">
                <use xlink:href="/img/sprite.svg#right-arrow"/>
            </svg>
        </div>
    </footer>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'TheFooter',
        data: () => ({
            isShowScroll: false,
            form: {
                email: null
            },
            social: [
                {
                    icon: 'facebook',
                    url: '#'
                },
                {
                    icon: 'twitter',
                    url: '#'
                },
                {
                    icon: 'telegram',
                    url: '#'
                },
                {
                    icon: 'vk',
                    url: '#'
                },
                {
                    icon: 'linkedin',
                    url: '#'
                }
            ]
        }),
        computed: {
            ...mapGetters(['footerMenu'])
        },
        methods: {
            subscribe() {
                this.form.email = null
                this.$refs.subscribe.reset()
            },
            toggleScroll() {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 1000) {
                        this.isShowScroll = true
                    } else {
                        this.isShowScroll = false
                    }
                });

            }
        },
        mounted() {
            this.toggleScroll()
        }
    }
</script>

<style lang="scss">
    .footer {
        .bg-white {
            padding-top: 60px;
            padding-bottom: 40px;
            border-top: 1px solid $light-grey;
        }

        &_group {
            margin: 0 0 20px 0;
        }

        &_title {
            margin: 0 0 5px 0;
        }

        &_menu {
            @include reset-list();

            li {
                padding: 3px 0;
            }
        }

        &_link {
            &:hover {
                color: $dark-grey;
            }
        }
    }

    .subscribe {
        width: 100%;
        margin: 8px 0 37px 0;

        &_form {
            display: flex;
            justify-content: space-between;
            margin: 20px 0 0 0;
            flex-direction: column;

            @media (min-width: 480px) {
               flex-direction: row;
            }
        }

        &_field {
            width: 100%;

            @media (min-width: 480px) {
                width: calc(100% - 170px);
            }
        }

        &_btn {
            margin: 20px 0 0 0;
            width: 100%;

            @media (min-width: 480px) {
                margin: 0 0 0 20px;
                width: 150px;
            }
        }
    }

    .copyright {
        height: 100px;
        display: -webkit-box;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-bottom: 20px;

        @media (min-width: 480px) {
            justify-content: space-between;
        }

        a {
            color: inherit;
            margin: 0 20px 0 0;
        }
    }

    .scroll-top {
        background: $primary-dark;
        height: 40px;
        display: inline-flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        position: fixed;
        right: 30px;
        bottom: -14px;
        transform: rotate(-90deg) translate(22px, 24px);
        text-transform: uppercase;
        border-radius: 50%;

        .subtitle {
            display: none;
        }

        .icon {
            fill: #fff;
        }

        @include media-breakpoint-up(sm) {
            background: #f5f6f7;
            right: 15px;
            bottom: 15px;
            border-radius: 0;

            &:hover {
                background: #f4fbfa;

                .subtitle {
                    color: $primary-dark;
                }

                .icon {
                    fill: $primary-dark;
                }
            }

            .subtitle {
                display: inline-block;
                color: $black;
                margin: 0 9px 0 0;
            }

            .icon {
                fill: $black;
            }
        }
    }
</style>

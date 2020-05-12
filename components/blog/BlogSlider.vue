<template>
    <div>
        <div class="wrapper">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="main-title header-6">
                    Популярные статьи
                </h1>
                <div class="carousel-controls d-flex">
                    <button
                        @click="$refs.carousel.slidePrev()">
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#left-arrow"/>
                        </svg>
                    </button>
                    <span class="d-flex">
                        <span>
                            {{ carousel.currentSlide }}
                        </span>
                        <span class="text-grey">
                            /{{ carousel.slidesCount }}
                        </span>
                    </span>
                    <button
                        @click="$refs.carousel.slideNext()">
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#right-arrow"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div
            class="overflow-hidden">
            <div class="wrapper-slider">
                <hooper
                    ref="carousel"
                    :settings="hooperSettings"
                    @slide="updateCarousel">
                    <slide
                        v-for="(item, index) in items"
                        :key="index"
                        :index="index">
                        <div
                            class="popular-post"
                            :style="{ 'background-image': `url('${item.post_image}')` }">
                            <n-link
                                :to="item.url"
                                class="popular-post_title">
                                {{ item.title }}
                            </n-link>
                            <div class="popular-post_button">
                                <base-info-panel
                                    :views="item.views"
                                    :likes="item.likes"/>
                                <base-favorite
                                    v-if="false"
                                    :favorite="item.favorite"/>
                            </div>
                        </div>
                    </slide>
                </hooper>
            </div>
        </div>
    </div>
</template>

<script>
    import { Hooper, Slide } from 'hooper';


    export default {
        name: "BlogSlider",
        props: {
            items: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        components: {
            Hooper,
            Slide
        },
        data: () => ({
            carousel: {
                currentSlide: 1,
                slidesCount: 6
            },
            hooperSettings: {
                itemsToShow: 1,
                infiniteScroll: true,
                wheelControl: false,
                breakpoints: {
                    1200: {
                        itemsToShow: 4
                    },
                    768: {
                        itemsToShow: 3
                    },
                    480: {
                        itemsToShow: 2
                    }
                }
            }
        }),
        methods: {
            updateCarousel() {
                const carousel = this.$refs.carousel
                this.carousel.currentSlide = carousel.currentSlide + 1
                this.carousel.slidesCount = carousel.slidesCount

                if (this.carousel.currentSlide > this.carousel.slidesCount) {
                    this.carousel.currentSlide = 1
                }

                if (this.carousel.currentSlide === 0) {
                    this.carousel.currentSlide = this.carousel.slidesCount
                }
            }
        }
    }
</script>

<style lang="scss">
    .carousel-controls {
        & > span {
            margin: 0 15px;

            @include media-breakpoint-up(sm) {
                margin: 0 30px;
            }
        }

        button {
            @include reset-button();
        }
    }

    .hooper {
        height: 260px !important;

        &-slide {
            & > div {
                margin: 0 20px;
            }
        }

        &:focus {
            outline: none;
        }
    }
</style>

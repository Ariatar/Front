<template>
    <div>
        <div
            v-for="item in allItems"
            :key="item.url"
            class="row">
            <div
                v-for="n in 13"
                :key="n"
                class="col-sm-6 col-lg-12">
                <div
                    :class="{ 'course-card--promo': n === 2 }"
                    class="course-card">
                    <div class="course-card_img">
                        <div class="img-card">
                            <img
                                class="img-card_img"
                                src="/img/image 20.png"
                                alt="">
                            <div
                                class="img-card_marker icon-marker"
                                style="background:#93df97;">
                                <img
                                    src="https://images.obuchenie.ru/files/u/laptop.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div class="course-card_dsc">
                        <div
                            v-if="n === 2 || n === 1 || n === 3"
                            class="course-card_label">
                            Promo
                        </div>
                        <div
                            :class="{ 'course-card_title--promo': n === 2 || n === 1 || n === 3 }"
                            class="course-card_title header-6">
                            Как нашичающему фрилансеру получить первый заказ?
                        </div>
                        <div class="course-card_text general-text">
                            Получите востребованную профессию frontend-разработчика. Реализуйте проекты уже во время обучения.
                        </div>
                        <div class="course-card_bottom">
                            <div class="course-card_author">
                                <div class="avatar">
                                    <img
                                        src="https://manager.obuchenie.ru/images/user/_1581952961.svg"
                                        class="avatar_img">
                                    <span>
                                        Анастасии Иващенко
                                    </span>
                                </div>
                            </div>
                            <div class="course-card_type general-text text-grey">
                                {{ item.title }}
                            </div>
                        </div>
                    </div>
                    <div class="course-card_info">
                        <div class="info-card">
                            <div class="info-card_inner">
                                <div class="info-card_item">
                                    <span class="info-card_rating">
                                        9,6
                                    </span>
                                    Превосходно
                                </div>
                                <div class="info-card_item info-card_item--reviews">
                                    12 отзывов
                                </div>
                            </div>
                            <base-favorite/>
                        </div>
                        <div class="course-card_data">
                            <div class="price-card">
                                <div class="price-card_amount">
                                    12 000
                                    <div class="price-card_currency">
                                        руб
                                    </div>
                                </div>
                                <div class="price-card_info">
                                    <div class="price-card_add">
                                        <span class="price-card_bonus">
                                            +200 бонусов
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="course-card_time course-card_date">
                                <svg class="icon icon-grey">
                                    <use xlink:href="/img/sprite.svg#calendar"/>
                                </svg>
                                <span class="general-text text-grey">
                                    13 ноября 2019
                                </span>
                            </div>
                            <div class="course-card_time course-card_duration">
                                <svg class="icon icon-grey">
                                    <use xlink:href="/img/sprite.svg#duration"/>
                                </svg>
                                <span class="general-text text-grey">
                                    4 часа
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-group" style="position: relative; left: 30%">
            <b-button
                style="right: 1px; background: white;border-style: none;"
                :disabled="page <= pages[0]"
                class="img-card_img"
                @click="page--">
                <img
                    style="color: #2F4858"
                    src="/img/VectorLeft.png"
                    alt="">
            </b-button>
            <div
                v-for="pageNumber in pages"
                :key="pageNumber"
                style="margin: 15px 10px; cursor: pointer; color: #667077;"
                @click="page = pageNumber">
                {{ pageNumber }}
            </div>
            <b-button
                style="left: 1px; background: white; border-style: none;"
                :disabled="page >= pages.length"
                class="img-card_img"
                @click="page++">
                <img
                    style="color: #2F4858"
                    src="/img/VectorRight.png"
                    alt="">
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            courses: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                prevButtonPage: '<',
                nextButtonPage: '>',
                page: 1,
                perPage: 1,
                pages: [1, 2, 3, 4, 5, 6, 7, 8],
            }
        },
        // computed: {
        //     rows() {
        //         return (this.items0.length) / 2
        //     }
        // },
        methods: {
            setPages () {
                let numberOfPages = Math.ceil(this.allItems.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate (courses) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return  courses.courses.slice(from, to);
            }
        },
        watch: {
            courses () {
                this.setPages();
            }
        },
        computed: {
            allItems () {
                return this.paginate(this.courses);
            }
        }
    }
</script>

<style lang="scss">

    .row {
        margin: 0;
    }
    .bonus {
        position: absolute;
        left: 185px;

    }
    .price {
        position: absolute;
        left: 135px;
        text-decoration: line-through;
    }
    .card-title {
        margin-bottom: 0px;
    }
    .cardRow {
        height: 190px;
    }
    .card-header {
        padding: 5px 0px;
        border-style: none;
    }
    li {
        list-style: none;
    }
    .card-body {
        padding: 0rem;
    }

    .rowPaddingCard {
        padding: 0 0;
    }
    .list-group-item {
        border: none;
        padding: 5px 5px;
    }
    h2,
    h4,
    h6 {
        position: relative;
        text-align: start;
    }
    .links {
        margin-left: -5px;
    }
    .cardLinks {
        position: relative;
        left: -60px;
        padding: 30px;
        text-align: start;
        color: grey;
        list-style: none;
        text-decoration: none;
    }
    img {
        height:auto;
    }
    .leftbartext {
        font-weight: 800;
    }
    .bordered {
        outline: 1px solid white;
    }
    .search-panel {
        background: $primary;
        padding: 20px;
        display: flex;
        max-width: 1170px;
        flex-direction: column;
        margin: 20px 0;

        @include media-breakpoint-up(sm) {
            flex-direction: row;
        }

        &_item {
            margin: 0 0 20px 0;
            flex: 1;

            @include media-breakpoint-up(sm) {
                margin: 0 20px 0 0;
            }
        }

        &_field {
            height: 50px;
            min-height: 50px;
            line-height: 1.5;
            padding: 8px 15px;
            width: 100%;
            border: 1px solid #fff;

            &:focus {
                border: 1px solid #fff;
            }

            @include placeholder {
                font-size: 16px;
                letter-spacing: -0.02em;
                color: $grey;
                opacity: 1;
            }
        }

        &_dropdown {
            position: relative;
            background: #fff;
            height: 50px;
            max-width: 310px;
            font-size: 16px;
            color: $grey;
            padding: 13px 15px;
            cursor: pointer;

            .dropdown_list {
                left: 0;
                right: 0;
                top: 100%;
                width: 100%;
            }
        }

        &_btn {
            min-width: 150px;
            background: $info-text;
            border: 0;
            outline: 0;
            color: #fff;
            font-size: 16px;
            height: 50px;

            &:hover {
                box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);
                transition: box-shadow .15s ease-in-out;
            }

            @include media-breakpoint-up(md) {
                min-width: 200px;
            }
        }
    }
</style>


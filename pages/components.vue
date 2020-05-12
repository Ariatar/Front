<template>
    <div class="container bg-white">
        <div class="header-1">header-1</div>
        <div class="header-2">header-2</div>
        <div class="header-3">header-3</div>
        <div class="header-4">header-4</div>
        <div class="header-5">header-5</div>
        <div class="header-6">header-6</div>
        <div class="subtitle">subtitle</div>
        <div class="subtitle-medium">subtitle-medium</div>
        <div class="general-text">general-text</div>
        <div class="general-text-light">general-text-light</div>
        <br>
        <button class="btn btn--primary">btn--primary</button>
        <br>
        <button class="btn btn--outline">btn--outline</button>
        <br>
        <button class="btn btn--white">btn btn--white</button>
        <br>
        <button
            class="btn btn-more">
            <svg class="icon">
                <use xlink:href="/img/sprite.svg#dropdown"/>
            </svg>
            Показать еще
        </button>

        <div class="mb-3"></div>

        <div class="container bg-white search-container">
            <div class="wrapper">
                <base-breadcrumbs :items="breadcrumbs"/>
                <div class="search-block">
                    <div class="header-2 search-block_title">
                        Блог
                    </div>
                    <div class="general-text">
                        Обсуждайте, делитесь своими впечатлениями, помогайте друг-другу и развивайтесь!
                    </div>
                    <base-search-panel
                        input-placeholder="Поиск статей и новостей"
                        btn-text="Найти статью"/>
                    <div
                        id="posts"
                        class="blog-anchor"></div>
                </div>
            </div>
        </div>

        <div class="dider"></div>

        <div class="row">
            <div class="col-12">
                <div class="main-title">
                    <div class="header-4">
                        Часто задаваемые вопросы
                    </div>
                    <div class="general-text">
                        Ты здесь новенький? Начни с начала и узнай основное о нашем сервисе.
                    </div>
                </div>
                <div
                    v-for="index in 5"
                    :key="index"
                    class="accordion">
                    <div
                        v-b-toggle="'accordion' + index"
                        class="accordion_header pointer">
                        <div class="header-6">
                            Как формируются цены на курс?
                        </div>
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#dropdown"/>
                        </svg>
                    </div>
                    <b-collapse
                        :id="'accordion' + index"
                        accordion="faq">
                        <div class="accordion_content general-text">
                            Курсы программирования не могут стоить дешево, и если это так, нужно задуматься над существующими причинами. Возможно, курсы будут вести преподаватели с небольшим опытом работы, школа будет располагаться далеко от центра города, в классах не будет ремонта или будет использоваться старое оборудование.
                        </div>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div>
            <div class="tag">tag</div>
            <div class="tag">tag</div>
        </div>

        <comments/>
        <div
            v-for="n in 5"
            :key="n"
            class="col-sm-6 col-lg-12">
            <div
                :class="{ 'course-card--promo': n ===2 }"
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
                        v-if="n === 2"
                        class="course-card_label">
                        Promo
                    </div>
                    <div
                        :class="{ 'course-card_title--promo': n ===2 }"
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
                            Мастер-класс
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

        <course-form-select class="mt-5"/>

        <modals class="mt-5"/>
    </div>
</template>

<script>
    import modals from "./test/modals";
    import CourseFormSelect from "../components/course/CourseFormSelect";
    import Comments from "~/components/comments/Comments";

    export default {
        components: {
            CourseFormSelect,
            modals,
            Comments
        },
        name: "Components",
        data: () => ({
            breadcrumbs: [
                {
                    link: 'blog',
                    name: 'Блог'
                },
                {
                    name: 'Статья'
                }
            ]
        })
    }
</script>

<style lang="scss">

</style>

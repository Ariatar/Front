<template>
    <div class="home-page">
        <div class="container bg-white search-container">
            <div class="wrapper">
                <div class="spacer"></div>
                <div class="search-block">
                    <div class="header-2 search-block_title">
                        Найди лучшие курсы
                    </div>
                    <div class="general-text">
                        Открой для себя тысячи курсов и достигай своих целей с
                        нашими преподователями.
                    </div>
                    <base-search-panel
                        :dropdown-items="searchTypes"
                        :show-drop-down="true"
                        input-placeholder="Чему вы хотите научиться?"
                        drop-down-placeholder="В каком формате?"
                        btn-text="Найти курсы"
                        @onSearch="search($event)"
                    />
                </div>
            </div>
        </div>

        <div class="container bg-white">
            <div class="wrapper">
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Популярные категории
                        </div>
                        <div class="general-text">
                            Открой для себя тысячи
                            <n-link :to="localePath({ path: '/course' })"
                                >курсов</n-link
                            >
                            и достигай своих целей с нашими преподователями.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="popular popular--big">
                            <div class="popular_top">
                                <div class="popular_title">
                                    <span>
                                        Бизнес
                                    </span>
                                </div>
                                <img
                                    class="popular_img"
                                    src="/img/image 6.png"
                                    alt=""
                                />
                            </div>
                            <div class="popular_bottom">
                                <span class="popular_offers">
                                    3 422 предложения
                                </span>
                                <span class="popular_price">
                                    от 800 руб
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="popular popular--big">
                            <div class="popular_top">
                                <div class="popular_title">
                                    <span>
                                        Бизнес
                                    </span>
                                </div>
                                <img
                                    class="popular_img"
                                    src="/img/image 6.png"
                                    alt=""
                                />
                            </div>
                            <div class="popular_bottom">
                                <span class="popular_offers">
                                    3 422 предложения
                                </span>
                                <span class="popular_price">
                                    от 800 руб
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="popular">
                            <div class="popular_top">
                                <div class="popular_title">
                                    <span>
                                        Бизнес
                                    </span>
                                </div>
                                <img
                                    class="popular_img"
                                    src="/img/image 6.png"
                                    alt=""
                                />
                            </div>
                            <div class="popular_bottom">
                                <span class="popular_offers">
                                    3 422 предложения
                                </span>
                                <span class="popular_price">
                                    от 800 руб
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="popular">
                            <div class="popular_top">
                                <div class="popular_title">
                                    <span>
                                        Бизнес
                                    </span>
                                </div>
                                <img
                                    class="popular_img"
                                    src="/img/image 6.png"
                                    alt=""
                                />
                            </div>
                            <div class="popular_bottom">
                                <span class="popular_offers">
                                    3 422 предложения
                                </span>
                                <span class="popular_price">
                                    от 800 руб
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="popular">
                            <div class="popular_top">
                                <div class="popular_title">
                                    <span>
                                        Бизнес
                                    </span>
                                </div>
                                <img
                                    class="popular_img"
                                    src="/img/image 6.png"
                                    alt=""
                                />
                            </div>
                            <div class="popular_bottom">
                                <span class="popular_offers">
                                    3 422 предложения
                                </span>
                                <span class="popular_price">
                                    от 800 руб
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Наши преимущества
                        </div>
                        <div class="general-text">
                            Мы знаем как для вас важно получать качественные
                            знания и поэтому стараемся предоставить вам лучший
                            сервис.
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefits">
                            <img
                                class="benefits_img"
                                src="/img/certificate.png"
                                alt=""
                            />
                            <div class="header-6">
                                Большой выбор
                            </div>
                            <div class="general-text">
                                Выбирайте и сравнивайте курсы от более чем 50
                                ведущих школ отсортированных по оценкам
                                студентов.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefits">
                            <img
                                class="benefits_img"
                                src="/img/growth.png"
                                alt=""
                            />
                            <div class="header-6">
                                Бонусы
                            </div>
                            <div class="general-text">
                                При покупке курса через наш сервис вы получаете
                                баллы, котоые можете использовать для покупки
                                следующего курса.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefits">
                            <img
                                class="benefits_img"
                                src="/img/onboarding.png"
                                alt=""
                            />
                            <div class="header-6">
                                Поддержка и общение
                            </div>
                            <div class="general-text">
                                Проходя курс, вы получаете доступ к комьюнити и
                                поддержку одногрупников и преподавателей
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Рекомендованные курсы для вас
                        </div>
                        <div class="general-text">
                            Мы подбираем для вас самые популярные курсы,
                            соответствующие вашим интересам.
                        </div>
                    </div>
                    <div
                        v-for="n in 4"
                        :key="n"
                        class="col-md-6 col-lg-4 col-xl-3"
                    >
                        <div class="popular-course">
                            <div class="img-card">
                                <img
                                    class="img-card_img"
                                    src="/img/curs.png"
                                    alt=""
                                />
                                <div
                                    class="img-card_marker icon-marker"
                                    style="background:#93df97;"
                                >
                                    <img
                                        src="https://images.obuchenie.ru/files/u/laptop.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="info-card">
                                <div class="info-card_inner">
                                    <div class="info-card_item">
                                        <span class="info-card_rating">
                                            9,6
                                        </span>
                                        Превосходно
                                    </div>
                                    <div
                                        class="info-card_item info-card_item--reviews"
                                    >
                                        12 отзывов
                                    </div>
                                </div>
                                <base-favorite />
                            </div>
                            <div class="price-card popular-course_price">
                                <div
                                    :class="{
                                        'price-card_amount--discount': n !== 2
                                    }"
                                    class="price-card_amount"
                                >
                                    12 000
                                    <div class="price-card_currency">
                                        руб
                                    </div>
                                </div>
                                <div class="price-card_info">
                                    <div class="price-card_add">
                                        <span
                                            v-if="n !== 2"
                                            class="price-card_discount"
                                        >
                                            14 000
                                        </span>
                                        <span class="price-card_bonus">
                                            +200 бонусов
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="header-6">
                                Подготовка ребенка к школе
                            </div>
                            <div class="text-grey">
                                Образовательный проект
                            </div>
                            <div class="general-text">
                                Развитие интереса к познанию нового, внимания,
                                памяти, логики и мышления
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="mb">
                    <div class="banner banner--long">
                        Рекламный баннер 1170х100
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        </div>

        <div class="container bg-soft-light">
            <div class="wrapper">
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Лучшие школы
                        </div>
                        <div class="general-text">
                            Мы гарантируем высокое качество предлагаемых курсов,
                            поэтому выстраиваем рейтинг школ, на основе ваших
                            реальных отзывов. Вы также можете просмотреть
                            <a href="">список всех школ</a> отобранных нашим
                            сервисом.
                        </div>
                    </div>
                    <div
                        v-for="n in 6"
                        :key="n"
                        class="col-sm-6 col-lg-3 col-xl-2"
                    >
                        <div class="best-school">
                            <div class="img-card">
                                <img
                                    class="img-card_img"
                                    src="/img/school.png"
                                    alt=""
                                />
                            </div>
                            <div class="info-card">
                                <div class="info-card_inner">
                                    <div class="info-card_item">
                                        <span class="info-card_rating">
                                            9,6
                                        </span>
                                    </div>
                                    <div
                                        class="info-card_item info-card_item--reviews"
                                    >
                                        12 отзывов
                                    </div>
                                </div>
                                <base-favorite />
                            </div>
                            <div class="best-school_title header-6">
                                Онлайн-университет SkillBox
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        </div>

        <div class="container bg-white">
            <div class="wrapper">
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Популярные курсы
                        </div>
                        <div class="general-text">
                            Откройте для себя тысячи курсов и достигайте своих
                            целей с нашими преподователями.
                        </div>
                    </div>
                    <div v-for="n in 5" :key="n" class="col-sm-6 col-lg-12">
                        <div
                            :class="{ 'course-card--promo': n === 1 }"
                            class="course-card"
                        >
                            <div class="course-card_img">
                                <div class="img-card">
                                    <img
                                        class="img-card_img"
                                        src="/img/image 20.png"
                                        alt=""
                                    />
                                    <div
                                        class="img-card_marker icon-marker"
                                        style="background:#93df97;"
                                    >
                                        <img
                                            src="https://images.obuchenie.ru/files/u/laptop.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="course-card_dsc">
                                <div v-if="n === 1" class="course-card_label">
                                    Promo
                                </div>
                                <div
                                    :class="{
                                        'course-card_title--promo': n === 1
                                    }"
                                    class="course-card_title header-6"
                                >
                                    Как начинающему фрилансеру получить первый
                                    заказ?
                                </div>
                                <div class="course-card_text general-text">
                                    Получите востребованную профессию
                                    frontend-разработчика. Реализуйте проекты
                                    уже во время обучения.
                                </div>
                                <div class="course-card_bottom">
                                    <div class="course-card_author">
                                        <div class="avatar">
                                            <img
                                                src="https://manager.obuchenie.ru/images/user/_1581952961.svg"
                                                class="avatar_img"
                                            />
                                            <span>
                                                Анастасии Иващенко
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="course-card_type general-text text-grey"
                                    >
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
                                        <div
                                            class="info-card_item info-card_item--reviews"
                                        >
                                            12 отзывов
                                        </div>
                                    </div>
                                    <base-favorite />
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
                                    <div
                                        class="course-card_time course-card_date"
                                    >
                                        <svg class="icon icon-grey">
                                            <use
                                                xlink:href="/img/sprite.svg#calendar"
                                            />
                                        </svg>
                                        <span class="general-text text-grey">
                                            13 ноября 2019
                                        </span>
                                    </div>
                                    <div
                                        class="course-card_time course-card_duration"
                                    >
                                        <svg class="icon icon-grey">
                                            <use
                                                xlink:href="/img/sprite.svg#duration"
                                            />
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
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12 main-title">
                        <div class="header-4">
                            Топ частных преподавателей
                        </div>
                        <div class="general-text">
                            <a href="">Все преподаватели</a> проходят модерацию
                            и получают свой рейтинг на основе ваших отзывов.
                        </div>
                    </div>
                    <div v-for="n in 4" :key="n" class="col-md-6 col-xl-3">
                        <div class="teacher">
                            <div class="teacher_ava">
                                <img src="/img/teacher.png" alt="" />
                                <svg class="teacher_status">
                                    <use xlink:href="/img/sprite.svg#status" />
                                </svg>
                            </div>
                            <div class="teacher_info">
                                <div class="header-6">
                                    Александр Никитин
                                </div>
                                <div class="general-text">
                                    Шеф повар
                                </div>
                                <base-info-panel
                                    :show-views="false"
                                    :show-favorite="true"
                                    :show-rating="true"
                                    :show-reviews="true"
                                    :show-likes="false"
                                    :rating="9.9"
                                    :reviews="12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="more bg-soft-light">
                    <div class="more_inner">
                        <div class="header-3">
                            Хочешь больше?
                        </div>
                        <div class="general-text">
                            Получай персональные рекомендации по курсам,
                            отслеживай мастер-классы <br />
                            и семинары, получай напоминаниями и многое другое.
                        </div>
                        <button class="btn btn--primary">
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-12">
                        <div class="main-title">
                            <div class="header-4">
                                С нами сотрудничают
                            </div>
                            <div class="general-text">
                                Нам доверяют и с нами сотрудничают такие
                                компании
                            </div>
                        </div>
                        <div class="row-logos">
                            <div class="row-logos_item">
                                <img src="/logos/interpipe.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/criteo.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/carlsberg.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/g-skill.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/rtb-house.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/g-skill.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/rtb-house.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/criteo.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/interpipe.png" alt="" />
                            </div>
                            <div class="row-logos_item">
                                <img src="/logos/carlsberg.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="main-title">
                            <div class="header-4">
                                Самое интересное в блоге
                            </div>
                            <div class="general-text">
                                Читайте и полезные статьи и самые последние
                                факты.
                            </div>
                        </div>
                        <div class="divder"></div>
                        <div v-if="popularPosts.length" class="home-blog">
                            <blog-post
                                v-for="(item, index) in popularPosts"
                                :key="index"
                                :item="item"
                                :post-dsc-length="100"
                            />
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="d-lg-none" style="height: 30px" />
                        <div class=" main-title">
                            <div class="header-4">
                                Последние новости
                            </div>
                            <div class="general-text">
                                Читайте и полезные статьи и самые последние
                                факты.
                            </div>
                        </div>
                        <div class="divder"></div>
                        <div v-if="lastPosts.length" class="home-blog">
                            <blog-post
                                v-for="(item, index) in lastPosts"
                                :key="index"
                                type="short"
                                :item="item"
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="main-title">
                            <div class="header-4">
                                Часто задаваемые вопросы
                            </div>
                            <div class="general-text">
                                Ты здесь новенький? Начни с начала и узнай
                                основное о нашем сервисе.
                            </div>
                        </div>
                        <div v-for="index in 5" :key="index" class="accordion">
                            <div
                                v-b-toggle="'accordion' + index"
                                class="accordion_header pointer"
                            >
                                <div class="header-6">
                                    Как формируются цены на курс?
                                </div>
                                <svg class="icon">
                                    <use
                                        xlink:href="/img/sprite.svg#dropdown"
                                    />
                                </svg>
                            </div>
                            <b-collapse :id="'accordion' + index">
                                <div class="accordion_content general-text">
                                    Курсы программирования не могут стоить
                                    дешево, и если это так, нужно задуматься над
                                    существующими причинами. Возможно, курсы
                                    будут вести преподаватели с небольшим опытом
                                    работы, школа будет располагаться далеко от
                                    центра города, в классах не будет ремонта
                                    или будет использоваться старое
                                    оборудование.
                                </div>
                            </b-collapse>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="mb">
                    <div class="banner banner--long">
                        Рекламный баннер 1170х100
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from "~/components/blog/BlogPost";

export default {
    name: "HomePage",
    layout: "page",
    components: {
        BlogPost
    },
    async asyncData(context) {
        async function getPopularPost() {
            try {
                const params = {
                    limit: 3,
                    sort: "views",
                    dir: "DESC"
                };
                const { data } = await context.$axios.get("blog", { params });
                return data.posts;
            } catch (e) {}
        }

        async function getLastPost() {
            try {
                const params = {
                    limit: 5,
                    sort: "date",
                    dir: "DESC"
                };
                const { data } = await context.$axios.get("blog", { params });
                return data.posts;
            } catch (e) {}
        }

        return {
            popularPosts: await getPopularPost(),
            lastPosts: await getLastPost()
        };
    },
    data: () => ({
        searchTypes: [
            {
                key: null,
                label: "Все"
            },
            {
                key: 1,
                label: "Онлайн"
            },
            {
                key: 0,
                label: "Оффлайн"
            }
        ]
    }),
    methods: {
        search(event) {
            this.$router.push(
                this.localePath({
                    path: "/course/search",
                    query: event
                })
            );
        }
    }
};
</script>

<style lang="scss">
.bg-soft-light {
    background-color: $soft-light;
}

.popular {
    height: 280px;
    margin: 0 0 30px 0;

    @include media-breakpoint-up(lg) {
        &--big {
            height: 420px;
        }
    }

    &:hover {
        .popular_top {
            @include shadow-hover();
        }
    }

    &_top {
        transition: box-shadow 0.25s ease;
        height: calc(100% - 40px);
        position: relative;
        cursor: pointer;
    }

    &_title {
        background: rgba(0, 0, 0, 0.2);
        height: 80px;
        color: #fff;
        font-size: 24px;
        padding: 22px 30px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
    }

    &_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &_bottom {
        height: 40px;
        background: $soft-light;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 10px;

        @include media-breakpoint-up(lg) {
            padding: 12px 30px;
        }
    }

    &_offers {
        color: $dark-grey;
    }

    &_price {
        color: $black;
        font-weight: 500;
    }
}

.benefits {
    width: 95%;

    &_img {
        margin: 25px 0 30px;
        width: 50px;
        height: 50px;
    }
}

.main-title {
    .header-4 {
        margin: 0 0 5px 0;
    }
}

.popular-course {
    cursor: pointer;
    margin: 0 0 20px 0;

    &:hover {
        .img-card {
            @include shadow-hover();
        }
    }

    &_price {
        padding: 14px 0;
        border-bottom: 1px solid $light-grey;
        margin: 0 0 12px 0;
    }
    .general-text {
        overflow: hidden;
        max-height: 100px;
    }
}

.img-card {
    position: relative;
    transition: box-shadow 0.25s ease;
    cursor: pointer;

    &_img {
        width: 100%;
    }

    &_marker {
        position: absolute;
        left: 0;
        top: 15px;
        z-index: 1;
    }
}

.price-card {
    display: flex;
    flex-wrap: wrap;

    &_amount {
        font-size: 40px;
        line-height: 45px;
        letter-spacing: -0.02em;
        color: $black;
        display: flex;
        margin: 0 -20px 0 0;

        &--discount {
            color: #ffd337;
        }
    }

    &_add {
        display: flex;
        margin: 5px 0 0 0;
    }

    &_discount {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.01em;
        text-decoration-line: line-through;
        color: $grey;
        margin: 0 5px 0 0;
    }

    &_bonus {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.01em;
        color: $purple-dark;
    }

    &_currency {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.01em;
        color: $black;
        margin: 23px 0 0 5px;
    }
}

.info-card {
    background: $primary-light;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_inner {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    &_item {
        font-size: 12px;
        letter-spacing: -0.01em;
        color: $black;

        &--reviews {
            opacity: 0.4;
        }
    }

    &_rating {
        font-weight: 500;
    }
}

.best-school {
    margin: 0 0 20px 0;

    &:hover {
        .img-card {
            @include shadow-hover();
        }
    }

    &_title {
        margin: 12px 0 0 0;
    }
}

.teacher {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 20px 0;

    &:hover {
        .teacher_ava {
            @include shadow-hover();
        }
    }

    &_ava {
        transition: box-shadow 0.25s ease;
        height: 70px;
        width: 70px;
        margin: 0 20px 0 0;
        position: relative;
        border-radius: 100%;
        cursor: pointer;

        img {
            border-radius: 100%;
        }
    }

    &_status {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        right: 0;
    }

    &_info {
        width: calc(100% - 90px);
        .info-panel {
            margin: 2px 0 0 0;
        }
    }
}

.more {
    height: 295px;
    display: flex;
    align-items: center;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;

    @include media-breakpoint-up(md) {
        background-image: url("~assets/bg/bg-more.svg");
    }

    @include media-breakpoint-up(lg) {
        height: 395px;
    }

    &_inner {
        padding: 0 0 0 20px;

        br {
            display: none;
        }

        @include media-breakpoint-up(md) {
            width: 50%;
        }

        @include media-breakpoint-up(lg) {
            padding: 0 0 0 50px;
        }

        @include media-breakpoint-up(xl) {
            padding: 0 0 0 115px;
            width: 100%;

            br {
                display: block;
            }
        }

        .header-3 {
            margin: 0 0 10px 0;
        }

        .btn {
            margin: 20px 0 0 0;
            min-width: 220px;
        }
    }
}

.row-logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &_item {
        width: 50%;
        text-align: center;

        @include media-breakpoint-down(sm) {
            margin: 20px;
            width: 33%;
            text-align: center;

            img {
                width: 100%;
            }
        }

        @include media-breakpoint-up(sm) {
            width: 33%;
            margin: 20px 0;
            img {
                width: auto;
            }
        }

        @include media-breakpoint-up(lg) {
            width: 20%;
            margin: 20px 0;
        }
    }
}

.course-card {
    border: 1px solid $light-grey;
    margin: 0 0 20px 0;
    transition: box-shadow 0.25s ease;

    &:hover {
        @include shadow-hover();
    }

    &--promo {
        border: 1px solid $primary-dark;
    }

    @include media-breakpoint-up(lg) {
        display: flex;
        flex-wrap: wrap;
        height: 170px;
    }

    &_img {
        @include media-breakpoint-up(lg) {
            width: 190px;
            height: 100%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    &_dsc {
        position: relative;
        padding: 10px 15px;

        @include media-breakpoint-up(lg) {
            width: calc(100% - 460px);
        }
    }

    &_label {
        border-radius: 17px;
        background: $primary;
        color: #fff;
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
        display: inline-block;
        padding: 2px 8px;
        position: absolute;
        top: 15px;
        right: 15px;
    }

    &_title {
        &--promo {
            margin: 0 70px 0 0;
        }

        overflow: hidden;

        @include media-breakpoint-up(md) {
            max-height: 75px;
        }
        @include media-breakpoint-up(lg) {
            max-height: 50px;
        }
    }

    &_text {
        overflow: hidden;
        @include media-breakpoint-up(md) {
            max-height: 50px;
        }
    }

    &_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        @include media-breakpoint-up(lg) {
            position: absolute;
            bottom: 16px;
            left: 15px;
            right: 15px;
        }
    }

    &_author {
        cursor: pointer;
        margin: 10px 10px 0 0;
    }

    &_type {
        margin: 10px 0 0 0;
    }

    &_info {
        border-left: 1px solid $light-grey;

        @include media-breakpoint-up(lg) {
            width: 270px;
        }
    }

    &_data {
        padding: 10px 15px;
    }

    &_time {
        display: flex;
        align-items: center;
    }

    &_date {
        margin: 8px 0 0 0;
        .icon {
            width: 14px;
            height: 14px;
            margin: 0 6px 0 0;
        }
    }

    &_duration {
        .icon {
            margin: 0 10px 0 0;
            width: 14px;
            height: 14px;
        }
    }
}

.home-blog {
    margin: 32px 0 0 0;
}

.accordion {
    border: 1px solid $light-grey;
    margin: 0 0 20px 0;
    padding: 12px 15px;
    position: relative;

    &_header {
        position: relative;

        &::before {
            content: "";
            display: block;
            width: 54px;
            height: 29px;
            background: url("~assets/bg/bubbles.svg");
            position: absolute;
            top: -23px;
            left: -42px;
        }

        &.collapsed {
            &::before {
                display: none;
            }

            .icon {
                transform: rotate(0);
            }
        }

        .icon {
            position: absolute;
            fill: transparent;
            stroke: #2f4858;
            top: 5px;
            right: 2px;
            width: 14px;
            height: 14px;
            transform: rotate(180deg);
        }
    }

    &_content {
        margin: 10px 0 0 0;
    }
}

.home-banner {
    img {
        height: 100px;
        width: 100%;
        object-fit: cover;
    }
}

.home-page {
    .banner {
        display: flex !important;
    }
}
</style>

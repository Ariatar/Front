<template>
    <b-container fluid>
        <!-- Content here -->
        <div>
            <!-- As a heading -->
        </div>

        <b-container style="background: white;">
            <div>
                <b-row>
                    <b-col md="6">
                        <b-list-group horizontal="md">
                            <base-breadcrumbs :items="breadcrumbs" />
                        </b-list-group>
                    </b-col>
                </b-row>
                <div class="mt-4 col ">
                    <h2 class="header-3 ">Разработка</h2>
                    <h6 class="general-regular ">
                        Изучайте программировние с помощью лучших преподователей
                        страны. Повышайте свои скиллы и
                        <br />получайте практический опыт. Прочитайте отзывы что
                        бы решить подходит ли вам класс
                    </h6>
                </div>

                <div class="mt-4 col ">
                    <h6 class="mt-4 text">
                        <h6 class="mt-5 title-medium  d-inline">
                            Доступные подкатегории
                        </h6>
                        <h6
                            v-for="link in links"
                            :key="link"
                            class="subtitle-medium links d-inline ml-1"
                        >
                            {{ link }}
                        </h6>
                    </h6>
                </div>
            </div>

            <b-row>
                <b-col style="text-align: start" md="3">
                    <course-form-select :items="top" class="mt-3" />
                    <b-card
                        style="width: 236px; height: 270px"
                        class="mt-3 ml-4"
                    >
                        <b class="ml-2 header-3">
                            Хочешь больше?
                        </b>
                        <div class="ml-2 ">
                            <p class="general-text">
                                Получайте персональные
                                <br />рекомендации по курсам, <br />отслеживайте
                                мастер классы <br />и семинары с напоминаниями
                                <br />и многое другое
                            </p>
                            <button class="header_btn btn btn--primary">
                                Войти
                            </button>
                        </div>
                    </b-card>

                    <b-card class="mt-5">
                        <div class="mb bannerSmall">
                            <div class="banner2">Рекламный баннер 270х360</div>
                        </div>
                    </b-card>
                </b-col>
                <b-col md="9" class="p-2">
                    <div class="p-2 general-text ml-2">
                        <h6 class="d-inline general-text">Сортировка</h6>
                        <h6 class="d-inline general-text ml-5">
                            По дате старта
                        </h6>
                        <h6 class="d-inline general-text ml-5">По рейтингу</h6>
                        <h6 class="d-inline general-text ml-5">По цене</h6>
                        <h6 class="d-inline general-text ml-5">
                            По количеству отзывов
                        </h6>
                        <h6 class="d-inline general-text ml-5">
                            По длительности
                        </h6>
                    </div>

                    <div>
                        <card-course :courses="item" />
                    </div>
                    <!--                    <div class="mt-4">-->
                    <!--                        <card-course/>-->
                    <!--                    </div>-->
                    <!--                    <div class="mt-4">-->
                    <!--                        <card-course/>-->
                    <!--                    </div>-->
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import BaseBreadcrumbs from "../BaseBreadcrumbs";
import CourseFormSelect from "./CourseFormSelect";
import CardCourse from "./CardCourse";
// import axios from 'axios'
export default {
    components: {
        CardCourse,
        CourseFormSelect,
        BaseBreadcrumbs
    },
    name: "CourseCategoryPage",
    props: {
        top: {
            type: Object,
            default() {
                return {};
            }
        },
        filt: {
            type: Array,
            default() {
                return [];
            }
        },
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            breadcrumbs: [
                {
                    link: "blog",
                    name: "Главная"
                },
                {
                    link: "blog",
                    name: "Категории"
                },
                {
                    link: "blog",
                    name: "Разработка"
                }
            ],
            loading: true,
            items: [],
            links2: [
                "Сортировка",
                "По дате старта",
                "По рейтингу",
                "По цене",
                "По количеству отзывов",
                "По длительности"
            ],
            links: [
                "Веб разработка,",
                "Мобильные приложения,",
                "Языки программирования,",
                "Разработка игр,",
                "База Данных,",
                "Тестирование программного обеспечения,",
                "Инженерия разработки ПО,",
                "Инструменты разработки,",
                "Электронная коммерция"
            ],
            selected: [] // Must be an array reference!
        };
    },
    methods: {
        sortByDate() {
            return this.array.sort((a, b) => a.date - b.date);
        },
        sortByRating() {
            return this.array.sort((a, b) => a.rating - b.rating);
        },
        sortByPrice() {
            return this.array.sort((a, b) => a.price - b.price);
        },
        sortByComments() {
            return this.array.sort((a, b) => a.comments - b.comments);
        },
        sortByTime() {
            return this.array.sort((a, b) => a.time - b.time);
        }
    }
    // async mounted() {
    //     this.loading = true;
    //     try {
    //         await axios
    //             .get(
    //                 'https://api.obuchenie.ru/course'
    //             )
    //             .then(res => {
    //                 this.items = res.data;
    //                 this.loading = false;
    //             });
    //     } catch (error) {
    //         this.loading = false;
    //         console.log(error);
    //     }
    // },
};
</script>

<style lang="scss">
.banner2 {
    position: relative;
    top: 40%;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    color: #2f4858;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    cursor: pointer;
}
.bannerSmall {
    width: 270px;
    height: 360px;
    background: #ffd337;
}
.text a {
    padding: 0 5px;
}
.general-text h6 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height, or 125% */

    letter-spacing: -0.01em;

    /* Grey */

    color: #b8bec2;

    cursor: pointer;
}
.general-text h6:hover {
    color: #2f4858;
}
body {
    overflow-x: hidden;
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
    text-align: start;
    border-bottom: 1px solid #e3e7e9;
}
.links {
    cursor: pointer;
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
    height: auto;
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
            transition: box-shadow 0.15s ease-in-out;
        }

        @include media-breakpoint-up(md) {
            min-width: 200px;
        }
    }
}
</style>

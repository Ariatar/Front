<template>
    <b-container fluid>
        <!-- Content here -->
        <div>
            <!-- As a heading -->
        </div>

        <b-container style="background: white;">
            <div class="mt-3">
                <div class="mt-5 col">
                    <h2 class="header-3 mt-5"></h2>
                </div>
                <div class="container bg-white search-container">
                    <div class="wrapper">
                        <div class="spacer"></div>
                        <div class="search-block">
                            <div class="header-2 search-block_title">
                                Результаты поиска по курсам
                            </div>
                            <base-search-panel
                                :dropdown-items="searchTypes"
                                :show-drop-down="true"
                                input-placeholder="Машинное обучение"
                                drop-down-placeholder="Онлайн трансляция"
                                btn-text="Найти курсы"
                                @onSearch="search($event)"/>
                        </div>
                    </div>
                </div>
            </div>

            <b-row>
                <b-col
                    style="text-align: start"
                    md="3">
                    <div>
                        <b-card>
                            <h6

                                class="mb-4 header-6 fix">
                                Популярные фильтры
                            </h6>
                            <b-form-group>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    class="general-regular"
                                    :options="options"></b-form-checkbox-group>
                            </b-form-group>
                        </b-card>
                        <b-card class="mt-4">
                            <h6

                                class="mb-4 header-6 fix">
                                Выбрать по критериям
                            </h6>
                            <b-form-group>
                                <div
                                    class="divider">
                                    <hr/>
                                </div>
                                <h6

                                    class="mb- header-6 fix2">
                                    Старт обучения
                                </h6>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options2"></b-form-checkbox-group>
                            </b-form-group>
                            <div
                                class="divider">
                                <hr/>
                            </div>
                            <b-form-group>
                                <div
                                    class="divider">
                                    <hr/>
                                </div>
                                <h6

                                    class="mb- header-6 fix2">
                                    Формат
                                </h6>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options8"></b-form-checkbox-group>
                            </b-form-group>

                            <h6

                                class="mb- header-6 fix2">
                                Продолжительность
                            </h6>
                            <b-form-checkbox-group
                                v-model="selected"
                                :options="options3"></b-form-checkbox-group>
                            <div
                                style="background: #E3E7E9;"
                                class="divider">
                                <hr/>
                            </div>
                            <h6
                                class="mb-4 header-6 fix">
                                Стоимость
                            </h6>
                            <div>
                                <b-form-input
                                    id="range-2"
                                    v-model="value"
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="50"></b-form-input>
                                <div class="mt-2">{{ value }}</div>
                            </div>
                            <div
                                style="background: #E3E7E9;"
                                class="divider">
                                <hr/>
                            </div>
                            <h6

                                class="mb-4 header-6 fix">
                                По категории
                            </h6>
                            <b-form-group>
                                <div
                                    class="divider">
                                    <hr/>
                                </div>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options5"></b-form-checkbox-group>
                            </b-form-group>
                            <div
                                class="divider">
                                <hr/>
                            </div>
                            <h6

                                class="mb-4 header-6 fix">
                                По школе
                            </h6>
                            <b-form-group>
                                <div
                                    class="divider">
                                    <hr/>
                                </div>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options6"></b-form-checkbox-group>
                            </b-form-group>
                            <b-form-group>
                                <div
                                    class="divider">
                                    <hr/>
                                </div>
                                <h6

                                    class="mb-4 header-6 fix">
                                    Дополнительные параметры
                                </h6>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options7"></b-form-checkbox-group>
                            </b-form-group>
                        </b-card>
                        <b-card class="mt-4">
                            <h4 class="search-by-teacher ml-4 mt-4">{{ inputPlaceholder }}</h4>
                            <form
                                class="form-control"
                                style="border-style: none">
                                <input
                                    class="form-control"
                                    :placeholder="inputPlaceholder"
                                    type="text"
                                    maxlength="256">
                            </form>
                            <div style="padding: 30px">
                                <button class="button search-panel_btn">Войти</button>
                            </div>
                        </b-card>
                    </div>
                    <b-card
                        style="padding: 30px;"
                        class="mt-5">
                        <b
                            class="ml-2 header-3">
                            Хочешь больше?
                        </b>
                        <div class="ml-2 ">
                            <p class="general-text">
                                Получайте персональные
                                <br/>рекомендации по курсам,
                                <br/>отслеживайте мастер классы
                                <br/>и семинары с напоминаниями
                                <br/>и многое другое
                            </p>
                            <button class="button search-panel_btn">Войти</button>
                        </div>
                    </b-card>

                    <b-card
                        class="mt-5"
                        img-src="https://images.obuchenie.ru/files/u/analitik-big-data.jpg">
                        <b-card-title>Рекламный баннер</b-card-title>
                    </b-card>
                </b-col>
                <b-col
                    md="9"
                    class="p-2">
                    <div class="p-2 general-text ml-2">
                        <h6 class="d-inline general-text">Сортировка</h6>
                        <h6 class="d-inline general-text ml-5">По дате старта</h6>
                        <h6 class="d-inline general-text ml-5">По рейтингу</h6>
                        <h6 class="d-inline general-text ml-5">По цене</h6>
                        <h6 class="d-inline general-text ml-5">По количеству отзывов</h6>
                        <h6 class="d-inline general-text ml-5">По длительности</h6>
                    </div>

                    <div>
                        <card-course/>
                    </div>
                    <div class="mt-4">
                        <card-course/>
                    </div>
                    <div class="mt-4">
                        <card-course/>
                    </div>
                    <div
                        class="mt-5 mb-4"
                        style="position:relative; left: 40%">
                        <button class="button search-panel_btn">Показать еще курсы</button>
                    </div>
                    <div
                        style="position: relative; left: 40%"
                        class="overflow-auto">
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"></b-pagination>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    import CourseFormSelect from "./CourseFormSelect";
    import CardCourse from "./CardCourse";
    // import axios from 'axios'
    export default {
        components: {
            CardCourse,

        },
        name: 'CourseCategory',
        props: {
            // formOptions: {
            //     type: Array,
            //     default() {
            //         return []
            //     }
            // },
            categories: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                inputPlaceholder: 'Поиск по преподователям',
                selected: [],
                value: '1',
                options: [
                    { text: "На этих выходных", value: "orange" },
                    { text: "5-6 часов", value: "apple" },
                    { text: "1000 - 5000 рублей", value: "pineapple" },
                    { text: "С сертификатом   ", value: "grape" }
                ],
                options2: [
                    { text: "На этой неделе", value: "week" },
                    { text: "На этих выходных", value: "weekend" },
                    { text: "Возможен добор", value: "usually" },
                    { text: "В следущем месяце", value: "month" }
                ],
                options3: [
                    { text: "1-2 часа", value: "onetwo" },
                    { text: "5-6 часов", value: "fivesix" },
                    { text: "1 день", value: "day" },
                    { text: "2 дня", value: "twoday" }
                ],
                options4: [
                    { text: "до 1000 руб", value: "thousand" },
                    { text: "1000 - 5000 руб"   , value: "onetofive" },
                    { text: "больше 5000 руб", value: "biggerfive" }
                ],
                options5: [

                    { text: "Детские курсы", value: "1" },
                    { text: "Разработка"   , value: "2" },
                    { text: "Бизнес", value: "" },
                    { text: "Финансы и бухгалтерский отчет", value: "3" },
                    { text: "ИТ и ПО", value: "4" },
                    { text: "Офисное программное обеспечение", value: "5" },
                    { text: "Личностный рост", value: "6" },
                    { text: "Маркетинг", value: "7" },
                    { text: " Стиль жизни ", value: "8" },
                    { text: "Фотография", value: "" },
                    { text: "Здоровье и фитнес", value: "9" },
                    { text: "Музыка", value: "" },
                    { text: "Академичиские дисциплины", value: "10" },
                ],
                /*       */
                options6: [
                    { text: "Skill Box", value: "1" },
                    { text: "Фоксфорд"   , value: "2" },
                    { text: "Swift Corurse", value: "3" },
                    { text: "LevelUp"   , value: "4" },
                    { text: "skyeng"   , value: "5" },
                    { text: "ITEA"   , value: "6" },
                ],
                options7: [
                    { text: "Наличие сертификата"   , value: "1" },
                    { text: "Наличие скидки"   , value: "2" },
                ],
                options8: [
                    { text: "Онлайн трансляция", value: "1" },
                    { text: "Прикрепленные материалы"   , value: "2" },
                    {  text: "Оффлайн мероприятие"   , value: "3" }
                ],
                breadcrumbs: [
                    {
                        link: 'blog',
                        name: 'Главная'
                    },
                    {
                        link: 'blog',
                        name: 'Категории'
                    },
                    {
                        link: 'blog',
                        name: 'Разработка'
                    }
                ],
                items0: [
                    { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                    { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                    { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                    { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                    { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                    { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                    { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                    { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                    { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
                ],
                perPage: 2,
                currentPage: 1,
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
            }
        },
        computed: {
            rows() {
                return (this.items0.length) / 2
            }
        },
        methods: {
            sortByDate() {
                return this.array.sort((a, b) => a.date - b.date)
            },
            sortByRating() {
                return this.array.sort((a, b) => a.rating - b.rating)
            },
            sortByPrice() {
                return this.array.sort((a, b) => a.price - b.price)
            },
            sortByComments() {
                return this.array.sort((a, b) => a.comments - b.comments)
            },
            sortByTime() {
                return this.array.sort((a, b) => a.time - b.time)
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
    }
</script>

<style lang="scss">
    .bv-no-focus-ring {
        display: grid;
        padding-left: 5px   ;
    }
    .card-body {
        padding: 0;
    }
    .general-text h6 {
        cursor: pointer;
    }
    .general-text h6:hover {
        color: blue;
    }
    body {
        overflow-x: hidden;
    }
    a {
        color: blue;

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
        margin-left: 0;
        padding: 0px 0px;
        text-align: start;
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

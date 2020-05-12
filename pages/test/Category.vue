<template>
    <b-container fluid>
        <b-container fluid="">
            <b-row
                style="background: white"
                class="justify-content-between">
                <b-col class="mt-2">
                    <div>
                        <b-list-group horizontal>
                            <b-list-group-item><b>Полный цикл разработки приложений на Swift</b></b-list-group-item>
                            <b-list-group-item><b class="mr-1">9,6</b>Превосходно</b-list-group-item>
                            <b-list-group-item style="color: #7f828b">12 отзывов</b-list-group-item>
                        </b-list-group>
                    </div>
                </b-col>
                <b-col style="display: flex; justify-content: flex-end">
                    <social-sharing
                        class="mt-2"
                        url="https://habr.com/"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
                        quote="Lorem Ipsum is simply dummy text of the printing and typesetting"
                        hashtags="vuejs,javascript,framework"
                        twitter-user="vuejs"
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

                    <button class="button search-panel_btn">Купить курс</button>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-card class="mt-5">
                <b-list-group
                    class="mb-5"
                    horizontal="md">
                    <b-list-group horizontal="md">
                        <base-breadcrumbs :items="breadcrumbs"/>
                    </b-list-group>
                </b-list-group>
                <b-row>
                    <b-col md="4">
                        <div>
                            <b-card
                                no-body
                                style="max-width: 535px;"
                                img-src="https://images.obuchenie.ru/files/u/analitik-big-data.jpg"
                                img-alt="Image"
                                img-top>
                                <b-card-body>
                                    <b-card-title>
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h4>1200 руб</h4>
                                                <div><h5 style="color: #7681A9; text-decoration: line-through;">1200 руб</h5></div>
                                            </div>

                                            <button class="button search-panel_btn ml-4">Купить курс</button>
                                        </div>
                                    </b-card-title>
                                    <hr/>
                                </b-card-body>
                                <b-row>
                                    <b-col>
                                        <div>
                                            <div
                                                v-for="card in linkCards2"
                                                :key="card.name"
                                                class="mt-2">
                                                <div class="d-flex justify-content-between">
                                                    <div><h6 class="header-6">{{ card.name }}</h6></div> <div><h6 class="general-regular">{{ card.value }}</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-card-body>
                                    <template v-for="(item, index) in items">
                                        <a
                                            :key="index"
                                            :class="{'nuxt-link-exact-active': $route.path === item.url}"
                                            class="tag">
                                            {{ item }}
                                        </a>
                                    </template>
                                </b-card-body>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col md="8">
                        <b-card>
                            <div style="text-align: start">
                                <div>
                                    <h2 class="header-3">Полнный цикл разработки приложений на СВИФТ</h2>
                                </div>
                                <div class="mt-4 general-regular">
                                    Изучайте программирование с лучшими преподавателями страны. Повышайте свои скилы
                                    <br/>и получйте практический опыт. Почитайте отзывы что бы решить подходит ли вам класс
                                </div>
                                <div class="mt-4">Курс лекций от Анастасии Иващенко</div>
                                <div class="ball">
                                    <h6 class="header-6">9,6</h6><h6 style="padding-left: 10px">Превосходно</h6><h6
                                        class="text-grey"
                                        style="padding-left: 70px">
                                        12 отзывов
                                    </h6>
                                </div>
                                <div>
                                    <b-list-group
                                        horizontal="md"
                                        class="p-2">
                                        <b-link class="header-6">Находится в:</b-link>

                                        <b-link class="ml-1 general-regular links">Разработка</b-link>

                                        <b-link class="ml-1 general-regular links">Мобильные приложения</b-link>

                                        <b-link class="ml-1 general-regular links">Языки программирования</b-link>
                                    </b-list-group>
                                </div>
                                <div>
                                    <b-list-group-item>
                                        <h6 class="header-6">Какие плюшки</h6>

                                        <h6 class="general-regular">Проверка домашних заданий</h6>
                                        <h6 class="general-regular">Диплом об окончании</h6>
                                        <h6 class="general-regular">Возможность трудоустройства</h6>
                                        <h6 class="general-regular">Портфолио</h6>
                                    </b-list-group-item>
                                </div>

                                <b-card-text>
                                    <div>
                                        <h3 class="header-6">Описание Курса</h3>
                                        <div class="general-regular ">
                                            Машинное обучение - это наука о том как заставить компьютеры действовать без явного программирвания. В последнее десятилетие машинное обучение дало нам автомобили
                                            с самостоятельным вождением, практическое распознавание речи, эффективный поиск в интернете и значительно улучшило понимание генома человека. Машинное оюучение сегодня
                                            настолько распространено, что вы, вероятно, используете его десятки раз в день, не зная об этом. Многие исследователи таккже считают, что это лучший способ достичь ИИ
                                            на уровне человека.
                                            <div>
                                                <div v-if="isVisa">
                                                    На этом занятии вы узнаете о наиболее эффективных методах машинного обучения, а также получите практические навыки по их применению и научите их работать на себя.
                                                    Что еще более важно, вы узнаете не только о теоретических основах обучения, но и получите практические знания, необходимые для быстрог ои мощного применения этих методов для решения
                                                    новых задач. Наконец, вы узнаете о некоторых из лучших практик Силиконовой далины в области инноваций,
                                                    в том что качается исскуственного интелекта и машинного обучения.
                                                </div>
                                                <div>
                                                    <h6
                                                        class="head"
                                                        @click.prevent="isVisa = !isVisa">
                                                        {{ isVisa ? "Скрыть описание" : "Показать описание" }}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div
                                                class="mt-3 general-regular">
                                                Этот курс предоставляет широкое введение в машинное обучение, анализ данных и статистическое распознавание образов.
                                                Темы включают: (i) контролируемое обучение
                                            </div>
                                        </div>
                                    </div>
                                </b-card-text>
                                <b-card-text>
                                    <div v-if="isHidda">
                                        <h3 class="header-6">Программа Курса</h3>
                                        <h4
                                            class="general-regular"
                                            style="color: #2F4858;">
                                            1. Введение
                                        </h4>
                                        <div
                                            class="mt-3 general-regular"
                                            style="color: #667077;">
                                            - Добро пожаловать в Машинное обучение! В этом модуле мы предоставляем основную идею обучения компьютера
                                            изучению концепций с использованием данных - без явного программирования. Курс Wiki находится в стадии разработки.
                                            Пожалуйста, посетите вкладку ресурсов для получения наиболее полной и актуальной информации .


                                            <div
                                                class="general-regular mt-4"
                                                style="color: #2F4858;">
                                                2. Линейная регрессия с одной переменной
                                            </div>
                                            <div class="mt-3 general-text">
                                                - Линейная регрессия предсказывает реальные значения на основе входного значения. Мы обсуждаем применения линейной регрессии к прогнозированию
                                                цен на жилье, предоставляем понятие функции стоимости и вводим метод градиентного спуска для обучения.
                                                <div>
                                                    <div
                                                        class="general-regular mt-4"
                                                        style="color: #2F4858;">
                                                        3. Обзор линейной алгебры
                                                    </div>
                                                    <div
                                                        class="mt-3 general-regular">
                                                        - Этот необязательный модуль дает возможность освежить в памяти понятия линейной алгебры. Базовое понимание линейной алгебры необходимо для остальнйо части
                                                        курса, особенно когда мы начинаем охватывать модели с несколькими переменными.
                                                        <div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <div>
                                        <h6
                                            class="head"
                                            @click.prevent="isHidda = !isHidda">
                                            {{ isHidda ? "Скрыть программу" : "Показать всю программу" }}
                                        </h6>
                                    </div>
                                </b-card-text>
                            </div>
                            <div>
                                <b-card-text>
                                    <h4>Связанные курсы</h4>
                                    <div class="p-4 ml-5">
                                        <b-list-group-item
                                            v-for="card in linkCards"
                                            :key="card.title"
                                            style="color: grey; padding: 0.4rem 0; text-align: start; margin-left: 10px">
                                            <div><h6 class="header-6">{{ card.title }}</h6></div>
                                            <div><h6 class="general-regular">{{ card.subtitle }}</h6></div>
                                            <div>
                                                <h6
                                                    class="d-inline header-6">
                                                    {{ card.ball }}
                                                </h6>
                                                <h6
                                                    class="d-inline ml-4 general-regular">
                                                    {{ card.comments }}
                                                </h6>
                                            </div>
                                        </b-list-group-item>
                                    </div>
                                </b-card-text>
                            </div>
                            <div class="divder"></div>
                            <div
                                style="display: flex; justify-content: space-between;">
                                <div class="d-inline-flex">
                                    <h3 style="width: 60px; text-align: center; background: lightblue">9,6</h3>
                                    <div class="ml-4">
                                        <h6 class="header-6">Превосходно</h6>
                                        <h6 class="general-regular">146 отзывов</h6>
                                    </div>
                                </div>
                                <div class="header-5">Поделиться в соцсетях</div>
                            </div>
                            <div class="divder"></div>
                        </b-card>
                    </b-col>
                </b-row>
            </b-card>
            <comments/>
        </b-container>
    </b-container>
</template>

<script>
    import Comments from "../../components/comments/Comments";
    export default {
        layout: 'page',
        data() {
            return {
                isHidda: true,
                isVisa: false,
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
                        link: 'course',
                        name: 'Разработка'
                    },
                    {
                        link: 'blog',
                        name: 'Мобильные приложения'
                    },
                    {
                        link: 'blog',
                        name: 'Страница курса'
                    }
                ],
                linkCards: [
                    {
                        title: 'Инвестирование в акции', subtitle: 'Практический курс от Coursera', ball: '9,6 превосходно', comments: '12 отзывов'
                    },
                    {
                        title: 'Криптовалюты для начинающих', subtitle: 'Мастер класс от Владслава Генуя', ball: '9,6 превосходно', comments: '11 отзывов'
                    },
                    {
                        title: 'Платёжеспособность предприятия или деньги есть всегда', subtitle: 'Мастер класс от Алины Ватник', ball: '9,6 превосходно', comments: '10 отзывов'
                    },
                    {
                        title: 'Front-end разработчик с нуля', subtitle: 'Мастер класс от Skillbox', ball: '9,6 превосходно', comments: '9 отзывов'
                    },
                    {
                        title: 'Инвестирование в акцию ', subtitle: 'Практический курс от Coursera', ball: '9,6 превосходно', comments: '8 отзывов'
                    },
                ],
                linkCards2: [
                    {
                        name: 'Дата старта', value: '12 октября 2019'
                    },
                    {
                        name: 'Длительность', value: '11 недель'
                    },{
                        name: 'Нагрузка', value: '5-6 часов в неделю'
                    },{
                        name: 'Сертификат', value: 'Да'
                    },{
                        name: 'Школа', value: 'Swift Corurse'
                    },{
                        name: 'Официальный сайт', value: 'swiftcorurse.com.ru'
                    },{
                        name: 'Количество участников', value: '20'
                    },{
                        name: 'Возрастное ограничение', value: '16+'
                    },{
                        name: 'Локация', value: '2 Кожевнический переулок 12, Москва'
                    },

                ],
                items: [
                    "разработка",
                    "swift",
                    "программирование",
                    "онлайн обучение",
                    "повышение квалификации",
                    "ios",
                    "трудоустройство",
                    "практика"
                ]
            }
        },

        components: {
            Comments,
        },
    }
</script>

<style lang="scss" scoped>
    .head {
        cursor: pointer;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;
        /* identical to box height, or 156% */

        display: flex;
        align-items: center;

        /* Primary */

        color: #31B8A0;
    }
    .justify-content-between h6 {
        flex: none;
        order: 0;
        align-self: center;
        margin: 10px 0px;
    }
    .ball h6 {
        display: inline;
    }
    .row {
        padding: 20px 0;
    }
    .list-group-item {
        border-style: none;
    }
    .tag {
        background: #fff;
        border: 1px solid $light-grey;
        color: $black;
        margin: 0 10px 10px 0;
        padding: 2px 10px;
        display: inline-block;

        &.nuxt-link-exact-active {
            background: $primary;
            color: white;


        }

        &:hover {
            color: $black;
            text-decoration: none;
            cursor: pointer;

        }
    }
    button {
        text-align: center;
    }
    .list-group-item {
        border-style: none;
        background: none
    }
</style>

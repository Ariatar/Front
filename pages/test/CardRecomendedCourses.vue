<template>
    <div>
        <b-row>
            <b-col md="4">
                <b-card
                    no-body
                    style="max-width: 20rem;"
                    img-src="https://placekitten.com/380/200"
                    img-alt="Image"
                    img-top>
                    <template v-slot:header>
                        <b-nav
                            class="p-1"
                            card-header
                            tabs>
                            <h6
                                class="mr-2"
                                style="display: inline; color: black">
                                9,6 превосходно
                            </h6>
                            <h6
                                class="pl-2"
                                style="display: inline; color: darkgray">
                                128 отзывов
                            </h6>
                            <h6
                                class="pl-3"
                                style="display: inline">
                                Icon
                            </h6>
                        </b-nav>
                    </template>
                    <div class="mt-3 ml-3">
                        <div> <div class="price">14000</div> <div class="bonus">+200 бонусов</div></div>
                        <h1
                            class="d-inline"
                            style="font-size: 40px; color: #FFD337">
                            12000 <h6
                                style="color: black"
                                class="d-inline">
                                руб
                            </h6>
                        </h1>
                    </div>
                    <b-card-body>
                        <b-card-title class="header-6">Front-end разработчик с нуля</b-card-title>
                        <b-card-sub-title class="mb-2">Мастер класс</b-card-sub-title>
                        <b-card-text>
                            Получите востребованную професси frontend-разработчика.
                            Реализуйте жизнеспособные проекты уже во время обучения.
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4">
                <b-card
                    no-body
                    style="max-width: 20rem;"
                    img-src="https://placekitten.com/380/200"
                    img-alt="Image"
                    img-top>
                    <template v-slot:header>
                        <b-nav
                            class="p-1"
                            card-header
                            tabs>
                            <h6
                                class="mr-2"
                                style="display: inline; color: black">
                                9,6 превосходно
                            </h6>
                            <h6
                                class="pl-2"
                                style="display: inline; color: darkgray">
                                128 отзывов
                            </h6>
                            <h6
                                class="pl-3"
                                style="display: inline">
                                Icon
                            </h6>
                        </b-nav>
                    </template>
                    <div class="mt-3 ml-3">
                        <div> <div class="bonus2">+200 бонусов</div></div>
                        <h1
                            class="d-inline"
                            style="font-size: 40px; color: black">
                            12000 <h6
                                style="color: black"
                                class="d-inline">
                                руб
                            </h6>
                        </h1>
                    </div>
                    <b-card-body>
                        <b-card-title class="header-6">Front-end разработчик с нуля</b-card-title>
                        <b-card-sub-title class="mb-2">Мастер класс</b-card-sub-title>
                        <b-card-text>
                            Получите востребованную професси frontend-разработчика.
                            Реализуйте жизнеспособные проекты уже во время обучения.
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4">
                <b-card
                    no-body
                    style="max-width: 20rem;"
                    img-src="https://placekitten.com/380/200"
                    img-alt="Image"
                    img-top>
                    <template v-slot:header>
                        <b-nav
                            class="p-1"
                            card-header
                            tabs>
                            <h6
                                class="mr-2"
                                style="display: inline; color: black">
                                9,6 превосходно
                            </h6>
                            <h6
                                class="pl-2"
                                style="display: inline; color: darkgray">
                                128 отзывов
                            </h6>
                            <h6
                                class="pl-3"
                                style="display: inline">
                                Icon
                            </h6>
                        </b-nav>
                    </template>
                    <div class="mt-3 ml-3">
                        <div> <div class="price">14000</div> <div class="bonus">+200 бонусов</div></div>
                        <h1
                            class="d-inline"
                            style="font-size: 40px; color: #FFD337">
                            12000 <h6
                                style="color: black"
                                class="d-inline">
                                руб
                            </h6>
                        </h1>
                    </div>
                    <b-card-body>
                        <b-card-title class="header-6">Front-end разработчик с нуля</b-card-title>
                        <b-card-sub-title class="mb-2">Мастер класс</b-card-sub-title>
                        <b-card-text>
                            Получите востребованную професси frontend-разработчика.
                            Реализуйте жизнеспособные проекты уже во время обучения.
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="SCSS" scoped>
    .nav-tabs .nav-link {
        border-style: none;
        background: #E7F6F1;
    }
    .card-header {
        background: #E7F6F1;
    }
    .bonus {
        position: absolute;
        left: 200px;
        color: #7681A9;

    }
    .bonus2 {
        position: absolute;
        left: 130px;
        color: #7681A9;
    }
    .price {
        position: absolute;
        left: 135px;
        color: #B8BEC2;
        text-decoration: line-through;
    }
    .card-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        /* or 156% */

        letter-spacing: -0.02em;

        /* Dark grey */

        color: #667077;

    }
</style>

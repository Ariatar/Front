<template>
    <div>
        <div>
            <button
                class="mt-3 button search-panel_btn"
                @click.prevent="isVisible = !isVisible">
                Модальные окна
            </button>
        </div>
        <div v-if="isVisible">
            <div>
                <div v-b-modal.modal-center>
                    <b-button
                        @click="$bvModal.show('bv-modal-center')">
                        Целевое действие
                    </b-button>
                    <b-modal
                        id="modal-center"
                        style="posirion: realtive; top: 40%"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Целевое действие</template>
                        <div class="d-block">
                            <p>
                                Для того что бы получить доступ к комьюнити,
                                <br/>вам нужно получить курс данной
                                <br/>категории
                            </p>
                        </div>
                        <hr/>
                        <b-row>
                            <b-col md="6">
                                <b-button
                                    class="mt-3 button search-panel_btn"
                                    block
                                    @click="$bvModal.hide('bv-modal-center')">
                                    К курсам
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button
                                    style="height: 50px; background: #FFFFFF; color: #667077;"
                                    class="mt-3"
                                    block
                                    @click="$bvModal.hide('bv-modal-center')">
                                    Отменить
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-welcome
                        @click="$bvModal.show('bv-modal-welcome')">
                        Добро пожаловать в систему
                    </b-button>
                    <b-modal
                        id="modal-welcome"
                        style="posirion: realtive; top: 40%"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Добро пожаловать в систему</template>
                        <div class="d-block">
                            <p>
                                Твой аккаунт был успешно создан в личном
                                <br/>кабинете ты можешь дополнить информацию
                                <br/>о себе
                            </p>
                        </div>
                        <hr/>
                        <b-button
                            class="mt-3 button search-panel_btn"
                            block
                            @click="$bvModal.hide('bv-modal-welcome')">
                            Продолжить
                        </b-button>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-pay
                        @click="$bvModal.show('bv-modal-pay')">
                        Оплата бонусами
                    </b-button>
                    <b-modal
                        id="modal-pay"
                        style="posirion: realtive; top: 40%"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Оплата бонусами</template>
                        <div class="d-block">
                            <p>
                                Ты можешь оплатить до 50% стоимости курса
                                <br/>бонусами
                            </p>
                            <b-row>
                                <b-col md="6">
                                    <b-list-group-item>
                                        <h6>У тебя</h6>
                                        <h6>Курс стоит</h6>
                                        <h6>можно оплатить</h6>
                                    </b-list-group-item>
                                </b-col>
                                <b-col md="6">
                                    <b-list-group-item>
                                        <h6>3000 бонусов</h6>
                                        <h6 style="color: black">12 000 рублей</h6>
                                        <h6 style="color: black">до 6 000 рублей</h6>
                                    </b-list-group-item>
                                </b-col>
                            </b-row>
                            <div
                                class="mt-1"
                                style="background: #FFFFFF; border: 1px solid #E3E7E9; box-sizing: border-box;">
                                <b-form-input
                                    id="input-default"
                                    placeholder="Сколько бонусов используешь"></b-form-input>
                            </div>
                        </div>
                        <hr/>
                        <b-row>
                            <b-col md="6">
                                <b-button
                                    class="mt-3 button search-panel_btn"
                                    block
                                    @click="$bvModal.hide('bv-modal-pay')">
                                    К курсам
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button
                                    style="height: 50px; background: #FFFFFF; color: #667077;"
                                    class="mt-3"
                                    block
                                    @click="$bvModal.hide('bv-modal-pay')">
                                    Отменить
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-message
                        @click="$bvModal.show('bv-modal-message')">
                        Написать сообщение
                    </b-button>
                    <b-modal
                        id="modal-message"
                        style="posirion: realtive; top: 40%"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Написать сообщение</template>
                        <div class="d-block">
                            <p>
                                Напиши сообщение пользователю
                                <b>
                                    Анастасиия
                                    <br/>Иващенко
                                </b>. Начатый чат появится в твоем
                                <br/>личном кабинете
                            </p>
                        </div>
                        <div
                            class="mt-1"
                            style="background: #FFFFFF; border: 1px solid #E3E7E9; box-sizing: border-box;">
                            <b-form-input
                                id="input-default"
                                placeholder="Твое сообщение"></b-form-input>
                        </div>
                        <hr/>
                        <b-row>
                            <b-col md="6">
                                <b-button
                                    class="mt-3 button search-panel_btn"
                                    block
                                    @click="$bvModal.hide('bv-modal-message')">
                                    Отправить
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button
                                    style="height: 50px; background: #FFFFFF; color: #667077;"
                                    class="mt-3"
                                    block
                                    @click="$bvModal.hide('bv-modal-message')">
                                    Отменить
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-enter
                        @click="$bvModal.show('bv-modal-enter')">
                        Вход в систему
                    </b-button>
                    <b-modal
                        id="modal-enter"
                        style="position: relative; top: 40%"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Вход в систему</template>
                        <div class="d-block">
                            <p>
                                Рады видеть тебя снова. Введи свои данные
                                <br/>авторизации, что бы войти в систему
                            </p>
                        </div>
                        <form action>
                            <div
                                class="mt-1"
                                style="background: #FFFFFF; border: 1px solid #E3E7E9; box-sizing: border-box;">
                                <b-form-input
                                    id="input-default"
                                    placeholder="Email"></b-form-input>
                            </div>
                            <div
                                style="background: #FFFFFF; border: 1px solid #E3E7E9; box-sizing: border-box; margin-top: 30px">
                                <b-form-input
                                    id="input-default"
                                    placeholder="Пароль"></b-form-input>
                            </div>
                            <b-button
                                class="mt-3 search-panel_btn"
                                block
                                @click="$bvModal.hide('bv-modal-enter')">
                                Войти
                            </b-button>
                            <b-row class="mt-5">
                                <b-col
                                    style="text-align: start"
                                    md="6">
                                    <span style="color: #667077; cursor: pointer;">Забыли пароль?</span>
                                    <span style="color: #2F4858; cursor: pointer;">Восстановить</span>
                                </b-col>
                                <b-col md="6">
                                    <span style="color: #667077; cursor: pointer;">Еще нет аккаунта?</span>
                                    <span style="color: #2F4858; cursor: pointer;">Зарегестрироваться</span>
                                </b-col>
                            </b-row>
                        </form>
                        <hr/>
                        <b-row class="mt-2 p-3">
                            <b-col sm="8">Или войди через социальные сети</b-col>
                            <b-col
                                class="pl-1"
                                style="text-align: end"
                                sm="4">
                                F G VK
                            </b-col>
                        </b-row>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-error
                        @click="$bvModal.show('bv-modal-error')">
                        Ошибка соеденения
                    </b-button>
                    <b-modal
                        id="modal-error"
                        size="100px"
                        hide-footer>
                        <template v-slot:modal-title>Ошибка соеденения</template>
                        <div class="d-block">
                            <p>
                                При выполнении перехода была потеряна
                                <br/>связь с сетью интернет. Пожалуйста проверь
                                <br/>свое соеденение и попробуй снова.
                            </p>
                        </div>
                    </b-modal>
                </div>

                <div class="mt-3">
                    <b-button
                        v-b-modal.modal-adeptSMM
                        @click="$bvModal.show('bv-modal-adeptSMM')">
                        adeptSMM
                    </b-button>
                    <b-modal
                        id="modal-adeptSMM"
                        body-bg-variant="primary"
                        header-bg-variant="primary"
                        size="lg"
                        hide-footer>
                        <template
                            v-slot:modal-title>
                            <h3
                                style="color: gray; font-family: Roboto; font-style: normal; font-weight: normal; font-size: 20px; line-height: 25px; letter-spacing: -0.02em;">
                                Вы получили награду!
                            </h3>
                        </template>
                        <div class="d-block">
                            <b-card
                                bg-variant="primary"
                                img-src="https://placekitten.com/300/300"
                                img-alt="Card image"
                                img-left>
                                <b-card-text class="ml-4">
                                    <h2>Адепт SMM</h2>
                                    <p>
                                        С этой наградой вы получаете доступ к
                                        <br/>комьюнити Маркетинг и пожизненную
                                        <br/>скидку в 1% на все курсы связанные с
                                        <br/>SMM продвижением.
                                    </p>
                                </b-card-text>
                            </b-card>
                        </div>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                isVisible: false
            }
        },
    };
</script>

<style lang="scss" scoped>
    .card {
        border-style: none;
    }
    .modal-header {
        border-style: none;
    }
    h6 {
        color: #667077;
    }
    .list-group-item {
        border-style: none;
    }
    .search-panel {
        background: blue;
        display: flex;
        max-width: 1500px;
        flex-direction: column;
        margin: 20px 0;
        &_item {
            margin: 0 0 20px 0;
        }
        &_btn {
            min-width: 230px;
            background: #31b8a0;
            border: 0;
            outline: 0;
            color: #fff;
            font-size: 16px;
            height: 50px;
            &:hover {
                box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);
                transition: box-shadow 0.15s ease-in-out;
            }
        }
    }
</style>

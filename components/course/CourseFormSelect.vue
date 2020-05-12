<template>
    <div>
        <b-card>
            <h6
                class=" header-6 fix">
                Популярные фильтры
            </h6>
            <b-form-group>
                <b-form-checkbox-group
                    v-model="selected"
                    class="general-regular"
                    :options="options"></b-form-checkbox-group>
            </b-form-group>
        </b-card>
        <b-card>
            <div
                class="divider">
                <hr/>
            </div>
            <h6
                class="header-6">
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
                <div>{{ value }}</div>
            </div>
            <div
                class="divider">
                <hr/>
            </div>
            <h6
                class=" header-6 fix2">
                Категории
            </h6>
            <b-form-checkbox-group
                v-model="selected"
                :options="options8"></b-form-checkbox-group>
            <b-form-group>
                <div
                    class="divider">
                    <hr/>
                </div>
                <h6

                    class=" header-6 fix2">
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
            <h6

                class=" header-6 fix2">
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
        </b-card>
        <b-card>
            <form
                class="form-control"
                style="border-style: none">
                <input
                    class="form-control"
                    :placeholder="inputPlaceholder"
                    type="text"
                    maxlength="256">
            </form>
        </b-card>
    </div>
</template>

<script>

    export default {
        props: {
            t: {
                type: Object,
                default() {
                    return {}
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
                    { text: "1000 - 5000 ₽", value: "pineapple" },
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
                options8: [
                    { text: "Профессиональные курсы", value: "1" },
                    { text: "Дошкольное развитие"   , value: "2" },
                    { text: "Личностный рост", value: "3" },
                    { text: "Школьная программа", value: "4" },
                    { text: "Финансы", value: "5" },
                    { text: "Женские курсы", value: "6" }
                ]
            }
        },


    }
</script>

<style lang="SCSS">
.fix {
    margin-left: 10px;
}
.fix2 {
    margin-left: 5px;
}
.bv-no-focus-ring {

    display: grid;
    padding-left: 5px   ;
}
    .card-body {
        padding: 0;
    }

</style>

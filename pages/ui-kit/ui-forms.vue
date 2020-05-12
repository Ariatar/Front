<template>
    <div class="container p-5 mt-5 mb-5 bg-white">
        <h2 class="text-center">UI kit forms</h2>
        <div class="row mt-4">
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <b-form-input
                        v-model="inp1"
                        class="def-inp"
                        type="text"
                        placeholder="Text field"></b-form-input>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <b-form-input
                        v-model="inp2"
                        class="def-inp"
                        type="text"
                        placeholder="Text field 2"></b-form-input>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <b-form-input
                        v-model="inp3"
                        class="def-inp is-valid"
                        type="text"
                        placeholder="Text field 2"></b-form-input>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <b-form-input
                        v-model="inp4"
                        class="def-inp is-invalid"
                        type="text"
                        placeholder="Text field 2"></b-form-input>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes">Error message</div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-sm-6">
                <div class="def-inp-wrap">
                    <div
                        class="pass-type-toggle"
                        @click="passToggle"></div>
                    <b-form-input
                        v-model="inp5"
                        class="def-inp"
                        type="password"
                        placeholder="Password field"></b-form-input>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-6">
                <div class="def-inp-wrap">
                    <b-form-textarea
                        v-model="inp6"
                        class="def-inp"
                        placeholder="Textarea"></b-form-textarea>
                    <label class="def-inp-lbl">Label</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
        </div>



        <div class="row mt-5">
            <div class="col-sm-6">
                <div class="def-sel-wrap">
                    <v-select
                        :options="options"
                        label="label"></v-select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="def-sel-wrap">
                    <v-select
                        :options="options"
                        multiple
                        label="label"></v-select>
                </div>
            </div>
        </div>





        <div class="row mt-5">
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <date-picker
                        v-model="time1"
                        class="def-date-inp"
                        placeholder="Date"
                        value-type="format"></date-picker>
                    <label class="def-inp-lbl">Date picker</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <date-picker
                        v-model="time2"
                        class="def-date-inp"
                        placeholder="Date"
                        type="datetime"></date-picker>
                    <label class="def-inp-lbl">Date time picker</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
            <div class="col-sm-6 mb-3">
                <div class="def-inp-wrap">
                    <date-picker
                        v-model="time3"
                        class="def-date-inp"
                        placeholder="Date"
                        range></date-picker>
                    <label class="def-inp-lbl">Date range picker</label>
                    <div class="def-inp-mes"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    export default {
        name: "UiForms",
        components: {
            DatePicker,
            vSelect
        },
        data() {
            return {
                inp1: '',
                inp2: 'Focus',
                inp3: 'Success',
                inp4: 'Error',
                inp5: '',
                inp6: '',
                options: [
                    '1', '2', '3'
                ],
                time1: null,
                time2: null,
                time3: null,
            }
        },
        methods: {
            passToggle() {
                let passBtn = $(event.target),
                    passInp = passBtn.parents('.def-inp-wrap').find('.def-inp');
                if(passBtn.is('.visible')) {
                    passBtn.removeClass('visible');
                    passInp.attr('type', 'password');
                } else {
                    passBtn.addClass('visible');
                    passInp.attr('type', 'text');
                }
            }
        }
    }
</script>

<style lang="scss">

</style>

import Vue from 'vue'
import { configure, extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

extend('required', required)
extend('email', email)

const config = {
    classes: {
        valid: 'field-valid',
        invalid: 'field-invalid'
    }
};

configure(config);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

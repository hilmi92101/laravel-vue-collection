import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(VueRouter); // register vue router as a plugin

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});


/*

require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app'
});
*/
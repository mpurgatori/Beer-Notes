import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'
import logIn from './components/log-in.vue';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

const routes = [
  {
        name: 'logIn',
        path: '/',
        component: logIn
    }
];


Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
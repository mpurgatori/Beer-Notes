import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'
import signIn from './components/sign-in.vue';

import {firebase, firebaseui} from './js/firebase'

Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

const routes = [
    {
        name: 'signIn',
        path: '/',
        component: signIn
    }
];


Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
import './bootstrap';
import Vue from 'vue';
window.Vue = Vue;


import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App)
});

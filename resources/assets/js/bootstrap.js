import store from './store';
import _ from 'lodash';
import axios from 'axios';

window.store = store;

window._ = _;

window.axios = axios;

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

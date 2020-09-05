import { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import LastArticles from './components/LasArticles.vue';
import MyComponent from './components/MyComponent.vue';

const Vue = createApp(App);
Vue.use(VueRouter);

const routes = [
    { path: '/home', component: 'LastArticles' },
    { path: '/last-articles', component: 'LastArticles' },
    { path: '/my-component', component: 'MyComponent.vue' },
    { path: '/', component: 'LastArticles' }
];
Vue.mount('#app');


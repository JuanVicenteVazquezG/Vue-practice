import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';

import App from './App.vue';

import LastArticles from './components/LastArticles.vue';
import MyComponent from './components/MyComponent.vue';


// const routerHistory = createWebHistory();

const router = createRouter({
    // history: routerHistory,
    routes: [
        { path: '/home', component: LastArticles },
        { path: '/last-articles', component: LastArticles },
        { path: '/my-component', component: MyComponent },
        { path: '/', component: LastArticles },
    ]
});

const Vue = createApp(App);

Vue.use(router);

Vue.mount('#app');

export default router;

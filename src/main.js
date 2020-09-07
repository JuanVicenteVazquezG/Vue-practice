import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import LastArticles from './components/LastArticles.vue';
import MyComponent from './components/MyComponent.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
    { path: '/home', component: LastArticles },
    { path: '/last-articles', component: LastArticles },
    { path: '/mi-component', component: MyComponent },
    { path: '/hello-world', component: HelloWorld },
    { path: '/', component: LastArticles },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');


import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes/routes.js';
import App from './App.vue';

console.log(routes);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');


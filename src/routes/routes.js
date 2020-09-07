import LastArticles from '../components/LastArticles.vue';
import MyComponent from '../components/MyComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';
import BlogComponent from '../components/Blog.vue';
import FormComponent from '../components/Form.vue';
import PageComponent from '../components/Page.vue';

export const routes = [
    { path: '/home', component: LastArticles },
    { path: '/blog', component: BlogComponent },
    { path: '/form', component: FormComponent },
    { path: '/page/:id?', name: 'PageComponent', component: PageComponent },
    { path: '/last-articles', component: LastArticles },
    { path: '/my-component', component: MyComponent },
    { path: '/hello-world', component: HelloWorld },
    { path: '/', component: LastArticles },
];

console.log(routes);
<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <LastArticles></LastArticles>
      <SideBarComponent></SideBarComponent>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyComponent />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import MyComponent from "./components/MyComponent";
import HeaderComponent from "./components/HeaderComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";
import SideBarComponent from "./components/SideBarComponent.vue";
import LastArticles from "./components/LastArticles.vue";
import FooterComponent from "./compoment";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyComponent,
    HeaderComponent,
    SliderComponent,
    SideBarComponent,
    LastArticles,
    FooterComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import "./assets/css/styles.css";
</style>

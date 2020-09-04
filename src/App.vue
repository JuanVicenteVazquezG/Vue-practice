<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <SideBarComponent></SideBarComponent>
    </div>

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

export default {
  name: "App",
  components: {
    HelloWorld,
    MyComponent,
    HeaderComponent,
    SliderComponent,
    SideBarComponent,
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

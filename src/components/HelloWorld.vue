<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from "./MyComponent";

export default {
  name: "HelloWorld",
  components: { MyComponent },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mycomponent {
  background: red;
}
</style>

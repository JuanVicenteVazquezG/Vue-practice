<template>
  <section id="content">
    <h2 class="subheader">Hello world Component</h2>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <MyComponent />
    </div>
  </section>
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
<style >
</style>

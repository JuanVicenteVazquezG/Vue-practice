<template>
  <section id="content">
    <h2 class="subheader">Hello world Component</h2>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>

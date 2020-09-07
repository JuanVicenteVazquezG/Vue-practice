<template>
  <section id="content">
    <h2 class="subheader">My Component</h2>
    <hr />
    <h1>this is a proof</h1>
    <h2>{{subtitle}}</h2>
    <hr />
  </section>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      subtitle: "this is only a subtitle",
    };
  },
};
</script>


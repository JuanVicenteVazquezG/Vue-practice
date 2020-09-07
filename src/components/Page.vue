<template>
  <section id="content">
    <h2 class="subheader">Proof Page!</h2>
    <h3>{{id_from_url}}</h3>
  </section>
</template>


<script>
export default {
  name: "PageComponent",
  mounted() {
    this.id_from_url = this.$route.params.id || "This id Params is empty!";
  },
  data() {
    return { id_from_url: null };
  },
};
</script>
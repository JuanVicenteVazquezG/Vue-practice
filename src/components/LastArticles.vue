<template>
  <section id="content">
    <h2 class="subheader">Últimos artículos</h2>

    <!--Articles list-->
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
            alt="Paisaje"
          />
        </div>

        <h2>Proof article</h2>
        <span class="date">5 minutes ago</span>
        <a href="#">Read more</a>

        <div class="clearfix"></div>
      </article>

      <!--ADD ARTICLE VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "LastArticles",
};
</script>
<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>May you do this?</h3>
      <a href="#" class="btn btn-success">Create Article</a>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Searcher</h3>
      <p>find the item you are looking for</p>
      <form>
        <input type="text" name="search" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>
<script>
export default {
  name: "SideBarComponent",
};
</script>
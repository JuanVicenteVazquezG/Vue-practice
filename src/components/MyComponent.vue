<template>
  <div id="mycomponent">
    <hr />
    <h1>Hello World Again!</h1>
    <h2>{{subtitle}}</h2>
    <hr />
  </div>
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


<template>
  <div id="app">
    <iframe width="0" height="0" src="https://www.youtube.com/embed/taNXwSP7Zqs?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=true" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC");
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #e08282;
}
iframe {
  display: none;
}
</style>

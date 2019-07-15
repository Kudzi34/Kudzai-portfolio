<template>
  <div id="app">
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Bio from "./components/Bio.vue";
import CV from "./components/Cv.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "app",
  components: {
    CV,
    Bio,
    Projects
  }
};
</script>

<style>
#app {
  background: #e3f2fd;
}
</style>

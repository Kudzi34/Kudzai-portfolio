<template>
  <div id="cv">
    <Nav></Nav>
    <div class="container-fluid">
      <div class="row">
        <div class="container">
          <div class="jumbotron text-center">
            <img id="cv-pic" src="../../public/CV.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "CV",
  components: {
    Nav
  }
};
</script>

<style>
#cv {
  background: #e3f2fd;
  width: 100%;
  height: 100%;
}
#cv-pic {
  width: 90%;
  height: 90%;
}
</style>

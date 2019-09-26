<template>
  <div id="tech-div">
    <div class="container fluid">
      <div>
        <div class="row">
          <div
            v-for="tech in technologies"
            class=" col-xs-12 col-md-2  text-center   mr-4 mt-3 mb-4"
          >
            <h3 class="mb-2 mr-5">{{ tech.name }}</h3>
            <img class="thumbnail" :src="tech.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Tech",
  data() {
    return {
      technologies: [
        {
          name: "JavaScript",
          image: require("../../public/javaScript.png")
        },
        {
          name: "HTML5",
          image: require("../../public/HTML.png")
        },
        {
          name: "CSS3",
          image: require("../../public/CSS.jpeg")
        },
        {
          name: "JQuery",
          image: require("../../public/JQuery.png")
        },
        {
          name: "React",
          image: require("../../public/react.png")
        },
        {
          name: "Redux",
          image: require("../../public/react & redux.jpeg")
        },
        {
          name: "Vue.js",
          image: require("../../public/vue.png")
        },
        {
          name: "Handlebars",
          image: require("../../public/handlebars.png")
        },
        {
          name: "Node.js",
          image: require("../../public/node.png")
        },
        {
          name: "NPM",
          image: require("../../public/npm.png")
        },

        {
          name: "Socket.IO",
          image: require("../../public/socket.io.png")
        },
        {
          name: "mySQL",
          image: require("../../public/SQL.png")
        },
        {
          name: "GIT",
          image: require("../../public/github.png")
        }
      ]
    };
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
#tech-div {
  background: silver;
  height: 650px;
}
img {
  height: 110px;
  width: 120px;
}
</style>

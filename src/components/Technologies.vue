<template>
  <div id="tech-div">
    <Nav></Nav>
    <div class="container">
      <div>
        <div class="row">
          <div
            v-for="tech in technologies"
            class="col-md-4 text-center  mt-3 mb-5"
          >
            <h3 class="mb-2">{{ tech.name }}</h3>
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
          name: "Node Package Manager",
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
          name: "GIT Version Control",
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
}
img {
  height: 150px;
  width: 160px;
}
</style>

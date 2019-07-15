import Bio from "./components/Bio.vue";
import Projects from "./components/Projects.vue";
import CV from "./components/Cv.vue";
import Technologies from "./components/Technologies.vue";

export default [
  { path: "/", component: Bio },
  { path: "/projects", component: Projects },
  { path: "/cv", component: CV },
  { path: "/technologies", component: Technologies }
];

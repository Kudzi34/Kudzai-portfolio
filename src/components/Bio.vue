<template>
  <div class="">
    <Nav></Nav>

    <div id="Bio">
      <div class="container">
        <div class="row">
          <div class="mx-auto">
            <img
              class="rounded-circle border-primary rounded-lg img-thumbnail mt-5 mb-3"
              src="../../public/kudzi- pic.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="mb-2 text-info">Kudzai David Nyakunu</h1>
              <div class="d-flex justify-content-around">
                <div class="jumbotron shadow-lg p-3  mt-4 mb-5 bg-dark rounded">
                  <h2 class="text-secondary ">
                    <strong>Hi there!</strong>
                  </h2>
                  <p class="text-justify text-white p-1">
                    My name is Kudzai, I am a Javascript Frontend & Backend web
                    developer. I hold a fullstack web development certificate
                    from Berlin, Germany a Masters in Business Adminsitration
                    degree from Linköping University, Sweden and my Bachelors
                    degree in Business from University of Namibia, Namibia. I am
                    passionate about web development & all things business
                    related. I have knowledge & experience with JavaScript and
                    JavaScript libraries & frameworks such as React, Vue.Js,
                    jQuery, Handlebars & Backend tecnologies such as Node.js,
                    Express, SQL, Postgres amongst others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tech from "./Technologies.vue";
import Nav from "./Nav.vue";
export default {
  name: "Bio",
  components: {
    Tech,
    Nav
  }
};
</script>

<style scoped>
p {
  line-height: 35px;
  font-size: 20px;
  font-weight: bold;
}
h1 {
  -webkit-animation: tracking-in-expand-fwd 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) 3s both;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 3s
    both;
}
img {
  -webkit-animation: bounce-in-top 1.1s 2s both;
  animation: bounce-in-top 1.1s 2s both;
}

#Bio {
  width: 100%;
  height: 800px;
}
img {
  width: 250px;
  height: 250px;
}

/* Name */
.jumbotron {
  -webkit-animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    5s both;
  animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s both;
}
/* image */

@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@-webkit-keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

/* bio div */

@-webkit-keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>

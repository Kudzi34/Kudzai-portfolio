<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary ">
      <a class="navbar-brand" href="/">KDN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >HOME<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/technologies">TECHNOLOGIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cv">CV</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kudzi34"
              >GITHUB</a
            >
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
              href="https://www.linkedin.com/in/knyakunu/"
              >LINKEDIN</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {}
};
</script>

<style>
#nav {
}
</style>

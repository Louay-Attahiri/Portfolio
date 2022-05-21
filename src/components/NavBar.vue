<template>
  <nav class="navbar navbar-expand-lg bg-dark p-3 shadow">
    <div class="container">
      <a class="navbar-brand text-danger fs-4 fw-bold" :href="naam[1]"
        ><i class="bi bi-code-slash text-white fw-bold"></i> {{ naam[0] }}</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="item of navItems" :key="item" class="nav-item">
            <router-link class="nav-link text-white" :to="item.link" :key="link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      naam: ["Louay Attahiri", "/"],
      navItems: [
        { name: "Home", link: "/" },
        { name: "Over", link: "/over" },
        { name: "Projecten", link: "/projecten" },
        { name: "Contacten", link: "/contact" },
      ],
    };
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

.router-link-active {
  color: #dc3545 !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

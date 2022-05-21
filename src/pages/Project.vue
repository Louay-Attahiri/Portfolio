<template>
  <div>
    <div class="pt-5 pb-5 bg-dark shadow">
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col"></div>
              <div class="col-md-9 text-center">
                <h1 class="fw-bolder text-white text-center fs-1">
                  Mijn website is momenteel onder
                  <span class="text-danger fw-bolder">Constructie</span>
                </h1>
                <p class="text-center text-white">
                  Mijn website is momenteel onder constructie, sorry voor het ongemak. De
                  website zal in de toekomst weer werken zoals behoren.
                </p>
                <button type="button" class="btn btn-danger mx-2 btn-lg">
                  Verder Lezen
                </button>
                <router-link
                  type="button"
                  class="btn btn-outline-secondary mx-2 btn-lg"
                  to="/contact"
                  >Contact</router-link
                >
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

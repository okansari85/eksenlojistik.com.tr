<template>

  <section class="solutions px-3 py-5 px-lg-0" id="solutions">
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="row justify-content-evenly align-items-center">
        <div class="col-lg-6 position-relative text-lg-center">
          <img src="/image/home/eksen_videoo2.jpg" alt="Eksen Video" class="col-lg-10 m-lg-auto">
        </div>
        <div class="col-lg-5 py-3 py-lg-0 paragraph-margin2 text-center text-lg-start">
          <div class="globals-title pb-4">
            <span class="text-uppercase fs-6">{{  $t('home.size-ozel')  }}</span>
            <h1 class="fs-3 text-capitalize pt-1 pb-4 fw-semibold" v-html="$t('home.size-ozel-h1')"></h1>
            <p class="fs-09 col-lg-9"> {{  $t('home.size-ozel-p')  }}</p>
          </div>

          <div class="d-flex justify-content-center justify-content-lg-start align-items-center">

            <router-link to="/hizmetler" class="btn btn-main my-2 my-md-0 fs-09" style="width: 165px; max-width: 100%;">
              {{  $t('home.daha-fazla')  }}
            </router-link>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Title from "@/components/global/Title";

export default {
  name: "Solutions",
  components: {Title},
}
</script>

<style scoped lang="scss">
.globals-title {
  span {
    color: #3175f3;
    text-transform: uppercase !important;
    font-weight: 600;
  }
}

</style>

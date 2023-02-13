<template>
  <a :class="'nav-link' +state" :id="'v-pills-'+id+'-tab'" data-bs-toggle="pill" :data-bs-target="'#v-pills-'+id" role="tab" style="cursor:pointer;">
    <div class="news-item border-0">
      <div class="d-lg-flex justify-content-between">
        <div class="news-date text-center text-lg-start pb-3 pb-lg-0">
          <span class="fs-3">{{ dateNumber }}</span>
          <span class="fs-08 text-uppercase m-0 d-block"> {{ dateMonth }} </span>
        </div>
        <div>
          <p class="news-text fw-bold">{{ textNav }}</p>
          <button class="btn text-uppercase fs-07 px-4 d-none d-lg-block">{{ country }}</button>
          <div class="news-tag fs-07 pt-2 pb-2 pb-lg-0 pt-lg-4">
            <span class="text-decoration-underline me-3 text-uppercase">{{ tag1 }}</span>
            <span class="text-decoration-underline text-uppercase">{{ tag2 }}</span>
          </div>
          <div class="mobile-detail-btn d-lg-none position-relative" style="z-index: 33333;">
            <router-link :to="'/haberler/haber-detay/'+slug" class="btn btn-mobile btn-sm text-uppercase fs-07 d-block">Devamını Oku</router-link>
          </div>
        </div>
      </div>

    </div>
  </a>
</template>

<script>
export default {
  name: "NewsNav",
  props: {
    state: {
      default:'',
      type:String,
    },
    id:String,
    dateNumber:String,
    dateMonth:String,
    textNav:String,
    country:String,
    tag1:String,
    tag2:String,
    slug: String,
  },
  mounted() {
    const selectorA  = document.querySelector(".mobile-detail-btn");
    selectorA.addEventListener("click", function () { 
      window.location.href = '/haberler/haber-detay/'+this.slug;
     })
  }
}
</script>

<style scoped lang="scss">

.btn-mobile {
  background-color: #e6e6e6;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
}

</style>
<template>
  <a href="javascript:void(0)" :class="'nav-link' +state" :id="'v-pills-'+id+'-tab'" data-bs-toggle="pill" :data-bs-target="'#v-pills-'+id" role="tab">
    <div class="news-item border-0">
      <div class="d-flex justify-content-between">
        <div class="news-date">
          <span class="fs-3">{{ dateNumber }}</span>
          <span class="fs-08 text-uppercase m-0 d-block"> {{ dateMonth }} </span>
        </div>
        <div>
          <p class="news-text fw-bold">{{ textNav }}</p>
          <button class="btn text-uppercase fs-07 px-4">{{ country }}</button>
          <div class="news-tag fs-07 pt-4">
            <span class="text-decoration-underline me-3 text-uppercase">{{ tag1 }}</span>
            <span class="text-decoration-underline text-uppercase">{{ tag2 }}</span>
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
  }
}
</script>

<style scoped>

</style>
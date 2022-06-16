<template>

  <div :class="'tab-pane fade' +state" :id="'v-pills-'+id" role="tabpanel" tabindex="0">
    <div class="position-relative news-relative-wrap ms-auto">
      <div class="overlay"></div>
      <img :src="img" class="news-content-image" alt="content image">
      <div class="position-absolute top-0 p-3 news-content-wrap">
        <div class="news1-tag col-lg-10 p-4">
          <span class="text-decoration-underline text-uppercase">{{ tag1 }}</span>
          <span class="text-decoration-underline mx-2 text-uppercase">{{ country }}</span>
          <span class="text-decoration-underline text-uppercase">{{ tag2 }}</span>
          <h2 class="text-uppercase py-3 display-5 fw-bold">{{ textContent }}</h2>
          <span class="news1-date text-uppercase">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "NewsContent",
  props: {
    state: {
      default: '',
      type:String,
    },
    id:Number,
    img:String,
    tag1: {
      default: 'Haber',
      type:String,
    },
    tag2:{
      default: 'Avrupa Taşımacılığı',
      type:String,
    },
    country: {
      default:'Belcika',
      type:String,
    },
    textContent:String,
    date: {
      default: '22 subat 2022',
      type:String,
    },
  }
}
</script>

<style scoped lang="scss">

.news-relative-wrap, .news-content-image {
  position: relative;
  max-width: 100%;
}

@media(min-width:767.98px) {
  .news-relative-wrap, .news-content-image {
    height: 800px;
    width: 1000px;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .news-content-image{
    height: 400px;
    max-height: 400px;
    width: 100%;
    max-width: 100%;
  }
}

.overlay {
  position: absolute;
  content: '';
  background-color: rgba(0, 0, 0, .4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}


@media(min-width: 991.98px) and (max-width: 1200px) {
  .news-relative-wrap, .news-content-image {
    height: 700px;
    width: 700px;
    max-width: 100%;
  }
}


</style>
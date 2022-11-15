<template>
  

  <div :class="'tab-pane fade' +state" :id="'v-pills-'+id" role="tabpanel" tabindex="0">
    <div class="position-relative news-relative-wrap ms-auto d-none d-lg-block">
      <div class="overlay"></div>
      <img :src="img" class="news-content-image" alt="content image">
      <div class="position-absolute top-0 p-3 news-content-wrap">
        <div class="news1-tag col-lg-10 p-4">
          <span class="text-decoration-underline text-uppercase">{{ tag1 }}</span>
          <span class="text-decoration-underline mx-2 text-uppercase">{{ country }}</span>
          <span class="text-decoration-underline text-uppercase">{{ tag2 }}</span>
          <h2 class="text-uppercase py-3 display-5 fw-bold">{{ textContent }}</h2>
          <span class="news1-date text-uppercase">{{ date }}</span>
          <router-link :to="'/news-detail/'+slug" class="btn btn-main btn-main-news text-uppercase fs-07 px-4 d-block mt-4">Devamını Oku</router-link>
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
    id:String,
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
    slug:String,
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
    height: 700px;
    width: 1000px;
    max-width: 100%;
    object-fit: cover;
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
  background-color: rgba(0, 0, 0, .2);
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

.btn-main-news {
  &:hover {
    background-color: #1d5699;
    color: white;
  }
}


@media (max-width:576.98px) {
  .news1-tag {
    h2 {
      font-size: 1.3rem;
    }
  }
}

</style>
<template>

  <router-link :to="'/news-detail/' + id" class="news-item col-md-6 col-lg-4">
      <div class="news-top">
        <img :src="img" alt="">
      </div>
      <div class="news-bottom pt-3">
        <div class="news-tag text-black-50 fs-08">
          <a href="#!"><span>{{ tag1 }}</span></a>
          <a href="#!"><span>{{ tag2 }}</span></a>
          <a href="#!"><span>{{ tag3 }}</span></a>
        </div>
        <div class="news-item-text pt-3">
          <h6 class="news-item-text-title fw-bold">{{ title }}</h6>
          <p class="fs-09"> {{ paragraph }} </p>
        </div>
        <span class="news-item-date fs-08 text-black-50"> {{ date }} </span>

      </div>
  </router-link>



</template>

<script>
export default {
  name: "news-item",
  props: {
    img: {
      type:String,
      default:('/image/services/news-img.png')
    },
    tag1: {
      type:String,
      default: "Event1"
    },
    tag2: {
      type:String,
      default: "Event22"
    },
    tag3: {
      type:String,
      default: "Event33",
    },
    title: {
    type:String,
    default: "Ukraine crisis – Information from the IAEA"
    },
    paragraph: {
      type:String,
      default: "While every fleet is unique, many organizations "
    },
    date: {
      type:String,
      default: "19 Mart 2022"
    },
  },
}
</script>

<style scoped>

</style>
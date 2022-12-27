<template>
  <section class="news-detail py-5">
    <!-- Banner -->
    <div class="news-detail-top pt-5">
      <div class="container pb-3 pt-md-5">
        <div class="d-md-flex justify-content-between">
          <div class="w-100 pt-5 pb-3">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="text-capitalize fs-2 fw-500 col-md-8">{{ news.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="news-detail-middle bg-light">
      <div class="container py-5">
        <div class="row justify-content-between">
          <div class="col-md-6 news-detail-middle-text">
            <h2 class="fs-5 fw-500">{{ news.subTitle }}</h2>
            <div v-html="news.paragraph"></div> 
          </div>
          <div class="col-md-5 news-detail-middle-image text-center">
            <img :src="news.imgInner" alt="News Detail" style="height:500px; object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
  </section>
  <Socialbar/>
</template>

<script>
import Blog from '@/components/global/Blog';
import Socialbar from '@/components/global/Socialbar.vue';
import newsItem from "@/data/news/news.json";

export default {
  name: "NewsDetail",
  components: {
    Blog,
    Socialbar
},
  data() {
    return {
      navsItem: newsItem.navItems,
      news: []
    }
  },

  mounted() {
   let slugParams = this.$route.params.slug
    this.news = [
      this.navsItem.filter(item => item.slug == slugParams)
    ];
    this.news = this.news[0][0];
    window.scrollTo(0, 0);
  },
 
}
</script>

<style scoped>
.text-orange {
  color: #ffa10e;
}
</style>
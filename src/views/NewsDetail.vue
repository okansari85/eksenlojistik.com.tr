<template>
  <section class="news-detail py-5">
    <!-- Banner -->
    <div class="news-detail-top pt-5">
      <div class="container pb-3 pt-md-5">
        <div class="d-md-flex justify-content-between">
          <div class="w-100 pt-5 pb-3">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="fs-2 fw-500 col-md-8">{{ news.title }}</h1>
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
            <h2 class="fs-5 fw-500">{{ news.top_title }}</h2>
            <div v-html="news.content"></div>
          </div>
          <div class="col-md-5 news-detail-middle-image text-center">
            <img :src="'/' + news.image_side" alt="News Detail" style="height:500px; object-fit: cover;">
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
import router from '@/router';
import axios from "axios";

export default {
  name: "NewsDetail",
  components: {
    Blog,
    Socialbar
},
  data() {
    return {
      news: {},
      slug: this.$route.params.slug,
    }
  },

    created() {
        this.fetchNews();
      },
      watch: {
        '$i18n.locale': function (val) {
          this.fetchNews();
        }
      },
      methods: {
        fetchNews() {
          const url = `http://eksenlojistik.com.tr/api/get-news/${this.slug}${this.$i18n.locale === 'tr' ? '' : 'en'}`;
          axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(response => {
            console.log(response.data.news);
            this.news = response.data.news;
          })
          .catch(error => {
            console.log(error);
          })
        }
      },
    }



    // bunu yaptığım zaman select menüsünden dil seçimi yapınca news detail sayfasında dil ve url değişmiyor ama news sayfasında değişiyor. news detail sayfasında da değişmesi gerekiyor.

    

</script>

<style scoped>
.text-orange {
  color: #ffa10e;
}
</style>
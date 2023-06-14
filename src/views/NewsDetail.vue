<template>
  <section class="news-detail">
    <!-- Banner -->
    <section class="news-news banner">
      <img :src="news.image_brand" alt="News Banner" style="filter:brightness(60%)">
        <div class="services-banner-content text-start">
            <div class="container pb-3 pt-md-5 title-animation">
              <div class="row">
                <span class="text-uppercase fw-semibold">{{ $t('services.eksen-logistic') }}</span>
                <h1 class="display-5 fw-600 text-white">{{ news.title }}</h1>
              </div>
            </div>
      </div>
    </section>
    <!-- Content -->
<!--    <div class="news-detail-middle bg-light">-->
<!--      <div class="py-5" style="max-width: 760px; margin-left: auto; margin-right: auto; padding-left: 15px; padding-right: 15px;">-->
<!--          <div class="news-detail-middle-text">-->
<!--            <h2 class="fs-4 mb-4 fw-500">{{ news.top_title }}</h2>-->
<!--            <p style="color: #8a8a8a; font-size: 18px" v-html="news.content"></p>-->
<!--            <div class="news-detail-middle-image text-center">-->
<!--                  <img :src="'/' + news.image_side" alt="News Detail" style="height:auto; width: 100%; max-width: 100%; object-fit: cover;">-->
<!--            </div>-->
<!--          </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="news-detail-middle bg-light">
      <div class="py-5 container">
        <div class="news-detail-middle-text row gap-2 justify-content-between">
          <div class="col-xl-7">
            <h2 class="fs-4 mb-4 fw-500">{{ news.top_title }}</h2>
            <p style="color: #8a8a8a; font-size: 18px" v-html="news.content"></p>
          </div>
          <div class="news-detail-middle-image col-xl-4">
            <img :src="'/' + news.image_side" alt="News Detail" style="height:auto; width: 100%; max-width: 100%; object-fit: cover;">
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
          // const url = `http://eksenlojistik.com.tr/api/get-news/${this.slug}${this.$i18n.locale === 'tr' ? '' : 'en'}`;
          const url = `http://eksenlojistik.com.tr/api/get-news/${this.slug}`;
          // const url = `http://127.0.0.1:8000/api/get-news/${this.slug}`;
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

</script>
<style scoped lang="scss">
.text-orange {
  color: #ffa10e;
}

</style>
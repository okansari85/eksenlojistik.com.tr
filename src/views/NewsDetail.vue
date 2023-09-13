<template>
  <section class="news-detail">
    <!-- Banner -->
    <section class="news-news banner">
      <img :src="'/'+news.image_brand" alt="News Banner" style="filter:brightness(60%)" class="position-absolute top-0 end-0 start-0 w-100 h-100">
        <div class="services-banner-content text-start h-100 pb-5 px-3 px-lg-0" style="z-index:333">
            <div class="container py-md-5 title-animation h-100 d-flex flex-column align-items-start justify-content-end">
                <span class="text-uppercase fw-semibold">{{ $t('services.eksen-logistic') }}</span>
                <h1 class="display-5 fw-600 text-white">{{ news.title }}</h1>
            </div>
      </div>
    </section>
    <div class="news-detail-middle bg-light">
      <div class="py-5 container">
        <div class="news-detail-middle-text">
          <div class="overflow-hidden">
            <img :src="news.image_side" class="col-lg-5 pe-3 ps-3 pe-lg-5 pb-3 mw-100 float-lg-start object-fit-contain" alt="News Detail" style=" max-height:500px; object-fit: contain;">
              <div class="px-4">
                <h2 class="fs-5 fw-500 mb-1">{{ news.top_title }}</h2>
                <p v-html="news.content" class="col pt-0"></p>
              </div>  
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
          // const url = `http://eksenlojistik.com.tr/api/get-news/${this.slug}`;
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


<style scoped>
.text-orange {
  color: #ffa10e;
}

</style>
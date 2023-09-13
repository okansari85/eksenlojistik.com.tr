<template>
  <main>
    <section class="news-news banner" style="">
      <img src="/image/news/news-background2.jpg" alt="News Banner" class="position-absolute top-0 end-0 start-0 w-100 h-100" style="filter:brightness(60%)">
      <div class="services-banner-content text-start h-100 pb-5 px-3 px-lg-0" style="z-index:333">
        <div class="container py-md-5 title-animation h-100 d-flex flex-column text-center align-items-center justify-content-end">
            <span class="text-uppercase fw-semibold">{{ $t('services.eksen-logistic') }}</span>
            <h1 class="display-5 fw-600 text-white">{{ $t('menu.haberler') }}</h1>
        </div>
      </div>
    </section>

    <section class="news-content">
      <div class="container py-5">
        <div class="row pt-4 row row-cols-lg-3 gap-4 px-3 px-md-0">
          <router-link v-for="news in newsItem" :key="news.id" :to="{ name: 'haber-detay', params: { slug: news.slug } }"
            class="news-item border-0">
            <img :src="news.image_cover" :alt="news.title" style="height:220px; width:100%; object-fit: cover;">
            <div class="news-bottom pt-3">
              <div class="news-item-text pb-3 col-11">
                <h6 class="news-item-text-title fw-500" style="color: #040c2c">
                  <div v-html="news.title"></div>
                </h6>
                <p class="news-item-paragraph" style="color:#8a8a8a;">
                <div v-html="news.content"></div>
                </p>
              </div>
            </div>
            <router-link class="fs-09 fw-bold text-uppercase"
              style="text-transform: uppercase!important;"
              :to="{ name: 'haber-detay', params: { slug: news.slug } }">{{ $t('news.daha-fazla') }}</router-link>
          </router-link>
        </div>
        <div class="cour-wrapper py-5">
          <Kur />
        </div>
      </div>
    </section>
  </main>

  <Socialbar />
</template>

<script>

import Kur from "@/components/home/Kur";
import Socialbar from "@/components/global/Socialbar.vue";
import axios from "axios";

export default {
  name: 'News',
  components: { Kur, Socialbar },
  data() {
    return {
      newsItem: [],
    }
  },

  methods: {
    getNewsItem() {

      if (this.$i18n.locale == 'tr') {
        axios.get('http://eksenlojistik.com.tr/api/get-all-news/tr')
          // axios.get('http://127.0.0.1:8000/api/get-all-news/tr')
          .then(response => {
            this.newsItem = response.data.news;
          })
          .catch(() => {
            this.$swal({
              title: "Hata!",
              text: "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
              icon: "error",
              confirmButtonText: "Tamam",
            });
          })

      } else {

        axios.get('http://eksenlojistik.com.tr/api/get-all-news/en')
          // axios.get('http://127.0.0.1:8000/api/get-all-news/en')
          .then(response => {
            this.newsItem = response.data.news;
          })
          .catch(() => {
            this.$swal({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error",
              confirmButtonText: "OK",
            });
          })
      }
    },
  },

  mounted() {
    this.getNewsItem();
  },

  watch: {
    $i18n: {
      handler() {
        this.getNewsItem();
      },
      deep: true
    }
  }

}
</script>

<style scoped lang="scss">
.news-item-paragraph {
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}</style>
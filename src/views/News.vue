<template>

  <main>
    <section class="news-news banner">
        <img src="/image/services/news.jpg" alt="News Banner" style="filter:brightness(60%)">
        <div class="services-banner-content">
            <div class="container">
                <div class="row">
                  <span class="text-uppercase fw-semibold">{{ $t('services.eksen-logistic') }}</span>
                  <h1 class="display-6 fw-semibold text-white">{{ $t('menu.haberler') }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="news-content">
      <div class="container py-5">
        <div class="row justify-content-between pt-4">
            <router-link v-for="news in newsItem" :key="news.id" :to="{ name: 'haber-detay', params: { slug: news.slug } }" class="news-item col-md-6 col-lg-4 border-0 d-flex flex-column">
              <div class="news-top"><img :src="'/' + news.image_cover" :alt="news.title" style="height:220px;"></div>
              <div class="news-bottom pt-3">
                <div class="news-item-text pb-3 col-11 col-md-10">
                  <h6 class="news-item-text-title fw-500"><div v-html="news.title"></div></h6>
                  <p class="news-item-paragraph fs-09" style="color:#767676;"><div v-html="news.content"></div></p>
                </div>
              </div>
              <router-link class="fs-09 fw-bold text-uppercase justify-content-end" style="text-transform: uppercase!important;" :to="{ name: 'haber-detay', params: { slug: news.slug } }">{{$t('news.daha-fazla')}}</router-link>
            </router-link>
        </div>
        <div class="cour-wrapper py-5">
          <Kur/>
        </div>
      </div>
    </section>
  </main>

  <Socialbar/>

</template>

<script>

import Kur from "@/components/home/Kur";
import Socialbar from "@/components/global/Socialbar.vue";
import axios from "axios";

export default {
  name: 'News',
  components: {Kur, Socialbar},
  data() {
    return {
      newsItem: [],
    }
  },

  methods: {
    getNewsItem() {

      if(this.$i18n.locale == 'tr') {

        axios.get('http://eksenlojistik.com.tr/api/get-all-news/tr')
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
    // selected language == true then get news
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
}

</style>
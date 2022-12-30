<template>

  <main>
    <section class="news-news banner">
        <img src="/image/services/news.jpg" alt="News Banner" style="filter:brightness(60%)">
        <div class="services-banner-content">
            <div class="container">
                <div class="row">
                  <span class="text-uppercase fw-semibold">eksen lojistik</span>
                  <h1 class="display-6 fw-semibold text-white">Haberler</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="news-content">
      <div class="container py-5">
        <div class="row justify-content-between pt-4">
            <router-link :to="{ name: 'news-detail', params: { slug: item.slug } }"
              v-for="item in navsItem" :key="item.slug" 
              class="news-item col-md-6 col-lg-4 border-0 d-flex flex-column justify-content-between">
              <div class="news-top">
                <img :src="item.img" alt="News Detail Image">
              </div>
              <div class="news-bottom pt-3 d-flex flex-column">
                <div class="news-item-text pb-3 col-11 col-md-10">
                  <h6 class="news-item-text-title fw-500">{{ item.title }}</h6>
                  <p class="news-item-paragraph fs-09" style="color:#767676;">
                    <div v-html="item.paragraph2"></div>
                  </p>
                </div>
              </div>
              <router-link class="fs-09 fw-bold " style="text-transform:uppercase;" :to="{ name: 'news-detail', params: { slug: item.slug } }">Daha Fazlasını Oku</router-link>
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

import NewsAndAnnouncement from "@/data/news/news-and-announcement";
import newsItem from "@/data/news/news.json";
import Kur from "@/components/home/Kur";
import Socialbar from "@/components/global/Socialbar.vue";

export default {
  name: 'News',
  components: {NewsAndAnnouncement, Kur, Socialbar},
  data() {
    return {
        navsItem: newsItem.navItems
    }
  },
  mounted() {
    console.log(this.navsItem);
    window.scrollTo(0, 0)
  },
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
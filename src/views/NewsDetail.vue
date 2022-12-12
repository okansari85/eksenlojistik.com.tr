<template>
  <!-- {{ $route.params.id }} -->
  <section class="news-detail py-5">
    <div class="news-detail-top pt-5">
      <div class="container pb-3 pt-5">
        <div class="d-md-flex justify-content-between">
          <div class="col-md-10">
            <p class="fw-500 fs-6"><i class="bi bi-calendar pe-1"></i>{{ news.date }}</p>
            <h1 class="text-capitalize fw-500">{{ news.title }}</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="news-detail-middle bg-light">
      <div class="container py-5">
        <div class="row justify-content-between">
          <div class="col-md-6 news-detail-middle-text">
            <h2 class="fs-5 fw-500">{{ news.paragraph }}</h2>
            <p class="pt-3"> Eksen Lojistik "Genel Müdürü Tuğba GÜL"  kuruluşlarından bu yana bir çok başarıya imza attıklarını ve şirket yapısının en önemli parçalarından birinin samimiyet ve bilgi paylaşımı olduğunu belirtti. </p>
            <p class="pt-3">Deneyimli çalışma arkadaşlarımızın  , aramıza yeni katılan genç arkadaşlarımıza bilgi ve deneyimlerini paylaşmaları 	
            onlara yol gösterici olmaları başarımızın  bütünlüğünü göstermektedir. Ayrıca  Uluslararası Lojistik okuyan öğrenci arkadaşlara staj imkanı sağlamaktayız. </p>
            <p>Hem staj hem ekibimizdeki tüm çalışanlarımıza sektörel bilgi ve tecrübelerin okul niteliğinde öğretildiği bir kurum olmaktan mutlu duyduklarını dile getirdi. 	</p>
            <p class="fst-italic py-3 fw-500">Öğrenme tutkusu geliştirin. Eğer yaparsan, büyümeyi asla bırakmayacaksın.  Anthony J. D’Angelo</p>
          </div>
          <div class="col-md-5 news-detail-middle-image">
            <img :src="news.img" alt="News Detail">
          </div>
        </div>
      </div>
    </section>
  </section>

  <Blog/>
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
  },

}
</script>

<style scoped>

.text-orange {
  color: #ffa10e;
}


</style>
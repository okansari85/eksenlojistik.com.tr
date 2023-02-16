<template>

  <section class="news my-lg-5 py-5">
    <div class="container-fluid">
      <div class="row py-5 align-items-center justify-content-xl-center">
        <div class="col-lg-5 col-xl-4 paragraph-margin">
          <div class="news-title-top py-4 text-center text-lg-start">
            <h1 class="fw-bold text-capitalize">son haber</h1>
            </div>
          <div class="nav nav-pills me-xl-3 " id="v-pills-tab" role="tablist" style="height: 500px; overflow-y: scroll">
            <NewsNav
                :class="'active'"
                id="1"
                date-number=07
                date-month="subat"
                text-nav="Transit Ambargo: Paris ve Frankfurt taki mevcut taşıma durumu"
                country="belcika"
                tag1="haber"
                tag2="avrupa taşımacılığı"
            />
            <NewsNav

                id="2"
                date-number=22
                date-month="subat"
                text-nav="Eksen Lojistik artık yeni ekibiyle Belçika'da faaliyete geçti"
                country="belcika"
                tag1="haber"
                tag2="avrupa taşımacılığı"
            />            
            <NewsNav
              id="2"
              date-number=22
              date-month="subat"
              text-nav="Eksen Lojistik artık yeni ekibiyle Belçika'da faaliyete geçti"
              country="belcika"
              tag1="haber"
              tag2="avrupa taşımacılığı"
          />
          </div>
          <div class="my-5 pt-3 text-center text-lg-start">
            <router-link to="/haberler" class="btn btn-main w-50 fs-08">tümünü gör</router-link>
          </div>
        </div>
        <div class="col-lg-6 px-4 px-lg-0">
          <div class="tab-content" id="v-pills-tabContent">
            <NewsContent
                :class="'show active'"
                id="1"
                :img="('image/home/eksen_news_slide1.png')"
                text-content="eksen lojistik yeni ekibiyle belçika da faaliyete geçti"
                country="belcika"
                tag1="haber"
                tag2="avrupa taşımacılığı"
                date="22 subat 2022"
            />
            <NewsContent
                id="2"
                :img="('image/home/k1.jpg')"
                text-content="Eksen Lojistik artık yeni ekibiyle Belçika'da faaliyete geçti"
                country="belcika"
                tag1="haber"
                tag2="avrupa taşımacılığı"
                date="22 subat 2022"
            />
          </div>
        </div>
      </div>
    </div>
  </section>


  <Socialbar/>

</template>

<script>
import NewsNav from "@/components/home/news/NewsNav.vue";
import NewsContent from "@/components/home/news/NewsContent.vue";
import Socialbar from "@/components/global/Socialbar.vue";
export default {
  name: "NewsHome",
  components: { NewsNav, NewsContent, Socialbar },
  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>

</style>
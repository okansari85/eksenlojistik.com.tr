<template>
  <Nav/>
  <main class="global-sub-page mt-5">
    <section>
      <div class="container">

        <div class="py-5 my-5">

          <b-tabs pills class="sub-tab justify-content-center ">
            <b-tab v-for="(navs, index) in navsItem"
                   :title="navs.title" :key="index"
            >
              <b-card-text class="py-5 px-3">
                <component class="pt-5" :is="navs.content" :navs="navs"></component>
              </b-card-text>
            </b-tab>
          </b-tabs>

        </div>
      </div>
    </section>
  </main>

  <Footer/>

</template>

<script>
import Nav from '@/layout/Nav';
import Footer from '@/layout/Footer';
import NewsAndAnnouncement from "@/data/news/news-and-announcement";
import NewsOnly from "@/data/news/news-only";
import AnnouncementOnly from "@/data/news/announcement-only";

export default {
  name: 'News',
  components: {Nav, Footer, NewsAndAnnouncement, NewsOnly, AnnouncementOnly},
  data() {
    return {
      navsItem: [
        {
          title: "Çalışma Prensipleri",
          content: "NewsAndAnnouncement"
        },
        {
          title: "Eğitim ve Gelişim",
          content: "NewsOnly"

        },
        {
          title: "Başvuru",
          content: 'AnnouncementOnly'

        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
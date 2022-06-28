<template>

  <div>
    <main class="global-sub-page">
      <section>
        <div class="container">

          <div class="pt-5">

            <b-tabs pills class="sub-tab justify-content-center">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index" :slug="navs.slug"
              >
                <b-card-text class="py-md-5 px-3">
                  <component class="pt-5" :is="navs.content" :navs="navs"></component>
                </b-card-text>
              </b-tab>
            </b-tabs>

          </div>
        </div>
      </section>
    </main>


  </div>

</template>

<script>

import NewsAndAnnouncement from "@/data/news/news-and-announcement";
import NewsOnly from "@/data/news/news-only";
import AnnouncementOnly from "@/data/news/announcement-only";

export default {
  name: 'News',
  components: {NewsAndAnnouncement, NewsOnly, AnnouncementOnly},
  data() {
    return {
      navsItem: [
        {
          slug: "calisma-prensipleri",
          title: "Çalışma Prensibi",
          content: "NewsAndAnnouncement"
        },
        {
          slug: "egitim-ve-gelisim",
          title: "Eğitim ve Gelişim",
          content: "NewsOnly"

        },
        {
          slug: "basvuru",
          title: "Başvuru",
          content: 'AnnouncementOnly'

        },
      ],
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
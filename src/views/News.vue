<template>

  <div>
    <main class="global-sub-page mt-md-4">
      <section>
        <div class="container">

          <div class="pt-2 pt-md-5">

            <b-tabs pills class="sub-tab">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index" :slug="navs.slug"
              >
                <b-card-text class="pb-5 px-3">
                  <component class="pt-2 pt-md-5" :is="navs.content" :navs="navs"></component>
                </b-card-text>
              </b-tab>
            </b-tabs>

          </div>
          <div class="py-5">
            <Kur/>
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
import Kur from "@/components/home/Kur";

export default {
  name: 'News',
  components: {NewsAndAnnouncement, NewsOnly, AnnouncementOnly, Kur},
  data() {
    return {
      navsItem: [
        {
          slug: "calisma-prensipleri",
          title: "Haber",
          content: "NewsAndAnnouncement"
        },
        {
          slug: "egitim-ve-gelisim",
          title: "Duyuru",
          content: "NewsOnly"
        },
        {
          slug: "basvuru",
          title: "Basın",
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
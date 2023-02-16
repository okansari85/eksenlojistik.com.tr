<template>

  <div>
    <main class="global-sub-page mt-md-4">
      <section>
        <div class="container">
          <div class="pt-2 pt-md-5">
            <b-tabs pills class="sub-tab news-tabs">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index" :slug="navs.slug"
                >
                <b-card-text class="pb-5 px-3">
                  <!-- <component class="pt-3" :is="navs.content" :navs="navs"></component> -->
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
  <Socialbar/>

</template>

<script>

import NewsAndAnnouncement from "@/data/news/news-and-announcement.vue";
import Kur from "@/components/home/Kur.vue";
import Socialbar from "@/components/global/Socialbar.vue";

export default {
  name: 'News',
  components: {NewsAndAnnouncement, Kur, Socialbar},
  data() {
    return {
      navsItem: [
        {
          id: 1,
          slug: "calisma-prensipleri",
          title: "Haberler",
          content: "NewsAndAnnouncement"
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>
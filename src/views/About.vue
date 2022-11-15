<template>
  <div>
    <main class="global-sub-page">
      <section>
        <div class="container mt-5 pt-4">
          <HeroImage
              :title="heroTitle"
              :miniTitle="heroMiniTitle"
              :img="heroImg"
          />

          <div class="py-5">

            <b-tabs pills class="sub-tab justify-content-center ">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index"
                     @click="Changer(index)"
                      :active="$route.params.slug == navs.slug ? '' : 'active'"
              >
                <b-card-text class="py-5 px-3">
                  <component class="pt-5" :is="navs.content" :navs="navs"></component>
                </b-card-text>
              </b-tab>
            </b-tabs>

          </div>
        </div>
      </section>

      <Blog/>

    </main>
  </div>


</template>

<script>
import HeroImage from "@/components/global/HeroImage";
import Title from "@/components/global/Title";
import AboutContent from "@/data/about-us/about";
import AboutMission from "@/data/about-us/about-mission";
import AboutTeam from "@/data/about-us/about-team";
import AboutSustainability from "@/data/about-us/about-sustainability";
import Blog from "@/components/global/Blog";



export default {
  name: 'About',
  components: {HeroImage, Title, AboutContent, AboutMission, AboutTeam, AboutSustainability, Blog},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Eksen Lojistik",
          heroImg: ('/image/services/hakkimizda.jpg'),
          title: "Hakkımızda",
          content: "AboutContent",
          slug: 'hakkimizda'

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Kalite Politikamız",
          heroImg: ('/image/services/takimuyeleri1.jpg'),
          title: "Kalite Politikamız",
          content: 'AboutTeam',
          slug: 'kalite-politikamiz'

        },

        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Misyon & Vizyon",
          heroImg: ('/image/services/misyon_vizyon.jpg'),
          title: "Misyon & Vizyon",
          content: 'AboutMission'
          , slug: 'misyon-vizyon'

        },

        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Sürdürülebilirlik",
          heroImg: ('/image/services/surdurulebilirlik.jpg'),
          title: "Sürdürülebilirlik",
          content: "AboutSustainability",
          slug: 'surdurulebilirlik'

        },
      ],
      heroTitle: "Hakkımızda",
      heroMiniTitle: "Eksen Lojistik",
      heroImg: ('/image/services/hakkimizda.jpg'),
    }
  },
  methods: {
    Changer(index) {
      this.navsItem.forEach((value, key) => {
        if(key == index ) {
          this.heroTitle = value.heroTitle
          this.heroMiniTitle = value.heroMiniTitle
          this.heroImg = value.heroImg
          this.slug = value.slug;
        }
      });
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
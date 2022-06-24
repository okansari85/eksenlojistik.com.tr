<template>
  <div>
    <main class="global-sub-page mt-5">
      <section>
        <div class="container">
          <HeroImage
              :title="heroTitle"
              :miniTitle="heroMiniTitle"
              :img="heroImg"
          />

          <div class="py-5 my-md-5">

            <b-tabs pills class="sub-tab justify-content-center ">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index"
                     @click="Changer(index)"
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
          heroImg: ('/image/services/about-sub-page-hero1.png'),
          title: "Hakkımızda",
          content: "AboutContent"

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Sürdürülebilirlik",
          heroImg: ('/image/services/about-sub-page-hero2.png'),
          title: "Sürdürülebilirlik",
          content: "AboutSustainability"

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Misyon & Vizyon",
          heroImg: ('/image/services/ik1.jpg'),
          title: "Misyon & Vizyon",
          content: 'AboutMission'

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Takım Üyeleri",
          heroImg: ('/image/services/ab2.jpg'),
          title: "Takım Üyeleri",
          content: 'AboutTeam'

        },
      ],
      heroTitle: "Hakkımızda",
      heroMiniTitle: "Eksen Lojistik",
      heroImg: ('/image/services/about-sub-page-hero1.png'),
    }
  },
  methods: {
    Changer(index) {
      this.navsItem.forEach((value, key) => {
        if(key == index ) {
          this.heroTitle = value.heroTitle
          this.heroMiniTitle = value.heroMiniTitle
          this.heroImg = value.heroImg
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
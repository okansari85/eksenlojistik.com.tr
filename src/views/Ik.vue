<template>
  <div>
    <main class="global-sub-page mt-md-5">
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
    </main>
  </div>


</template>

<script>
import HeroImage from "@/components/global/HeroImage";
import Title from "@/components/global/Title";
import IkPrinciple from "@/data/ik/ik-principle";
import IkDevelopment from "@/data/ik/ik-development";


export default {
  name: 'Ik',
  components: {HeroImage, Title, IkPrinciple, IkDevelopment},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "IK",
          heroMiniTitle: "Çalışma Prensipleri",
          heroImg: ('/image/services/about-sub-page-hero1.png'),
          title: "Çalışma Prensipleri",
          content: "IkPrinciple"
        },
        {
          heroTitle: "IK",
          heroMiniTitle: "Eğitim ve Gelişim",
          heroImg: ('/image/services/about-sub-page-hero2.png'),
          title: "Eğitim ve Gelişim",
          content: "IkDevelopment"

        },
        {
          heroTitle: "IK",
          heroMiniTitle: "Başvuru",
          heroImg: ('/image/services/about-sub-page-hero1.png'),
          title: "Başvuru",
          content: 'IkPrinciple'

        },
      ],
      heroTitle: "IK",
      heroMiniTitle: "Çalışma Prensipleri",
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
}
</script>

<style scoped>

</style>
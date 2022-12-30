<template>
  <div>
    <main class="global-sub-page pt-0">
      <HeroImage2
              :title="heroTitle"
              :miniTitle="heroMiniTitle"
              :img="heroImg"
          />

      <section>
        <div class="container pt-4">
          <div class="py-md-5">

            <b-tabs pills class="sub-tab justify-content-center">
              <b-tab v-for="(navs, index) in navsItem"
                     :title="navs.title" :key="index"
                     @click="Changer(index)"
                      :active="$route.params.slug == navs.slug ? '' : 'active'"
                      >
                <b-card-text class="py-5 px-3">
                  <component class="pt-md-5" :is="navs.content" :navs="navs"></component>
                </b-card-text>
              </b-tab>
            </b-tabs>

          </div>
        </div>
      </section>
    </main>   
  </div>
  <Socialbar/>
</template>

<script>
import HeroImage2 from "@/components/global/HeroImage2";
import Title from "@/components/global/Title";
import IkPrinciple from "@/data/ik/ik-principle";
import IkDevelopment from "@/data/ik/ik-development";
import ikApplication from "@/data/ik/ik-application.vue";
import Socialbar from "@/components/global/Socialbar.vue";
import IKPolicy from "@/data/ik/ik-policy.vue";


export default {
  name: 'Ik',
  components: {HeroImage2, Title, IkPrinciple, IkDevelopment, ikApplication, IKPolicy, Socialbar},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "IK",
          heroMiniTitle: "İnsan Kaynakları",
          heroImg: ('/image/services/IKust.jpg'),
          title: "IK Politikamız",
          content: "IKPolicy",
          slug: 'ik-politikamiz'
        },
        {
          heroTitle: "IK",
          heroMiniTitle: "İnsan Kaynakları",
          heroImg: ('/image/services/basvuru.jpg'),
          title: "Başvuru",
          content: 'ikApplication',
          slug: 'basvuru'
        },
        {
          heroTitle: "IK",
          heroMiniTitle: "İnsan Kaynakları",
          heroImg: ('/image/services/about-sub-page-hero1.png'),
          title: "Çalışma Prensibi",
          content: "IkPrinciple",
          slug: 'calisma-prensibi'
        },
        {
          heroTitle: "IK",
          heroMiniTitle: "İnsan Kaynakları",
          heroImg: ('/image/services/egitimvegelisim.jpg'),
          title: "Eğitim ve Gelişim",
          content: "IkDevelopment",
          slug: 'egitim-ve-gelisim'
        },


      ],
      heroTitle: "IK",
      heroMiniTitle: "İnsan Kaynakları",
      heroImg: ('/image/services/IKust.jpg'),
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
  mounted() {
      window.scrollTo(0, 0)
    }
}
</script>

<style scoped>

</style>
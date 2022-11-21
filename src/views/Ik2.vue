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
      </main>   
    </div>
  </template>
  
  <script>
  import HeroImage from "@/components/global/HeroImage";
  import Title from "@/components/global/Title";
  import IkPrinciple from "@/data/ik/ik-principle";
  import IkDevelopment from "@/data/ik/ik-development";
  import ikApplication from "@/data/ik/ik-application.vue";
  
  
  export default {
    name: 'Ik',
    components: {HeroImage, Title, IkPrinciple, IkDevelopment, ikApplication},
    data() {
      return {
        navsItem: [
          {
            heroTitle: "IK",
            heroMiniTitle: "Başvuru",
            heroImg: ('/image/services/basvuru.jpg'),
            title: "Başvuru",
            content: 'ikApplication',
            slug: 'basvuru'
          },
          {
            heroTitle: "IK",
            heroMiniTitle: "Çalışma Prensibi",
            heroImg: ('/image/services/about-sub-page-hero1.png'),
            title: "Çalışma Prensibi",
            content: "IkPrinciple",
            slug: 'calisma-prensibi'
          },
          {
            heroTitle: "IK",
            heroMiniTitle: "Eğitim ve Gelişim",
            heroImg: ('/image/services/egitimvegelisim.jpg'),
            title: "Eğitim ve Gelişim",
            content: "IkDevelopment",
            slug: 'egitim-ve-gelisim'
  
          },
  
        ],
        heroTitle: "IK",
        heroMiniTitle: "Başvuru",
        heroImg: ('/image/services/basvuru.jpg'),
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
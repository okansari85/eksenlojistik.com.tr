<template>
  <div>
    <main class="global-sub-page">
      <div class="container pt-5 mt-md-5">

        <HeroImage
            :title="heroTitle"
            :miniTitle="heroMiniTitle"
            :img="heroImg"
        />

        <div class="py-5 my-md-5 d-md-flex justify-content-around">
          <b-tabs pills class="sub-tab">
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
    </main>


  </div>


</template>

<script>

import Title from "@/components/global/Title";
import HeroImage from "@/components/global/HeroImage";
import ServicesCustom from "@/data/services/Services-Custom";
import ServicesDomestic from "@/data/services/Services-Domestic";
import ServicesLFT from "@/data/services/Services-LFT";
import ServicesManagement from "@/data/services/Services-Management";
import ServicesEkspress from "@/data/services/Services-Ekspress";
import ServicesProject from "@/data/services/Services-Project";


export default {
  name: 'Services',
  components: {HeroImage, Title, ServicesCustom, ServicesDomestic, ServicesLFT, ServicesManagement, ServicesEkspress, ServicesProject},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Gümrükleme",
          heroImg: ('/image/services/_gumrukleme.jpg'),
          title: "Gümrükleme",
          content: 'ServicesCustom'
        },
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Kara Taşımacılığı",
          heroImg: ('/image/services/_karayolu.jpg'),
          title: "Kara Taşımacılığı",
          content: 'ServicesDomestic'

        },
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Parsiyel & LFT",
          heroImg: ('/image/services/parsiyel.jpg'),
          title: "Parsiyel & LFT",
          content: 'ServicesLFT'

        },
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Depo Yönetimi",
          heroImg: ('/image/services/depo.jpg'),
          title: "Depo Yönetimi",
          content: 'ServicesManagement'

        },
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Ekspress & Minivan",
          heroImg: ('/image/services/ekspress.jpg'),
          title: "Ekspres & Minivan",
          content: 'ServicesEkspress'
        },
        {
          heroTitle: "Servisler",
          heroMiniTitle: "Proje Taşımacılığı",
          heroImg: ('/image/services/proje-hero.jpg'),
          title: "Proje Taşımacılığı",
          content: 'ServicesProject'
        },
      ],
      heroTitle: "Servisler",
      heroMiniTitle: "Gümrükleme",
      heroImg: ('/image/services/gumruk3.jpg'),
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


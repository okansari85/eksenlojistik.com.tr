<template>
  <div>
    <main class="global-sub-page">
      <div class="container pt-5 mt-5">

        <HeroImage
            :miniTitle="heroMiniTitle"
            :img="heroImg"
        />

<!--        :title="heroTitle"-->

        <div class="py-5 d-md-flex justify-content-around">
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
import ServicesHighway from "@/data/services/Services-Highway";
import ServicesStore from "@/data/services/Services-Store";
import ServicesFTLandLTL from "@/data/services/Services-FTL-LTL";
import ServicesMinivan from "@/data/services/Services-Minivan";
import ServicesRulo from "@/data/services/Services-Rulo";


export default {
  name: 'Services',
  components: {HeroImage, Title, ServicesCustom, ServicesHighway, ServicesStore, ServicesRulo, ServicesMinivan, ServicesFTLandLTL},
  data() {
    return {
      navsItem: [
            {
          // heroTitle: "Servisler",
          heroMiniTitle: "Karayolu",
          heroImg: ('/image/services/_karayolu.jpg'),
          title: "Karayolu",
          content: 'ServicesHighway',
          // id:'kara-tasimacilgi',

        },
        {
          // heroTitle: "Servisler",
          heroMiniTitle: "Gümrükleme",
          heroImg: ('/image/services/_gumrukleme.jpg'),
          title: "Gümrükleme",
          content: 'ServicesCustom',
          // id:'gumruk'
        },

        {
          // heroTitle: "Servisler",
          heroMiniTitle: "Komple & Parsiyel",
          heroImg: ('/image/services/parsiyel.jpg'),
          title: "Komple & Parsiyel",
          content: 'ServicesFTLandLTL',
          // id:'parsiyel-lft',

        },
        {
          // heroTitle: "Servisler",
          heroMiniTitle: "Depolama",
          heroImg: ('/image/services/depo.jpg'),
          title: "Depolama",
          content: 'ServicesStore',
          // id:'depo-yonetimi',
        },
        {
          // heroTitle: "Servisler",
          heroMiniTitle: "Minivan",
          heroImg: ('/image/services/ekspress.jpg'),
          title: "Minivan",
          content: 'ServicesMinivan',
          // id:'ekspress-minivan',
        },
        {
          // heroTitle: "Servisler",
          heroMiniTitle: "Rulo Sac",
          heroImg: ('/image/services/proje-hero.jpg'),
          title: "Rulo Sac",
          content: 'ServicesRulo',
          // id:'proje-tasimaciligi',
        },
      ],
      // heroTitle: "Servisler",
      heroMiniTitle: "Karayolu",
      heroImg: ('/image/services/_karayolu.jpg'),
    }
  },
  methods: {
    Changer(index) {
      this.navsItem.forEach((value, key) => {
        if(key == index ) {
          // this.heroTitle = value.heroTitle
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


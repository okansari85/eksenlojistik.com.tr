<template>
  <div>
    <main class="global-sub-page">
      <div class="mobile-services py-3 px-3">
        
        <!-- <select name="" id="mobile-services-selected" 
                class="form-select d-md-none" 
                @change="Changer(index)">
                <option :value="index" v-for="(navs, index) in navsItem">
                  {{ navs.heroMiniTitle }}
                </option>
        </select> -->

      
      </div>
      <div class="container pt-md-5 mt-md-5">
        <HeroImage
            :miniTitle="heroMiniTitle"
            :img="heroImg"
        />
        <div class="py-md-5 d-md-flex justify-content-around">


          <b-tabs pills class="sub-tab">
            <b-tab v-for="
                  (navs, index) in navsItem"
                  :title="navs.title" :key="index"
                  @click="Changer(index)"
                  :active="$route.params.slug == navs.slug ? '' : 'active'"
                  >
              
                <b-card-text class="py-5 px-3">
                  <component class="pt-2 pt-md-5" :is="navs.content" :navs="navs"></component>
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
          heroMiniTitle: "Karayolu",
          heroImg: ('/image/services/_karayolu.jpg'),
          title: "Karayolu",
          content: 'ServicesHighway',
          slug: 'karayolu-tasimaciligi',
        },
        {
          heroMiniTitle: "Gümrükleme",
          heroImg: ('/image/services/_gumrukleme.jpg'),
          title: "Gümrükleme",
          content: 'ServicesCustom',
          slug: 'gumrukleme',
        },

        {
          heroMiniTitle: "Komple & Parsiyel",
          heroImg: ('/image/services/parsiyel.jpg'),
          title: "Komple & Parsiyel",
          content: 'ServicesFTLandLTL',
          slug: 'komple-parsiyel-tasimaciligi'

        },
        {
          heroMiniTitle: "Depolama",
          heroImg: ('/image/services/depo.jpg'),
          title: "Depolama",
          content: 'ServicesStore',
          slug: 'depolama-hizmeti'

        },
        {
          heroMiniTitle: "Minivan",
          heroImg: ('/image/services/ekspress.jpg'),
          title: "Minivan",
          content: 'ServicesMinivan',
          slug: 'minivan-tasimacilik'

        },
        {
          heroMiniTitle: "Rulo Sac",
          heroImg: ('/image/services/proje-hero.jpg'),
          title: "Rulo Sac",
          content: 'ServicesRulo',
          slug: 'rulo-sac-tasimaciligi'

        },
      ],

      heroMiniTitle: "Karayolu",
      heroImg: ('/image/services/_karayolu.jpg'),
    }
  },
  methods: {
    Changer(index) {
      this.navsItem.forEach((value, key) => {
        if(key == index ) {
          this.heroMiniTitle = value.heroMiniTitle
          this.heroImg = value.heroImg
          this.slug = value.slug;
        }
      });
    },
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>


<template>
  <Header/>
  <main class="global-sub-page">
    <div class="container pt-5 mt-5">

      <HeroImage
      :title="heroTitle"
      :miniTitle="heroMiniTitle"
      :img="heroImg"
      />

      <div class="py-5 my-5 text-center d-flex justify-content-around">

          <b-tabs pills class="sub-tab">

            <b-tab v-for="(navs, index) in navsItem"
                   :title="navs.title" :key="index"
                   @click="Changer(index)"
            >
              <b-card-text class="p-5">
                <div class="pt-5">
                  <div class="row justify-content-between">
                    <div class="col-lg-5">
                      <h6>{{ navs.contentTitle }}</h6>
                      <p>{{ navs.contentText }}</p>
                    </div>
                    <div class="col-lg-6">
                      <img :src="navs.contentImg" alt="Eksen Services" />
                    </div>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>

      </div>


    </div>
  </main>

  <Footer/>


</template>

<script>
import Title from "@/components/global/Title";
import Header from '@/layout/Nav';
import HeroImage from "@/components/global/HeroImage";
import Footer from '@/layout/Footer';

export default {
  name: 'Services',
  components: {HeroImage, Title, Header, Footer},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "test1",
          heroMiniTitle: "Home Tab",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Gümrükleme",
          contentTitle: "Test Content Title1",
          contentText: "Test Content Text1",
          contentImg: 'https://via.placeholder.com/600x600.png?text=Halaalll+Olsuunn+FURKAN',
        },
        {
          heroTitle: "test2",
          heroMiniTitle: "Home Tab2",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Kara Taşımacılığı",
          contentTitle: "Test Content Title2",
          contentText: "Test Content Text2",
          contentImg: 'https://via.placeholder.com/600/bf0f9c/000000?Text=HAALAAALLL+OLSUNN+FURKAAANNN',

        },
        {
          heroTitle: "test3",
          heroMiniTitle: "Home Tab3",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Parsiyel & LFT",
          contentTitle: "Test Content Title",
          contentText: "Test Content Text",
          contentImg: 'https://via.placeholder.com/600x600.png?text=Halaalll+Olsuunn+FURKAN',

        },
        {
          heroTitle: "test4",
          heroMiniTitle: "Home Tab4",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Depo Yönetimi",
          contentTitle: "Test Content Title",
          contentText: "Test Content Text",
          contentImg: "",
        },
        {
          heroTitle: "test5",
          heroMiniTitle: "Home Tab",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Ekspres & Minivan",
          contentTitle: "Test Content Title",
          contentText: "Test Content Text",
          contentImg: "",
        },
        {
          heroTitle: "test6",
          heroMiniTitle: "Home Tab",
          heroImg: require('../assets/image/services/depo-hero.png'),
          title: "Proje Taşımacılığı",
          contentTitle: "Test Content Title",
          contentText: "Test Content Text",
          contentImg: "",
        },
      ],
      heroTitle: "test1",
      heroMiniTitle: "Home Tab",
      heroImg: require('../assets/image/services/depo-hero.png'),
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
  }
}
</script>
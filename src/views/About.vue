<template>
<Nav/>
 <main class="global-sub-page mt-5">
   <section>
     <div class="container">
       <HeroImage
         :title="heroTitle"
         :miniTitle="heroMiniTitle"
         :img="heroImg"
       />

       <div class="py-5 my-5">

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
   <section>
     <div class="container text-center pb-5">
       <span class="text-uppercase text-black-50">blog</span>
       <h1>Size daha iyi hizmet sunduğumuzda <br/> bunun karşılığını ödül olarak aldık</h1>
       <div class="row justify-content-between align-items-center">
         <div class="blog-item py-4 col-md-4">
           <img src="../assets/image/global/v5.jpg" alt="">
           <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
         </div>
         <div class="blog-item py-4 col-md-4">
           <img src="../assets/image/global/v6.jpg" alt="">
           <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
         </div>
         <div class="blog-item py-4 col-md-4">
           <img src="../assets/image/global/v7.jpg" alt="">
           <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
         </div>
       </div>
     </div>
   </section>
 </main>

  <Footer/>

</template>

<script>
import HeroImage from "@/components/global/HeroImage";
import Nav from '@/layout/Nav';
import Footer from '@/layout/Footer';
import Title from "@/components/global/Title";
import AboutContent from "@/data/about-us/about";
import AboutMission from "@/data/about-us/about-mission";


export default {
  name: 'About',
  components: {HeroImage, Title, Nav, Footer, AboutContent, AboutMission},
  data() {
    return {
      navsItem: [
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Eksen Lojistik",
          heroImg: require('@/assets/image/services/depo-hero.png'),
          title: "Hakkımızda",
          content: "AboutContent"

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Sürdürülebilirlik",
          heroImg: require('@/assets/image/services/depo-hero.png'),
          title: "Sürdürülebilirlik",
          content: "AboutContent"

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Misyon & Vizyon",
          heroImg: require('@/assets/image/services/depo-hero.png'),
          title: "Misyon & Vizyon",
          content: 'AboutMission'

        },
        {
          heroTitle: "Hakkımızda",
          heroMiniTitle: "Takım Üyeleri",
          heroImg: require('@/assets/image/services/depo-hero.png'),
          title: "Takım Üyeleri",

        },
      ],
      heroTitle: "Hakkımızda",
      heroMiniTitle: "Eksen Lojistik",
      heroImg: require('@/assets/image/services/depo-hero.png'),
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
<template>
<section class="numbers">
  <div class="container-fluid text-center py-5 gx-0 overflow-hidden">
    <div class="row flex-column py-5">
      <div class="numbers-top">
        <div class="title text-uppercase display-4 fw-bold pb-3">63 ülke 52.311km <br /> yol yapılarak teslimat</div>
        <p>Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL, tüm  <br /> sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>
        <div class="py-3">
          <a href="" class="btn btn-outline-dark">avrupaya ulaştırıyoruz</a>
        </div>
      </div>
      <div class="numbers-map">
        <img src="../../assets/image/home/maps_2.png">
      </div>
      <div class="numbers-slide py-5">
        <swiper
            :modules="modules"
            :slides-per-view="6"
            :space-between="50"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <div class="swiper-slide-inner position-relative">
              <img :src=slide.img1 alt=""/>
              <span class='position-absolute bottom-0 start-50 translate-middle text-white bg-black bg-opacity-50 w-100 py-3 fw-bold'>
                <span class="fs-3 text-uppercase">{{slide.country}}</span>
                    <br />
                İncele
                </span>
            </div>
          </swiper-slide>

        </swiper>

      </div>
    </div>
  </div>
</section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
  name: "Number",
  components: {Swiper, SwiperSlide},
  data() {
    return {
      slides: [
        {
          img1: require('@/assets/image/home/eksen_country1.png'),
          country: "Almanya"
        },
        {
          img1: require('@/assets/image/home/eksen_country2.png'),
          country: "Norveç"
        },
        {
          img1: require('@/assets/image/home/eksen_country3.png'),
          country: "İngiltere"
        },
        {
          img1: require('@/assets/image/home/eksen_country4.png'),
          country: "Almanya"
        },
        {
          img1: require('@/assets/image/home/eksen_country5.png'),
          country: "Almanya"
        },
        {
          img1: require('@/assets/image/home/eksen_country6.png'),
          country: "Almanya"
        }

      ]
    }
  },
  methods: {
    debug(event) {
      console.log(event);
    }
  }
}
</script>

<style scoped>

</style>
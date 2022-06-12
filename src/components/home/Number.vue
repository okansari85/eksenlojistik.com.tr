<template>
<section class="numbers">
  <div class="container-fluid text-center py-5 gx-0 overflow-hidden">
    <div class="row justify-content-between py-5 align-items-center">
      <div class="numbers-top text-lg-start col-lg-4 ps-5">
        <div class="title text-uppercase display-4 fw-bold pb-3">63 ülke 52.311km yol yapılarak teslimat</div>
        <p>Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL, tüm  <br /> sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>
        <div class="py-3">
          <a href="" class="btn btn-outline-dark">avrupaya ulaştırıyoruz</a>
        </div>
      </div>
      <div class="numbers-map col-lg-8">
        <img  :src="ImgMaps" >
      </div>
    </div>
      <div class="numbers-slide py-5">
        <swiper
            :modules="modules"
            :slides-per-view="6"
            :space-between="50"
            :loop="true"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx" @click="ChangerMap(idx)">
            <div class="swiper-slide-inner position-relative" style="cursor: pointer">
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
          country: "Almanya",
          maps: require('@/assets/image/home/maps_2.png')
        },
        {
          img1: require('@/assets/image/home/eksen_country2.png'),
          country: "Norveç",
          maps: require('@/assets/image/home/romania.png')
        },
        {
          img1: require('@/assets/image/home/eksen_country3.png'),
          country: "İngiltere",
          maps: require('@/assets/image/home/maps_2.png')
        },
        {
          img1: require('@/assets/image/home/eksen_country4.png'),
          country: "Almanya",
          maps: require('@/assets/image/home/maps_2.png')
        },
        {
          img1: require('@/assets/image/home/eksen_country5.png'),
          country: "Almanya",
          maps: require('@/assets/image/home/maps_2.png')
        },
        {
          img1: require('@/assets/image/home/eksen_country6.png'),
          country: "Almanya",
          maps: require('@/assets/image/home/maps_2.png')
        }

      ],
      ImgMaps:require('@/assets/image/home/maps_2.png'),
    }
  },
  methods: {
    debug(event) {
      console.log(event);
    },
    ChangerMap(index) {
      this.slides.forEach((value, key) => {
        if(key == index ) {
          this.ImgMaps = value.maps
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
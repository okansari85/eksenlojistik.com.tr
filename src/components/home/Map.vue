<template>
<section class="numbers px-3 px-lg-0 pt-0 " id="numberSection">
  <div class="container-fluid text-center py-5 gx-0 overflow-hidden">
    <div class="row justify-content-between align-items-center py-5">
      <div class="numbers-top col-lg-12 text-center pb-5">
        <div class="title text-uppercase display-4 fw-bold pb-3">63 ülke 52.311km <br> yol yapılarak teslimat</div>
        <p class="">Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL, tüm  <br /> sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>
        <img src="/image/home/n1.png" alt="" class="py-3">
<!--        <div class="py-3">-->
<!--          <button type="button" class="btn btn-outline-dark" readonly>avrupaya ulaştırıyoruz</button>-->
<!--        </div>-->
      </div>
    </div>
      <div class="numbers-slide pb-5">
        <swiper
            :modules="modules"
            :slides-per-view="6"
            :space-between="50"
            :loop="true"
            :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx" @click="ChangerMap(idx)">
            <div class="swiper-slide-inner position-relative" style="cursor: pointer">
              <img :src=slide.img1 alt=""/>
              <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{slide.country}}</span>
                    <br />
<!--                İncele-->
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
  components: {Swiper, SwiperSlide  },
  data() {
    return {
      slides: [
        {
          img1: ('./image/home/eksen_country1.png'),
          country: "Almanya",
        },
        {
          img1: ('/image/home/eksen_country2.png'),
          country: "Norveç",
        },
        {
          img1: ('/image/home/eksen_country3.png'),
          country: "Finlandiya",
        },
        {
          img1: ('/image/home/eksen_country4.png'),
          country: "Yunanistan",
        },
        {
          img1: ('/image/home/eksen_country5.png'),
          country: "Rusya",
        },
        {
          img1: ('/image/home/eksen_country6.png'),
          country: "Hindistan",
        }

      ],
      ImgMaps:('/image/home/map.png'),
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10
          },

          991: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }
      }
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
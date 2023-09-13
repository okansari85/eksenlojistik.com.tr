<template>
  
  <section class="numbers">
    <div class="numbers-slide pb-5">
      <swiper
          :modules="modules"
          :slides-per-view="6"
          :space-between="50"
          :loop="true"
          :breakpoints="swiperOptions.breakpoints"
      >

      

        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m1.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.polonya') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m2.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.cekya') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m3.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.romanya') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m4.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.slovakya') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m5.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.macaristan') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-slide-inner position-relative" style="cursor: pointer">
            <img src='/image/home/m6.jpg' alt="Slide Image"/>
            <span class='position-absolute bottom-0 start-50 translate-middle text-white  w-100 py-3 fw-bold countrytext'>
                <span class="fs-3 text-uppercase">{{ $t('home.sirbistan') }}</span>
                    <br />
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: "Numbers",
  components: {Swiper, SwiperSlide  },
  data() {
    return {
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
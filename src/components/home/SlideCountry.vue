<template>
  <section class="numbers">
    <div class="numbers-slide">
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
  </section>




</template>

<script>

import {Swiper, SwiperSlide} from "swiper/vue";

export default {
  name: "SlideCountry",
  components: {Swiper, SwiperSlide  },
  data() {
    return {
      slides: [
        {
          img1: ('./image/home/m1.jpg'),
          country: "Sırbistan",
        },
        {
          img1: ('/image/home/m2.jpg'),
          country: "Romanya",
        },
        {
          img1: ('/image/home/m3.jpg'),
          country: "Çekya",
        },
        {
          img1: ('/image/home/m4.jpg'),
          country: "Polonya",
        },
        {
          img1: ('/image/home/m5.jpg'),
          country: "Macaristan",
        },
        {
          img1: ('/image/home/m6.jpg'),
          country: "Slovakya",
        }

      ],
      // ImgMaps:('/image/home/map.png'),
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
    // ChangerMap(index) {
    //   this.slides.forEach((value, key) => {
    //     if(key == index ) {
    //       this.ImgMaps = value.maps
    //     }
    //   });
    // }
  }
}
</script>

<style scoped>

</style>
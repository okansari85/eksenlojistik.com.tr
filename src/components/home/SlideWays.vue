<template>

  <section class="way-slide px-3 px-lg-0 d-none">
    <div class="container-fluid gx-0 overflow-hidden py-5">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-4 paragraph-margin order-2 order-lg-1 text-center text-lg-start">
          <h1 class="display-6 fw-bold text-capitalize">daha iyi bir yol bulmak için kararlıyız</h1>
          <p>
            İşinize değer katmak, verimli lojistik çözümler sağlamak için sürekli olarak daha akıcı ve sürdürülebilir yollar geliştiriyoruz.
            Hedeflerinize ulaşmanıza nasıl yardımcı olabiliriz?
          </p>
        </div>
        <div class="col-lg-7 text-end order-1 order-lg-2">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"

              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide>
              <img src="/image/home/eksen_way_slide3.jpg" alt="" class="swiper-img"/>
            </swiper-slide>
            <swiper-slide>
              <img src="/image/home/eksen_way_slide2.jpg" alt="" class="swiper-img"/>
            </swiper-slide>

            <swiper-slide>
              <img src="/image/home/eksen_way_slide4.jpg" alt="" class="swiper-img"/>
            </swiper-slide>
            <swiper-slide>
              <img src="/image/home/eksen_way_slide5.jpg" alt="" class="swiper-img"/>
            </swiper-slide>
            <slider-navigation/>
          </swiper>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation} from 'swiper'
import SliderNavigation from "@/components/global/SliderNavigation";

export default {
  name: "HeroSlide1",
  components: {SliderNavigation, Swiper, SwiperSlide},
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
}

</script>


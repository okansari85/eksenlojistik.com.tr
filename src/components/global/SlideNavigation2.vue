<template>
  <div class="data-slide-navigation">
    <a class="bi bi-arrow-left fs-3 data-slide-prev position-absolute top-50 start-0" style="z-index: 999;" @click="swiper.slidePrev()"></a>
    <a class="bi bi-arrow-right fs-3 data-slide-next position-absolute top-50 end-0" style="z-index: 999;" @click="swiper.slideNext()"></a>
  </div>
</template>

<script>
import { useSwiper } from 'swiper/vue';

export default {
  name: "SlideNavigation2",
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
    };
    },
  };

</script>

<style scoped>

</style>
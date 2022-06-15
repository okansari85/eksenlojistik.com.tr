<template>
  <div class="way-slide-btn">
    <a class="bi bi-arrow-left fs-3 way-slide-prev" @click="swiper.slidePrev()"></a>
    <a class="bi bi-arrow-right fs-3 way-slide-next" @click="swiper.slideNext()"></a>
  </div>
</template>

<script>
import { useSwiper } from 'swiper/vue';

export default {
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
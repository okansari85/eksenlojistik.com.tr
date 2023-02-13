<template>
  <section class="hero w-100 vh-100">
    <div class="overlay"></div>
    <video src="/image/video/Ust2.mp4" class="vh-100  w-100" style="object-fit: cover" autoplay loop
           muted></video>
        <div class="position-absolute text-white hero-content hero-text start-0 offset-md-1 px-4 px-lg-0 translate-middle-y top-50">
        <span>{{ $t('home.enhizli') }}</span>
        <h1 class="display-1 text-white">{{ $t('home.log') }} <br> 
            <div class="text-white display-1 text-capitalize" id="typed" style="height: 75px;" v-if="$i18n.locale === 'tr'">Çözümleri</div>
            <div class="text-white display-1 text-capitalize" style="height: 75px;" v-else>Solutions</div>
        </h1>
        <p class="description col-lg-4 text-white py-3 py-md-5 fs-6">
          {{ $t('home.log-cozum-p') }}
        </p>

    </div>
    <a class="wrapper-down-icon" href="#home-services">
        <div class="circle">
        </div>
        <div class="circle circle-2">
        </div>
        <div class="arrow">
          <div class="arrow_line">
          </div>
          <div class="arrow_tip-wrapper">
            <div class="arrow_tip left">
            </div>
            <div class="arrow_tip right">
            </div>
          </div>
        </div>
      </a>

    <!-- Modal Solutions -->
    <div class="modal fade" id="heroVideos" tabindex="-1" style="z-index: 20000;">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content py-3 bg-transparent border-0">
          <a href="" class="bi bi-x-circle-fill text-danger position-absolute fs-1" data-bs-dismiss="modal" style="z-index: 5; right:10px;"></a>
          <div class="modal-body p-0 border-0 bg-transparent">
            <div class="modal-video-inner bg-transparent p-0">
              <video src="/image/home/eksen_hero_video2.mp4" autoplay loop muted style="max-width: 100%;"></video>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section> 
</template>


<script>

import Typed from 'typed.js';

export default {
    watch: {
      $i18n: {
        handler() {
          this.$nextTick(() => {
            const typed = new Typed('#typed', {
              strings: [this.$t('home.hero-strings'), this.$t('home.hero-strings2'), this.$t('home.hero-strings3')],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                showCursor: false,
                cursorChar: "|",
            });
          });
        },
        immediate: true,
      },
    },

}

</script>


<style scoped lang="scss">
.hero {
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: rgba(0, 26, 40, 0.5);
    transition: all .3s ease;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  &-text {
    z-index: 2;

    span {
      color: #7ca7f6;
      text-transform: uppercase;
      font-weight: 600;
    }

  }

}

</style>
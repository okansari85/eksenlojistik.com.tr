<template>

  <main>

    <section class="services-banner">
      <img src="/image/home/services/a1.jpg" alt="Services Banner">
      <div class="services-banner-content">
        <div class="container">
          <div class="row title-animation">
            <span class="text-uppercase">{{ $t('services.eksen-logistic')  }}</span>
            <h1 class="display-5 fw-600 text-white">{{ $t('menu.hizmetler')}}</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="services-hero">
      <img src="/image/about/about-new-bg-2.png" alt="" class="position-absolute top-0 start-0" style="z-index: -1;">
      <div class="container py-5">
        <div class="row justify-content-between py-5 px-3 px-lg-0">
          <div class="col-lg-5 order-2 order-lg-1 pt-4">
            <div class="pb-3">
              <h2 class="custom-sub-title pb-2">{{ $t('services.karayolu-tasimaciligi') }}</h2>
              <div class="description col-lg-11">
                <p>
                  {{ $t('services.hizmetler-karayolu-p1') }}
                </p>
                <p>
                  {{ $t('services.hizmetler-karayolu-p2') }}
                </p>
              </div>
              <video src="/image/video/1.m4v" class="mw-100 w-100 services-hero-video d-lg-none" loop muted
                     autoplay playsinline></video>
            </div>
            <div>
              <h2 class="custom-sub-title pb-2">{{ $t('services.gumrukleme') }}</h2>
              <div class="description col-lg-11">
                <p>
                  {{ $t('services.gumrukleme-p') }}
                </p>
              </div>
            </div>


          </div>
          <div class="col-lg-6 order-1 order-lg-2 d-none d-lg-block">
            <div class="row">
              <div class="col-lg-6">
                <img src="/image/services/servicess-2.png" alt="Services" class="img-fluid d-none d-lg-block">
                <video src="/image/video/1.m4v" class="mw-100 w-100 services-hero-video" loop muted autoplay playsinline></video>
              </div>
              <div class="col-lg-6 d-none d-lg-block">
                <img src="/image/services/servicess-1.png" alt="Services" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-stock">
      <div class="container pb-5">
        <div class="row align-items-center justify-content-between py-5 px-3 px-lg-0">
          <div class="col-lg-6">
            <video src="/image/video/4.mp4" class="w-100 mw-100" autoplay loop muted playsinline></video>
          </div>
          <div class="col-lg-5 pt-3 pt-lg-0">
            <div class="pb-3">
              <h2 class="custom-sub-title pb-2 fw-bold">{{ $t('services.depolama-hizmeti')}}</h2>
              <div class="description col-lg-11">
                <p>
                  {{ $t('services.depolama-hizmeti-p-1') }}
                </p>
                <p>
                  {{ $t('services.depolama-hizmeti-p-2') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-safely min-vh-100 vh-100 "
             style="background-image: url(/image/services/safely-servicesss.png);">
      <div class="container h-100">
        <div class="row h-100 align-items-center px-3 px-lg-0">
          <div class="col-md-6"></div>
          <div class="col-lg-5 offset-md-1">
            <div class="pb-3">
              <h2 class="display-4 fw-500 pb-2 lh-1 text-white">{{ $t('services.guvenilir-hizli') }}</h2>
              <div class="description col-lg-11 py-3 text-white">
                <p class="text-white">
                  {{ $t('services.guvenilir-hizli-p') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="alternative-transport">
      <div class="container pt-lg-5 pb-5">
        <div class="row pt-lg-5">
          <div class="col-12 text-center">
            <div class="custom-sub-title-span">
              <span class="text-danger">{{ $t('services.eksen-logistic') }}</span>
            </div>
            <div>
              <h2 class="display-4 fw-bold text-white">{{ $t('services.alternatif-tasimacilik') }}</h2>
              <p class="pt-2">{{ $t('services.alternatif-tasimacilik-altmetin') }}</p>
            </div>
          </div>
        </div>

        <div class="row justify-content-between py-5 px-4 px-lg-0">
          <div class="col-lg-5">
            <div class="col-sm-10">
              <h5 class="custom-sub-title text-white">{{ $t('services.alternatif-tasimacilik-h5-left') }}</h5>
              <p>
                {{ $t('services.alternatif-tasimacilik-p-left') }}
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="col-sm-10">
              <h5 class="custom-sub-title text-white">{{ $t('services.alternatif-tasimacilik-h5-right') }}</h5>
              <p>
                {{ $t('services.alternatif-tasimacilik-p-right') }}
              </p>
            </div>

          </div>

        </div>

        <div class="alternative-transport-video text-center">
          <video src="/image/video/2.mp4" autoplay loop muted playsinline
                 style="width: 836px; height: 413px; max-width: 100%; margin: auto; object-fit: cover;"></video>
        </div>
      </div>
    </section>

  </main>

  <Socialbar/>
</template>


<script>
import Socialbar from '@/components/global/Socialbar.vue';

export default {
  name: "Services",
  components: {Socialbar},
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
<style lang="scss" scope>

.custom-sub-title-span {
  span {
    background-color: #0A0A0A !important;
  }
  &::after {
    background-color: rgb(220, 53, 69) !important;
  }
}

.alternative-transport {
  background-color: #070707;

  p {
    color: #D0D0D0 !important;
  }
}

.services-safely {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #0A0A0A;
  @media(min-width: 992px) {
    background-position: center;
  }
}

.services-hero-video {
  object-fit: cover;
  @media(min-width: 992px) and (max-width: 1399.98px) {
    height: 270px;
  }
  @media(min-width: 1400px) {
    height: 320px;
  }
}

</style>
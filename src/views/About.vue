<template>

  <div>
    <main>
      <section class="about-banner banner">
        <img src="/image/about/about-new-banner-2.png" alt="About Banner">
        <div class="banner-content">
          <div class="container">
            <div class="row title-animation">
              <span class="text-uppercase">{{ $t('services.eksen-logistic')  }}</span>
              <h1 class="display-5 fw-600 text-white">{{ $t('menu.kurumsal') }}</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="about-globe">
        <img src="/image/about/about-new-bg-2.png" alt="" class="position-absolute top-0 start-0" >
        <div class="container position-relative">
          <div class="row justify-content-between align-items-center py-5 px-3 px-lg-0">
            <div class="col-lg-5 order-2 order-lg-1">
              <h2 class="custom-sub-title pb-2">{{ $t('menu.hakkimizda')  }}</h2>
              <img src="/image/about/oguzbey.jpg" alt="" class="mw-100 d-lg-none py-3"/>
              <div class="description col-lg-11">
                <p>
                  {{ $t('kurumsal.about-p1')  }}
                </p>
                <video src="/image/about/word-globe.mp4" class="mw-100 w-100 d-lg-none" loop muted autoplay playsinline></video>
                <p>
                  {{ $t('kurumsal.about-p2')  }}
                </p>
              </div>

            </div>
            <div class="col-lg-6 order-1 order-lg-2 d-none d-lg-block">
              <img src="/image/about/oguzbey.jpg" alt="" class="mw-100">
            </div>
          </div>
        </div>
      </section>
      <section class="quality-policy">
        <div class="container py-5">
          <div class="row justify-content-between align-items-center py-5 px-3 px-lg-0 position-relative">
            <img src="/image/about/eksen_logo11.png" alt="" class="position-absolute top-50 translate-middle-y end-0"
                 style="width:600px;">
            <div class="col-lg-6 col-xl-7">
              <img src="/image/about/about-quality.png" alt=""/>
            </div>
            <div class="col-lg-5 col-xl-4 ">
              <h2 class="custom-sub-title pb-2 pt-4 pt-lg-0">{{ $t('kurumsal.kalite-politikamiz') }}</h2>
              <div class="description">
                <p>
                  {{ $t('kurumsal.kalite-politikamiz-p1') }}

                </p>
                <p>
                  {{ $t('kurumsal.kalite-politikamiz-p2') }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="about-middle-video pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <video src="/image/video/12.m4v" loop muted autoplay playsinline
                     style="height:70vh; object-fit: cover; width: 100%; object-position: center;"></video>
            </div>
          </div>

        </div>
      </section>
      <section class="future position-relative">
        <div class="container pt-3 py-5">
          <div class="row justify-content-between py-5 px-4 px-lg-0">
            <div class="col-lg-5 pt-lg-5 ">
              <div class="col-sm-10">
                <h5 class="custom-sub-title fs-5">{{ $t('kurumsal.gelecek-misyonu') }}</h5>
                <p>
                  {{ $t('kurumsal.gelecek-misyonu-p') }}
                </p>
              </div>
            </div>
            <div class="col-lg-5 pt-5">
              <div class="col-sm-10">
                <h5 class="custom-sub-title fs-5">{{ $t('kurumsal.eksen-vizyonu') }}</h5>
                <p>
                  {{ $t('kurumsal.eksen-vizyonu-p') }}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section class="sustainability pt-lg-5">
        <div class="container py-md-5">
          <div class="row py-md-5">
            <div class="col-12 text-center">
              <div class="custom-sub-title-span">
                <span style="background-color:white!important;">{{ $t('kurumsal.cevre-icin') }}</span>
              </div>
              <div>
                <h2 class="display-6 pt-2 fw-bold">{{ $t('kurumsal.surdurulebilirlik') }}</h2>
                <p class="pt-2">{{ $t('kurumsal.surdurulebilirlik-p') }}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-between py-5 px-4 px-lg-0">
            <div class="col-lg-5">
              <div class="col-sm-11 col-lg-10">
                <h5 class="custom-sub-title">{{ $t('kurumsal.surdurulebilirlik-h5-left') }}</h5>
                <p>
                  {{ $t('kurumsal.surdurulebilirlik-p-left') }}
                </p>
              </div>
            </div>
            <div class="col-lg-5 pt-3 pt-lg-0">
              <div class="col-sm-11 col-lg-10">
                <h5 class="custom-sub-title">{{ $t('kurumsal.surdurulebilirlik-h5-right') }}</h5>
                <p>
                  {{ $t('kurumsal.surdurulebilirlik-p-right') }}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  </div>

  <Socialbar/>
</template>


<script>


import Socialbar from "@/components/global/Socialbar.vue";
import counterFunction from "@/components/home/Map";

export default {
  name: "About",
  mixins: [counterFunction],
  components: {Socialbar},
  mounted() {
    window.scrollTo(0, 0)
  }
}


</script>


<style lang="scss" scope>

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: -0.03em;
  color: #252626;
}

.custom-sub-title-span {
  span {
    background-color: #f8fafa;
  }

  &::after {
    background-color: #7BD786;
  }
}

.way-calculate-wrapper {
  position: absolute;
  bottom: 20%;

  h5 {
    font-weight: 700;
    letter-spacing: 0.19em;
    color: #FFFFFF;
    text-shadow: 0px 4px 44px rgba(0, 0, 0, 0.44);
    text-transform: uppercase;
  }

  p {
    font-weight: 600;
    text-align: right;
    color: #FFFFFF;
    text-shadow: 0px 4px 44px rgba(0, 0, 0, 0.55);
  }

  @media(max-width: 991px) {
    transform: translate(0, 0);
    text-align: center;
    margin: auto;
  }
}


//@media(max-width: 768px) {
//  .future {
//    height: 200vh !important;
//  }
//}

.html5-video-container {
  video {
    width: 100% !important;
    left: 0 !important;
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    margin: auto !important;
  }
}

</style>
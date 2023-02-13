<template>

  <section class="kur py-5">
    <div class="container mb-5">
      <div class="row justify-content-between">
          <div class="col-md-6" v-if="!sinir_errors" >
            <div class="card px-4 py-5 bg-white shadow border-0 text-center" style="height: 330px;">
              <h5 class="fs-3 fw-500 text-capitalize">{{ $t('news.sinir-kapilari') }}</h5>
              <swiper
                  :modules="[Controller]"
                  @swiper="setControlledSwiper">
                <swiper-slide class="justify-content-center" v-for="(sinir, s_index) in sinirlar" :key="s_index">
                  <div class="row py-2 text-center">
                    <div class="col-12">
                      <h6 class="fw-500 fs-5">{{ sinir.sinir_kapisi_tr }}</h6>
                      <h6 class="fw-500 fs-5 d-block">{{ sinir.sinir_kapisi_other }}</h6>
                    </div>
                    <div class="col-12 px-3">
                      <ul class="nav flex-column py-3 align-items-center justify-content-center">
                        <li v-for="(parameter, p_index) in sinir.parameters" :key="p_index">
                          <div class="d-flex justify-content-between">
                            <span class="text-uppercase fw-500 me-3">{{ parameter.parameter_name }}</span>
                            <span class="text-uppercase">{{ parameter.parameter_value }}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </swiper-slide>
                <slide-navigation2/>
              </swiper>
            </div>
          </div>

          <div class="col-md-6" v-else >
            <div class="card px-4 py-5 bg-white shadow border-0 text-center" style="height: 330px;">
              <h5 class="fs-3 fw-500 text-capitalize">{{ $t('news.sinir-kapilari') }}</h5>
              <swiper
                  :modules="[Controller]"
                  @swiper="setControlledSwiper">
                <swiper-slide class="justify-content-center" v-for="(sinir, s_index) in sinirlar" :key="s_index">
                  <div class="row py-2 text-center">
                    <div class="col-12">
                      <h6 class="fw-500 fs-5">  </h6>
                    </div>
                  </div>
                </swiper-slide>
                <slide-navigation2/>
              </swiper>
            </div>
          </div>



    <div v-if="!kur_errors" class="col-md-6 mt-3 mt-md-0">
      <div class="card px-4 py-5 bg-white shadow border-0" style="height: 330px;">
        <div class="row">
          <div class="col-12">
            <div class="kurlar-wrapper">
              <h6 class="fw-500 fs-3 text-center mb-3">{{ $t('news.doviz-kuru') }}</h6>
              <div class="row justify-content-between">

                <div class="col-sm-6" v-for="(kur, index) in kurlar" :key="index">
                  <div class="d-flex justify-content-between">
                    <span class="text-uppercase fw-500 me-md-3 col-8">{{ kur.kur_adi }}</span>
                    <span class="text-uppercase col-4"> {{ kur.kur_degeri }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="col-md-6 mt-3 mt-md-0">
      <div class="card px-4 py-5 bg-white shadow border-0" style="height: 330px;">
        <div class="row">
          <div class="col-12">
            <div class="kurlar-wrapper">
              <h6 class="fw-500 fs-3 text-center mb-3">{{ $t('news.doviz-kuru') }}</h6>
              <div class="row justify-content-between">
                Kur verileri şuan da görüntülenemiyor. Lütfen sayfayı yenileyiniz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



      </div>
    </div>
  </section>


</template>

<script>
import { ref } from 'vue';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SlideNavigation2 from "@/components/global/SlideNavigation2";
import axios from "axios";

export default {
  name: "Kur",
  components: {
    SlideNavigation2,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const controlledSwiper = ref(null);
    const setControlledSwiper = (swiper) => {
      controlledSwiper.value = swiper;
    };
    return {
      Controller,
      // controlledSwiper,   
      setControlledSwiper,
    };
  },
  data() {
    return {

      kur_errors: false,
      sinir_errors: false,
      kurlar: null,
      sinirlar: null,


    };
  },

  methods: {
    getKur() {
      axios.get("/api/get-kur")
        .then(response => {
          if(response.succeeded === true ) {
            this.kurlar = response.kurlar;
          } else {
            this.kur_errors = true;
          }
        })
        .catch(error => {
          this.kur_errors = true;
        });
    },

    getSinir() {
      axios.get("/api/get-sinir")
        .then(response => {
          if(response.succeeded === true ) {
            this.sinirlar = response.sinir_datas;
          } else {
            this.sinir_errors = true;
          }
        })
        .catch(error => {
          this.sinir_errors = true;
        });
    },

  },

  mounted() {
    window.addEventListener("load", this.getKur);
  }
}
</script>


<style scoped lang="scss">

.card {
  td {
    border: 0!important;
    padding: 10px;
  }
}

</style>
<template>

  <section class="kur py-5">
    <div class="container mb-5">
      <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="card px-4 py-5 bg-white shadow border-0 text-center" style="height: 330px;">
              <h5 class="fs-3 fw-500 text-capitalize">sınır kapıları yoğunluk durumu</h5>
              <swiper
                  :modules="[Controller]"
                  @swiper="setControlledSwiper">
                <swiper-slide class="justify-content-center">
                  <div class="row py-2 text-center">
                    <div class="col-12">
                      <h6 class="fw-500 fs-5">Batrovci (TR)</h6>
                      <h6 class="fw-500 fs-5 d-block">AbidikGubidik (EN)</h6>
                    </div>
                    <div class="col-12 px-3">
                      <ul class="nav flex-column py-3 align-items-center justify-content-center">
                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="text-uppercase fw-500 me-3">IHRACAT:</span>
                            <span class="text-uppercase">23km</span>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="fw-500 me-3">ITHALAT:</span>
                            <span class="">2km</span>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="fw-500 me-3">IMALAT:</span>
                            <span class="">2km</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  slide2
                </swiper-slide>
                <slide-navigation2/>
              </swiper>

            </div>

          </div>
          <div class="col-md-6">
            <div class="card px-4 py-5 bg-white shadow border-0" style="height: 330px;">
              <div class="row">
                <div class="col-12">
                  <div class="kurlar-wrapper">
                    <h6 class="fw-500 fs-3 text-center">Döviz Kurları</h6>
                    <table class="table my-4 table-responsive">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>

                          </td>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>
                          </td>
                        </tr>                        <tr>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>

                          </td>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>
                          </td>
                        </tr>                        <tr>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>

                          </td>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>

                          </td>
                          <td>
                            <div class="d-flex justify-content-between">
                              <span class="text-uppercase fw-500 me-3 col-8">Dolar:</span>
                              <span class="text-uppercase col-4">17.99 TL</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
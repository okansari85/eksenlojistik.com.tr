<template>

  <section class="solutions px-3 py-5 px-lg-0" id="solutions">
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="row justify-content-evenly align-items-center">
        <div class="col-lg-6 position-relative text-lg-center">
          <img src="/image/home/eksen_videoo2.jpg" alt="Eksen Video" class="col-lg-10 m-lg-auto">
        </div>
        <div class="col-lg-5 py-3 py-lg-0 paragraph-margin2 text-center text-lg-start">

          <Title class="pb-4"
                 title='Karayolu taşımacılığında çözüm ortağı'
                 subtitle='size özel'
                 paragraph='
                  Eksen, 2005 yılından bu yana karayolu taşımacılığında çözüm ortağı olmaya devam ediyor.
                  Uzman kadromuzla, etkin çözümlerimizle ve çalışma prensiplerimizle Eksen Lojistik olarak karayolu taşımacılığı ile siz değerli müşterilerimizin yanındayız.
                 '/>
          <div class="d-flex justify-content-center justify-content-lg-start align-items-center">

            <router-link to="/services" class="btn btn-main my-2 my-md-0 fs-09" style="width: 165px; max-width: 100%;">daha fazla</router-link>
            <!-- Modal Trigger -->
            <a data-bs-toggle="modal" data-bs-target="#solutionsVideo" class="playBtn ms-4" style="cursor: pointer">
              <img src="/image/home/k2.png" alt="" width="60" height="auto" style="z-index: 99;">
            </a>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal Solutions -->
    <div class="modal fade" id="solutionsVideo" tabindex="-1">
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
import Title from "@/components/global/Title";

export default {
  name: "Solutions",
  components: {Title},
}
</script>

<style scoped>

</style>

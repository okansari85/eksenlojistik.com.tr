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
          </div>

        </div>
      </div>
    </div>

    <!-- Modal Solutions -->



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

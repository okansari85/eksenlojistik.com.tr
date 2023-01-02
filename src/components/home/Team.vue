<template>

  <section class="team">
    <div class="container-fluid">
      <div class="row align-items-center py-5 justify-content-evenly">
        <div class="col-lg-5  paragraph-margin order-2 order-lg-1 text-center text-lg-start">
          <div class="globals-title pt-3 pt-lg-0">
            <span class="text-uppercase fs-6 sub-title">biz bir aileyiz</span>
            <h1 class="fs-3 text-capitalize pt-1 pb-4 fw-semibold ">EKSEN, dünya çapında faaliyet göstermektedir.</h1>
            <p class="fs-09 col-md-10">Eksen, profesyonel kurumsal yapılarını sürdürürken, çalışanlarına da herkesin takdir edildiği, insan dokunuşu ile hoşgörülü bir çalışma ortamı sunmaktadır. EKSEN LOJİSTİK’deki kariyer olanakları hakkında daha fazlasını okuyun.</p>
          </div>
          <router-link to="/ik" className="btn btn-main mt-3">kariyer</router-link>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 text-xl-center">
          <img src="/image/home/eksen_team.png" alt="" class="col-lg-10 m-lg-auto">
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import Title from '@/components/global/Title'

export default {
  name: "Team",
  components: { Title }
}
</script>

<style scoped>

</style>
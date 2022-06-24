<template>

  <section class="team">
    <div class="container-fluid">
      <div class="row align-items-center py-5 justify-content-between">
        <div class="col-xl-5  paragraph-margin order-2 order-xl-1">
          <Title class=" pt-5 pt-xl-0"
              title='EKSEN, dünya çapında faaliyet göstermektedir.'
              subtitle='biz bir aileyiz '
              paragraph='Şirket, profesyonel kurumsal yapılarını sürdürürken, çalışanlarına da herkesin takdir edildiği, insan dokunuşu ile hoşgörülü bir çalışma ortamı sunmaktadır.
                    EKSEN LOJİSTİK’deki kariyer olanakları hakkında daha fazlasını okuyun.'
          ></Title>
          <router-link to="/contact" className="btn btn-main mt-3">kariyer</router-link>
        </div>
        <div class="col-xl-7 text-xl-end order-1 order-xl-2">
          <img src="/image/home/eksen_team.png" alt="">
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
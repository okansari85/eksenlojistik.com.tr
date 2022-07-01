<template>

  <section class="safely px-3 px-lg-0">
    <div class="container-fluid gx-0 overflow-hidden py-5">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <a href="javascript:void(0)">
            <img src="/image/home/eksen_videoo.png" alt="" class="eksen_video_img">
          </a>
        </div>
        <div class="col-lg-4 text-center text-lg-start">
          <h1 class='display-4 fw-bold text-uppercase'>
            güvenilir ve hızlı hizmet anlayışı
          </h1>
          <p class="pt-4">
            Eksen Lojistik, markanızı korumak ve sadakat oluşturmak için, tüketici memnuniyetine öncelik vererek
            perakende tedarik zincirinizin son kilometre parçasını yani lojistik ve tedarik sorununu çözer.
          </p>
          <router-link to="/services" class="btn btn-main2 mt-3">servislerimiz</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- <Modal video-id="home-video"></Modal> -->


</template>

<script>

import Modal from '@/components/global/Modal';

export default {
  name: "Safely",
  components: {
    Modal,
  },

}
</script>

<style scoped>


@media (min-width:992px ) {
.eksen_video_img {
  height: 850px;
}
}

</style>
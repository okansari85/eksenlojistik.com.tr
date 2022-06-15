<template>

  <section class="safely px-3 px-lg-0">
    <div class="container-fluid gx-0 overflow-hidden py-5">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#home-video">
            <img src="/image/home/eksen_videoo.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-4">
          <h1 class='display-4 fw-bold text-uppercase'>
            daha iyi bir yol bulmak için kararlıyız
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum fugit totam ipsa nostrum, mollitia eos ex consequuntur accusamus dignissimos magnam impedit architecto modi nobis, sit nisi optio odio dolores.
          </p>
          <router-link to="/services" class="btn btn-main2 mt-3">servislerimiz</router-link>
        </div>
      </div>
    </div>
  </section>

  <Modal video-id="home-video"></Modal>


</template>

<script>

import Modal from '@/components/global/Modal';

export default {
  name: "Safely",
  components: {
    Modal,
  }
}
</script>

<style scoped>

</style>
<template>

  <section class="safely px-3 px-lg-0">
    <div class="container-fluid gx-0 overflow-hidden py-5">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <a href="" data-bs-toggle="modal" data-bs-target="#home-video">
            <img src="../../assets/image/home/eksen_videoo.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-4">
          <h1 class='display-4 fw-bold text-uppercase'>
            daha iyi bir yol bulmak için kararlıyız
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum fugit totam ipsa nostrum, mollitia eos ex consequuntur accusamus dignissimos magnam impedit architecto modi nobis, sit nisi optio odio dolores.
          </p>
          <a href="" class="btn btn-main2 mt-3">servislerimiz</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->

  <div class="modal fade" id="home-video" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-xl ">
      <div class="modal-content p-0 bg-transparent border-0">
        <a href="" class="bi bi-x-circle-fill text-danger position-absolute fs-1" data-bs-dismiss="modal" style="z-index: 5; right:10px;"> </a>

        <div class="modal-body p-0 border-0 bg-transparent">
          <div class="modal-video-inner bg-transparent p-0">
            <video src="../../assets/image/home/eksen-video.mp4" autoplay loop muted style="max-width: 100%;"></video>
          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Safely"
}
</script>

<style scoped>

</style>
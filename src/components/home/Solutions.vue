<template>

  <section class="solutions px-3 py-5 px-lg-0" id="solutions">
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6 position-relative">
          <video poster="/image/home/k1.jpg"
                 style="width: 100%; max-width: 100%; height: 700px; min-height: 700px; object-fit: cover; cursor:pointer;"
                 class="solutionsVideo position-relative">
            <source src="/image/home/eksen_hero_video2.mp4"/>
          </video>
          <div class="position-absolute top-50 start-50 translate-middle playBtn" style="cursor: pointer">
            <img src="/image/home/k2.png" alt="" width="100" height="auto" style="z-index: 99;">
          </div>
        </div>
        <div class="col-lg-5 py-3 py-lg-0 paragraph-margin2 text-center text-lg-start">
          <Title class="pb-4"
                 title='büyük sevkiyatlar için premium çözümler'
                 subtitle='size özel'
                 paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam corporis, numquam quam, aspernatur dicta aut nam inventore maxime unde dolorem consequatur. Rerum, cum velit atque ea quia accusamus magnam minus?'/>
          <router-link to="/contact" class="btn btn-main my-2 my-md-0 fs-09 py-2" style="width: 165px;">iletişime geç</router-link>
          <router-link to="/services" class="btn btn-main active ms-2 my-2 my-md-0 py-2 fs-09" style="width:165px;">daha fazla</router-link>
        </div>
      </div>
    </div>

    <Modal video-id="solutions-video"/>

  </section>
</template>

<script>
import Title from "@/components/global/Title";
import Modal from "@/components/global/Modal";

export default {
  name: "Solutions",
  components: {Title, Modal},
  mounted() {
    // document.querySelector(".solutionsVideo").addEventListener("click", () => {
    //   alert();
    // })
    if($(".playBtn").click(() => {
      $("video").trigger('play')
      $(".playBtn").hide();
    }));

    if($("video").dblclick(() => {
      $("video").trigger('pause');
      $(".playBtn").show();
    }));

  }


}
</script>

<style scoped>

</style>

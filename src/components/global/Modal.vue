<template>

  <!-- Modal -->

  <div class="modal fade" :id="videoId" tabindex="-1">
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
  name: "Modal",
  props: {
    videoId: String,
  }
}
</script>

<style scoped>

</style>
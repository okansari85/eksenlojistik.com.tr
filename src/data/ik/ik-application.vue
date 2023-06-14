<template>

  <div class="row justify-content-between">
    <div class="col-lg-6">
      <h5 class="fs-3 fw-500 text-black">{{ $t('hr.basvuru') }}</h5>
      <p class="py-3"> {{ $t('hr.ik-basvuru-p') }}</p>
      <div class="mx-auto">
        <img src="../../../public/image/home/eksen5.png" class="mw-100" alt="" style="width:350px; height: auto;">
      </div>

    </div>

    <div class="col-lg-5">
      <Form/>
    </div>

  </div>

</template>

<script>
import Form from "@/components/global/Form";

export default {
  name: "ik-application",
  components: {Form}
}
</script>

<style scoped>

</style>
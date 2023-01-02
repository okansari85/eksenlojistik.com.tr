<template>

  <div class="row justify-content-between">
    <div class="col-lg-6">
      <h5 class="fs-3 fw-500">Başvuru</h5>
      <p class="py-3">
        Doğru yetenekleri, doğru işlere yerleştiriyoruz ve yüksek çalışan bağlılığı yaratan performans yönetimimiz ile
        çalışanlarımızdan güç alarak hayata yön veren çözümler üretiyoruz.
      </p>
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
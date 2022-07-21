<template>

  <div class="row justify-content-between">
    <div class="col-lg-6">
      <h5 class="display-6 fw-500">Başvuru</h5>
      <p class="py-3">
        Doğru yetenekleri doğru işlere yerleştiriyoruz ve yüksek çalışan bağlılığı yaratan performans yönetimimiz ile çalışanlarımızdan güç alarak hayata yön veren çözümler üretiyoruz.
      </p>

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
  components: { Form }
}
</script>

<style scoped>

</style>
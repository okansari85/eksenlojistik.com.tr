<template>

  <div class="row justify-content-between">
    <div class="col-lg-6">
      <h5 class="fs-3 fw-500 text-black">{{ $t('hr.ik-durustluk') }}</h5>
      <p class="py-3">
        {{ $t('hr.ik-durustluk-p') }}
      </p>

      <h5 class="fs-3 fw-500 text-black">{{ $t('hr.ik-gizlilik') }}</h5>
      <p class="py-3">
        {{ $t('hr.ik-gizlilik-p') }}
      </p>
    </div>
    
    <div class="col-lg-5">
      <img src="/image/services/ik-new.png" alt="IK Image">
    </div>

  </div>

</template>

<script>
import Form from "@/components/global/Form";
export default {
  name: "ik-principle",
  components: { Form }
}
</script>

<style scoped>

</style>
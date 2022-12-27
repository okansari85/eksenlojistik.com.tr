<template>

  <div class="globals-title">
    <span class="text-uppercase fs-6">{{ subtitle }}</span>
    <h1 class="fs-6 text-capitalize pt-1 pb-4 fw-semibold ">{{ title }}</h1>
    <p class="fs-09 col-lg-9"> {{paragraph}} </p>
  </div>

</template>

<script>

export default {
  name: "Title",
  props: {
    subtitle: String,
    title: String,
    paragraph: String
  }
}

</script>

<style scoped lang="scss">

.globals-title {
  span {
    color: #3175f3;
    text-transform: uppercase!important;
    font-weight: 600;
  }
}

</style>
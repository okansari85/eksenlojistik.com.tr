<template>

  <div>
    <span class="text-uppercase text-black-50">{{ subtitle }}</span>
    <h1 class="display-4 text-uppercase fw-bold py-4">{{ title }}</h1>
    <p> {{paragraph}} </p>
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

<style scoped>

</style>
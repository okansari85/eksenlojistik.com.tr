<template>
  <div class="global-hero-tops">
    <div class="row">
      <div class="col-lg-12 global-hero-img">
        <img :src="img" alt="Hero Image"/>
        <div class="global-hero-bottom-btn">{{ miniTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: {
    img: String,
    // title: String,
    miniTitle: String,
  }
}
</script>


<style scoped lang="scss">
.global-hero-img {
  img {
    height: 400px;
    object-fit: cover;
    width: 100%;
  }
}

</style>



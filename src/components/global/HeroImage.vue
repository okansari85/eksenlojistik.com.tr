<template>
  <div class="global-hero-top">
    <div class="row">
<!--      <div class="col-lg-2 ps-lg-5">-->
<!--        <h1>-->
<!--          {{ title }} <br/> <span>{{ miniTitle }}</span>-->
<!--        </h1>-->
<!--      </div>-->
      <div class="col-lg-12 global-hero-img">
        <img :src="img" alt=""/>
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



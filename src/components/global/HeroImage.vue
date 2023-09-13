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
.global-hero-top {
  position: relative;
}
.global-hero-tops:not(:nth-child(1)) {
  display: none;
}
.global-hero-tops::after {
  position: absolute;
  right: -20px;
  content: "";
  padding: 20px;
  height: 100%;
  z-index: -1;
}
.global-hero-tops h1 {
  font-weight: bold;
}
.global-hero-tops h1 span {
  color: #1d5699;
}
.global-hero-img {
  position: relative;
}
.global-hero-bottom-btn {
  position: absolute;
  right: 10px;
  text-align: center;
  bottom: 0px;
  background-color: #202020;
  width: 200px;
  padding: 10px;
  color: white;
}


</style>



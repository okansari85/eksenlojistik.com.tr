<template>
  <section class="hero" style="backdrop-filter: blur(2px)">
    <div class="overlay"></div>
    <div class="position-relative hero-wrapper">
      <!--   Hero Image   -->
      <img src="../../assets/image/home/eksen_hero2.jpg" alt="" class="hero-img vh-100 w-100" style="object-fit: cover">
      <div class="container-fluid gx-0 overflow-hidden">
          <div class="hero-text position-absolute top-50 start-50 translate-middle bg-white bg-opacity-50 rounded-3 p-5">
            <h1 class="display-1"><span>Sadece bir çağrıda</span> en kısa sürede <span>istediğin yere</span></h1>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style scoped>

</style>
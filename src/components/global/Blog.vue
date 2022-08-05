<template>
  <section class="d-none">
    <div class="container text-center pb-5">
      <span class="text-uppercase text-black-50">blog</span>
      <h1>Size daha iyi hizmet sunduğumuzda <br/> bunun karşılığını ödül olarak aldık</h1>
      <div class="row justify-content-between align-items-center">
        <router-link class="blog-item py-4 col-md-4" :to="'/news-detail/' + id">
          <img src="/image/global/v5.jpg" alt="">
          <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
        </router-link>
        <router-link class="blog-item py-4 col-md-4" :to="'/news-detail/' + id">
          <img src="/image/global/v6.jpg" alt="">
          <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
        </router-link>
        <router-link class="blog-item py-4 col-md-4" :to="'/news-detail/' + id">
          <img src="/image/global/v7.jpg" alt="">
          <p class="py-1 fs-5 fw-bold">Örnek Blog Yazısı</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>

</style>
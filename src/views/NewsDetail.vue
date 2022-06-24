<template>
  {{ $route.params.id }}
  <section class="news-detail py-5">
      <div class="news-detail-top">
        <div class="container py-5">
          <div class="d-md-flex justify-content-between">
            <div class="col-md-5">
              <h1 class="text-capitalize fw-bold">2022 ilk aylarında yatırımıza devam ediyoruz <span
                  class="d-block" style="color: #ffa10e">eksen105</span></h1>
            </div>
            <div>
              <ul class="d-flex flex-md-column justify-content-between pt-3 pt-md-0">
                <li>
                  <div class="d-flex">
                    <i class="bi bi-envelope-fill pe-3"></i>
                    <ul>
                      <li><span class="fw-500">Tarih</span></li>
                      <li class="fs-08">23 Mar 2022</li>
                    </ul>
                  </div>
                </li>
                <li class="py-md-3">
                  <div class="d-flex">
                    <i class="bi bi-geo-alt-fill pe-3"></i>
                    <ul>
                      <li><span class="fw-500">Paylaş</span></li>
                      <li class="pb-0"><a href="#" class="fs-08">Facebook</a></li>
                      <li class="pb-0"><a href="#" class="fs-08">Twitter</a></li>
                      <li class="pb-0"><a href="#" class="fs-08">Linkedin</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <i class="bi bi-geo-alt-fill pe-3"></i>
                    <span class="fw-500">Ülke <span class="d-block fs-08 fw-normal">Turkey</span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

      <section class="news-detail-middle py-5 bg-light">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 news-detail-middle-text">
              <strong class="fw-bold">Haber Alt Başlığı</strong>
              <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis deserunt dolore ipsum
                mollitia omnis quas quibusdam quos, ratione rem!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis deserunt dolore ipsum
                mollitia omnis quas quibusdam quos, ratione rem!</p>
            </div>
            <div class="col-md-5 news-detail-middle-image">
              <img src="/image/home/news-detail1.png" alt="">
            </div>
          </div>
        </div>

      </section>
  </section>

  <Blog/>

</template>

<script>
import Blog from '@/components/global/Blog';

export default {
  name: "NewsDetail",
  components: {
    Blog
  },
  mounted () {
    window.scrollTo(0, 0)
  }

}
</script>

<style scoped>

</style>
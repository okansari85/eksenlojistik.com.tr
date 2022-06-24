<template>
<section class="hero-bottom-map px-3 px-lg-0 pt-0 position-relative bg-custom-dark" id="numberSection">
  <div class="container">
    <div class="row justify-content-center justify-content-lg-between align-items-center position-relative services-item-hero" style="z-index: 10000;">
      <div class="col-6 col-lg-4 text-center hero-item">
        <img src="/image/home/hero-bottom-item1.png" alt="">
        <div class=" text-uppercase fw-bold mt-3">
          <h3 class="fw-bold">Kara yolu</h3>
          <span>taşımacılığı</span>
          <div class="my-3">
            <router-link to="/services" class="btn btn-main my-2 my-md-0 mx-auto d-block">detaylı bilgi</router-link>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-4 text-center hero-item">
        <img src="/image/home/hero-bottom-item2.png" alt="">
        <div class="text-uppercase fw-bold mt-3">
          <h3 class="fw-bold">gümrükleme</h3>
          <span>hizmeti</span>
          <div class="my-3">
            <router-link to="/services" class="btn btn-main my-2 my-md-0 mx-auto d-block">detaylı bilgi</router-link>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-4 text-center hero-item">
        <img src="/image/home/hero-bottom-item3.png" alt="">
        <div class=" text-uppercase fw-bold mt-3">
          <h3 class="fw-bold">proje</h3>
          <span>taşımacılığı</span>
          <div class="my-3">
            <router-link to="/services" class="btn btn-main my-2 my-md-0 mx-auto d-block">detaylı bilgi</router-link>
          </div>
        </div>
      </div>
    </div>
    <a class="wrapper-down-icon" href="#solutions">
      <div class="circle">
      </div>
      <div class="circle circle-2">
      </div>
      <div class="arrow">
        <div class="arrow_line">
        </div>
        <div class="arrow_tip-wrapper">
          <div class="arrow_tip left">
          </div>
          <div class="arrow_tip right">
          </div>
        </div>
      </div>
    </a>
  </div>
  <div class="container-fluid text-center py-5 gx-0 overflow-hidden">
    <img src="/image/home/maps_.svg" alt="" class="py-3">
    <div class="row justify-content-center align-items-center py-5 content-text">
      <div class="numbers-top col-lg-5 text-center pb-5">
        <div class="title text-uppercase display-4 fw-bold pb-3">bir yılda 52.311km yol yaptık</div>
        <p class="">Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL, tüm  sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>

      </div>
    </div>
    </div>
</section>
</template>

<script>



export default {
  name: "Number",
}
</script>

<style scoped lang="scss">

@media (max-width:991.98px) {
  .content-text {
    position: relative;
  }
}



@media(min-width:992px) {
  .content-text {
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    margin: auto;
  }
  .services-item-hero {
    margin-top: -150px;
  }
}

.hero-item {
  .btn-main {
    border: 1px solid white;
    color: white;
    font-size: .8rem;
  }
}


</style>